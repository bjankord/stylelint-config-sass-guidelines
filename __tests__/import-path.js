import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = (
`@import 'foo/_bar.scss';
@import '_bar.scss';
@import '_bar';
@import 'bar.scss';
`)

test("Import path scss", t => {
  t.plan(7)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 6, "flags 6 warning")
    t.is(result.warnings()[0].text, "Unexpected extension \".scss\" in imported partial name (scss/at-import-partial-extension-blacklist)", "correct warning text")
    t.is(result.warnings()[1].text, "Unexpected extension \".scss\" in imported partial name (scss/at-import-partial-extension-blacklist)", "correct warning text")
    t.is(result.warnings()[2].text, "Unexpected extension \".scss\" in imported partial name (scss/at-import-partial-extension-blacklist)", "correct warning text")
    t.is(result.warnings()[3].text, "Unexpected leading underscore in imported partial name (scss/at-import-no-partial-leading-underscore)", "correct warning text")
    t.is(result.warnings()[4].text, "Unexpected leading underscore in imported partial name (scss/at-import-no-partial-leading-underscore)", "correct warning text")
    t.is(result.warnings()[5].text, "Unexpected leading underscore in imported partial name (scss/at-import-no-partial-leading-underscore)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
