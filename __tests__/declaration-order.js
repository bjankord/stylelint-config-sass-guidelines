import config from '../'
import stylelint from 'stylelint'
import postcss from 'postcss'
import scssSyntax from 'postcss-scss'
import test from 'tape'

const invalidScss = `// scss features not lintable for declaration order in stylelint
.declarationorder {
  p {
    color: #f00;
    background-color: #0f0;
  }

  color: #f00;
  @include message-box();
  @extend %error;
}

`

test('Declaration order scss', t => {
  t.plan(5)

  postcss()
    .use(stylelint({ code: invalidScss, config: config }))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    console.log(result)
    t.equal(result.warnings().length, 4, 'flags 4 warnings')
    t.is(
      result.warnings()[0].text,
      'Expected declaration to come before rule (order/order)',
      'correct warning text',
    )
    t.is(
      result.warnings()[1].text,
      'Expected blockless @include to come before declaration (order/order)',
      'correct warning text',
    )
    t.is(
      result.warnings()[2].text,
      'Expected @extend to come before blockless @include (order/order)',
      'correct warning text',
    )
    t.is(
      result.warnings()[3].text,
      'Expected background-color to come before color (order/properties-alphabetical-order)',
      'correct warning text',
    )
  }
})

function logError(err) {
  console.log(err.stack)
}
