const config = require("../../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const invalidScss = (
`.Foo {
  color: #f00;
}

.fooBar {
  color: #f00;
}

.fooBar5 {
  color: #f00;
}

.foo-Bar {
  color: #f00;
}

.foo-Bar---baz {
  color: #f00;
}
`)

test("Selector format scss", t => {
  t.plan(6)

  postcss()
    .use(stylelint({ code: invalidScss, config: config,}))
    .process(invalidScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 5, "flags 1 warning")
    t.is(result.warnings()[0].text, "Selector should be written in lowercase with hyphens (selector-class-pattern)", "correct warning text")
    t.is(result.warnings()[1].text, "Selector should be written in lowercase with hyphens (selector-class-pattern)", "correct warning text")
    t.is(result.warnings()[2].text, "Selector should be written in lowercase with hyphens (selector-class-pattern)", "correct warning text")
    t.is(result.warnings()[3].text, "Selector should be written in lowercase with hyphens (selector-class-pattern)", "correct warning text")
    t.is(result.warnings()[4].text, "Selector should be written in lowercase with hyphens (selector-class-pattern)", "correct warning text")
    }
})

function logError(err) {
  console.log(err.stack)
}
