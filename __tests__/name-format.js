import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

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
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 3, "flags 3 warning")
    t.is(result.warnings()[0].text, "Expected @function name to match specified pattern (scss/at-function-pattern)", "correct warning text")
    t.is(result.warnings()[1].text, "Expected @mixin name to match specified pattern (scss/at-mixin-pattern)", "correct warning text")
    t.is(result.warnings()[2].text, "Expected $ variable name to match specified pattern (scss/dollar-variable-pattern)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
