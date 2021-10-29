const config = require("../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

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

const validScss = `
.button {
  @each $key, $value in $colors {
    &-#{$key} {
      background-color: $value;
    }
  }
}
`

test("Nesting depth scss", t => {
  t.plan(6)

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

  postcss()
    .use(stylelint({ code: validScss, config: config }))
    .process(validScss, { syntax: scssSyntax })
    .then(function(result) {
      t.is(
        result.warnings().length,
        0
      )
    })
    .catch(logError)
})

function logError(err) {
  console.log(err.stack)
}
