import config from "../"
import stylelint from "stylelint"
import postcss from "postcss"
import scssSyntax from "postcss-scss"
import test from "tape"

const invalidScss = (
`// scss features not lintable for declaration order in stylelint
.declarationorder {
  p {
    color: #f00;
    background-color: #0f0;
  }

  color: #f00;
  @include message-box();
  @extend %error;
}

`)

test("Declaration order scss", t => {
  t.plan(2)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 1, "flags 1 warning")
    t.is(result.warnings()[0].text, "Expected background-color to come before color (order/declaration-block-properties-alphabetical-order)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
