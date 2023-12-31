const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`@function calculationFunction($some-number, $another-number) {
  @return $some-number + $another-number;
}

@mixin myMixin() {
  color: #fff;
}

$myVar: 10px;

%placeHolder {
  color: #f00;
}
`)

test("Name format scss", t => {
  t.plan(4)

  postcss()
    .use(stylelint({ code: invalidScss, config: config, quietDeprecationWarnings: true, }))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 3, "flags 3 warning")
    var warningsArray = Object.values(result.warnings()).map(x => x.text);
    t.is(
      warningsArray.includes('Expected @function name to match specified pattern (scss/at-function-pattern)'),
      true,
      'correct warning text',
    )
    t.is(
      warningsArray.includes('Expected $ variable name to match specified pattern (scss/dollar-variable-pattern)'),
      true,
      'correct warning text',
    )
    t.is(
      warningsArray.includes('Expected %-placeholder \"%placeHolder\" to match specified pattern (scss/percent-placeholder-pattern)'),
      true,
      'correct warning text',
    )
  }
})

function logError(err) {
  console.log(err.stack)
}
