import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = (
`.property-spelling {
  diplay: none; // "display" is spelled incorrectly
  heigth: 100%; // "height" is spelled incorrectly
}
`)

test("Property spelling scss", t => {
  t.plan(3)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 2, "flags 2 warning")
    t.is(result.warnings()[0].text, "Unexpected unknown property \"diplay\" (property-no-unknown)", "correct warning text")
    t.is(result.warnings()[1].text, "Unexpected unknown property \"heigth\" (property-no-unknown)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
