import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = (
`p {
  margin: 0;
  em {
    color: #f00;
  }
}
a {
  color: #f00;
}
`)

test("Empty line between scss", t => {
  t.plan(3)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 2, "flags 2 warning")
    t.is(result.warnings()[0].text, "Expected empty line before nested rule (rule-nested-empty-line-before)", "correct warning text")
    t.is(result.warnings()[1].text, "Expected empty line before non-nested rule (rule-non-nested-empty-line-before)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
