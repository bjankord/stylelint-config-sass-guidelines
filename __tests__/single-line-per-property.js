import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = (
`.singlelineproperty1 {
  margin: 0; padding: 0;
}

.singlelineproperty1 { margin: 0; padding: 0; }
`)

test("Single line per property scss", t => {
  t.plan(4)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 3, "flags 3 warning")
    t.is(result.warnings()[0].text, "Expected newline after \";\" (declaration-block-semicolon-newline-after)", "correct warning text")
    t.is(result.warnings()[1].text, "Expected newline after \";\" (declaration-block-semicolon-newline-after)", "correct warning text")
    t.is(result.warnings()[2].text, "Expected no more than 1 declaration(s) (declaration-block-single-line-max-declarations)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
