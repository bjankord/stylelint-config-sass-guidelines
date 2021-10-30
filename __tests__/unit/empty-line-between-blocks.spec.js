const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`p {
  margin: 0;
  em {
    color: #f00;
  }
}
a {
  color: #f00;
}
`)

test("Empty line between scss", t => {
  t.plan(3)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 2, "flags 2 warning")
    t.is(result.warnings()[0].text, "Expected empty line before rule (rule-empty-line-before)", "correct warning text")
    t.is(result.warnings()[1].text, "Expected empty line before rule (rule-empty-line-before)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
