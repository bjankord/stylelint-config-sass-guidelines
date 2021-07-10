const config = require("../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`.spaceafterpropertyname {
  margin : 0;
}
`)

test("Space after property name scss", t => {
  t.plan(2)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 1, "flags 1 warning")
    t.is(result.warnings()[0].text, "Unexpected whitespace before \":\" (declaration-colon-space-before)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
