import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = `
.one {
  .two {
    background-color: #c0ffee;

    @media (min-width: 420px) {
      background-color: #bada55;
    }

    @include mixin() {
      background-color: #ba2;
    }

    .three {
      .four {
        color: #f00;
      }
    }
  }
}
`

test("Nesting depth scss", t => {
  t.plan(5)

  postcss()
    .use(stylelint({ code: invalidScss, config: config }))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 3, "flags 3 warning")

    t.is(
      result.warnings()[0].text,
      "Expected nesting depth to be no more than 1 (max-nesting-depth)",
      "correct warning text"
    )

    t.is(
      result.warnings()[1].text,
      "Expected nesting depth to be no more than 1 (max-nesting-depth)",
      "correct warning text"
    )

    t.not(
      result.warnings()[2].node.type,
      "atrule",
      "max-depth ignores at-rules"
    )

    t.is(
      result.warnings()[2].text,
      'Expected ".one .two .three .four" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      "correct warning text"
    )
  }
})

function logError(err) {
  console.log(err.stack)
}
