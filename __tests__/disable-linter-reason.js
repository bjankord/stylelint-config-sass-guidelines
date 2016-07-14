import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = (
`// stylelint-disable selector-class-pattern
.disable__linter__reason {
  color: #f00;
}
// stylelint-enable selector-class-pattern
`)

test("Disable linter reason scss", t => {
  t.plan(2)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 1, "flags 1 warning")
    t.is(result.warnings()[0].text, "Expected comment reason before `stylelint-disable` comment (stylelint-disable-reason)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
