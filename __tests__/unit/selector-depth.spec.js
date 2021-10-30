const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`.one .two .three > .four {
  color: #f00;
}

.one .two {
  .three > .four {
    color: #f00;
  }
}
`)

test("Selector depth scss", t => {
  t.plan(3)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 2, "flags 2 warning")
    t.is(result.warnings()[0].text, "Expected \".one .two .three > .four\" to have no more than 3 compound selectors (selector-max-compound-selectors)", "correct warning text")
    t.is(result.warnings()[1].text, "Expected \".one .two .three > .four\" to have no more than 3 compound selectors (selector-max-compound-selectors)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
