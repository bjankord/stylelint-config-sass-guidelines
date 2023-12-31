const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`.parentreference {
  & > .bar {
    color: #f00;
  }
}
`)

test("Unnecessary parent reference scss", t => {
  t.plan(2)

  postcss()
    .use(stylelint({ code: invalidScss, config: config, quietDeprecationWarnings: true, }))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 1, "flags 1 warning")
    t.is(result.warnings()[0].text, "Unnecessary nesting selector (&) (scss/selector-no-redundant-nesting-selector)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
