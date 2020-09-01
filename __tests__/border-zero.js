import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = (
`.borderzero {
  border: none;
}
`)

test("Border zero scss", t => {
  t.plan(2)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 1, "flags 1 warning")
    t.is(result.warnings()[0].text, "Unexpected value \"none\" for property \"border\" (declaration-property-value-disallowed-list)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
