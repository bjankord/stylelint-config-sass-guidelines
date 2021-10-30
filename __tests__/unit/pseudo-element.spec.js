const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`p:before {
  content: '>';
}

p::hover {
  color: #f00;
}
`)

test("Pseudo element scss", t => {
  t.plan(3)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 2, "flags 2 warning")
    t.is(result.warnings()[0].text, "Expected double colon pseudo-element notation (selector-pseudo-element-colon-notation)", "correct warning text")
    t.is(result.warnings()[1].text, "Unexpected unknown pseudo-element selector \"::hover\" (selector-pseudo-element-no-unknown)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
