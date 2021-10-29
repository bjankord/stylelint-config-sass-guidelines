const config = require("../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`.spaceafterpropertycolon {
  margin:0; // No space
  padding:  0; // Too many spaces
}
`)

test("Space after property colon scss", t => {
  t.plan(3)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 2, "flags 2 warning")
    t.is(result.warnings()[0].text, "Expected single space after \":\" with a single-line declaration (declaration-colon-space-after)", "correct warning text")
    t.is(result.warnings()[1].text, "Expected single space after \":\" with a single-line declaration (declaration-colon-space-after)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
