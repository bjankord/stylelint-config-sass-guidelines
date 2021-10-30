const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`.spacebetweenparens {
  @include box-shadow( 0 2px 2px rgba( 0, 0, 0, 0.2 ) );
  color: rgba( 0, 0, 0, 0.1 );
}

@media ( max-width: 300px ) {
  .zerounit {
    margin: 0;
  }
}

@media (max-width: 300px ) {
  .zerounit {
    margin: 0;
  }
}
`)

test("Space between parens scss", t => {
  t.plan(6)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 5, "flags 2 warning")
    t.is(result.warnings()[0].text, "Unexpected whitespace after \"(\" (function-parentheses-space-inside)", "correct warning text")
    t.is(result.warnings()[1].text, "Unexpected whitespace before \")\" (function-parentheses-space-inside)", "correct warning text")
    t.is(result.warnings()[2].text, "Unexpected whitespace after \"(\" (media-feature-parentheses-space-inside)", "correct warning text")
    t.is(result.warnings()[3].text, "Unexpected whitespace before \")\" (media-feature-parentheses-space-inside)", "correct warning text")
    t.is(result.warnings()[4].text, "Unexpected whitespace before \")\" (media-feature-parentheses-space-inside)", "correct warning text")
  }
})

function logError(err) {
  console.log(err.stack)
}
