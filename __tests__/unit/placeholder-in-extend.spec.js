const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`.fatal {
  @extend .error;
}
`)

test("Placeholder in extend scss", t => {
  t.plan(2)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 1, "flags 1 warning")
    t.is(result.warnings()[0].text, "Expected a placeholder selector (e.g. %placeholder) to be used in @extend (scss/at-extend-no-missing-placeholder)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
