const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`div#thing {
  color: #f00;
}

ul.list {
  color: #f00;
}

ul li.item {
  color: #f00;
}

a[href='place'] {
  color: #f00;
}
`)

test("Qualifying element scss", t => {
  t.plan(6)

  postcss()
    .use(stylelint({ code: invalidScss, config: config, quietDeprecationWarnings: true, }))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

    function checkResult(result) {
      t.equal(result.warnings().length, 5, "flags 5 warning")
      t.is(result.warnings()[0].text, "Expected \"div#thing\" to have no more than 0 ID selectors (selector-max-id)", "correct warning text")
      t.is(result.warnings()[1].text, "Unexpected qualifying type selector \"div#thing\" (selector-no-qualifying-type)", "correct warning text")
      t.is(result.warnings()[2].text, "Unexpected qualifying type selector \"ul.list\" (selector-no-qualifying-type)", "correct warning text")
      t.is(result.warnings()[3].text, "Unexpected qualifying type selector \"li.item\" (selector-no-qualifying-type)", "correct warning text")
      t.is(result.warnings()[4].text, "Unexpected qualifying type selector \"a[href=\'place\']\" (selector-no-qualifying-type)", "correct warning text")
    }
})

function logError(err) {
  console.log(err.stack)
}
