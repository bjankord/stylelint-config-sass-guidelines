const config = require("../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`.shorthand {
  margin: 1px 1px 1px 1px;
}
`)

test("Shorthand scss", t => {
  t.plan(2)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 1, "flags 1 warning")
    t.is(result.warnings()[0].text, "Unexpected longhand value \'1px 1px 1px 1px\' instead of \'1px\' (shorthand-property-no-redundant-values)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
