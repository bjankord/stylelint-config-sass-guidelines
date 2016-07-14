import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = (
`.spaceaftercomma {
  @include box-shadow(0 2px 2px rgba(0,0,0,0.2));
  color: rgba(0,0,0,0.1);
}
`)

test("Space after comma scss", t => {
  t.plan(4)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 3, "flags 3 warning")
    t.is(result.warnings()[0].text, "Expected single space after \",\" in a single-line function (function-comma-space-after)", "correct warning text")
    t.is(result.warnings()[1].text, "Expected single space after \",\" in a single-line function (function-comma-space-after)", "correct warning text")
    t.is(result.warnings()[2].text, "Expected single space after \",\" in a single-line function (function-comma-space-after)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
