const config = require("../index");
const stylelint = require("stylelint");
const postcss = require("postcss");
const scssSyntax = require("postcss-scss");
const test = require("tape");

const validScss = (
`// Bang Format test
.bangformat {
  color: #000 !important;
}

// BEM Depth test
// scss-lint:disable SelectorFormat
/* stylelint-disable selector-class-pattern */
.block__element {
  color: #f00;
}
/* stylelint-enable selector-class-pattern */
// scss-lint:enable SelectorFormat

// Border Zero test
.borderzero {
  border: 0;
}

// Color Keyword test
.colorkeyword {
  color: #0f0;
}

// Debug statement test

// DeclarationOrder test
// scss-lint:disable NestingDepth
.declarationorder {
  @extend %error;
  @include message-box();

  color: #f00;

  p {
    color: #f00;
  }
}
// scss-lint:enable NestingDepth

// ElsePlacement test
$width: auto;

.elseplacement {
  @if $width == 'auto' {
    width: $width;
  } @else {
    display: inline-block;
    width: $width;
  }
}

// EmptyLineBetweenBlocks test
// scss-lint:disable NestingDepth
p {
  margin: 0;

  em {
    color: #f00;
  }
}

a {
  color: #f00;
}
// scss-lint:enable NestingDepth

// Hexlength test
.hexlength {
  color: #f2e;
}

// HexNotation test
.hexnotation {
  color: #f00;
}

// Import Path test
@import 'foo/bar';
@import 'bar';

// Indentation test
.indentation {
  color: #f00;
}
// No test for allow_non_nested_indentation

// Leading Zero test
.leadingzero {
  margin: 0.5em;
}

// NameFormat test
// Functions, mixins, variables, and placeholders should be declared with all lowercase letters and hyphens instead of underscores.

@function calculation-function($some-number, $another-number) {
  @return $some-number + $another-number;
}

@mixin my-mixin() {
  color: #fff;
}

$my-var: 10px;

%place-holder {
  color: #f00;
}

// Private Naming Convention test
// Enforces that functions, mixins, and variables that follow the private naming convention (default to underscore-prefixed, e.g. $_foo) are defined and used within the same file.

$_foo: #f00;

figure {
  color: $_foo;
}

// PseudoElement test
a::before {
  content: '>';
}

a:hover {
  color: #f00;
}

// Selector Format test
.selector-format {
  color: #f00;
}

.foo {
  color: #f00;
}

.foo5 {
  color: #f00;
}

.foo-5 {
  color: #f00;
}

.foo--5 {
  color: #f00;
}

.foo-bar {
  color: #f00;
}

.foo--bar {
  color: #f00;
}

.foo-bar-5 {
  color: #f00;
}

.foo-bar-baz {
  color: #f00;
}

.foo-bar--baz {
  color: #f00;
}

.foo-bar-baz--qux {
  color: #f00;
}

.foo-bar--baz--qux {
  color: #f00;
}

.foo--bar--baz--qux {
  color: #f00;
}

.u-hidden {
  color: #f00;
}

.u-class-name {
  color: #f00;
}

.is-stateclass {
  color: #f00;
}

.has-state-class {
  color: #f00;
}

.js-dependantclass {
  color: #f00;
}

.namespace-u-text-center {
  color: #f00;
}

.namespace-u-sm-size11of12 {
  color: #f00;
}

.u-foobar17 {
  color: #f00;
}

.u-16by9 {
  color: #f00;
}

// Shorthand test
.shorthand {
  margin: 1px;
}

// SingleLinePerProperty test
.singlelineproperty1 {
  margin: 0;
  padding: 0;
}

// SingleLinePerSelector test
.error,
.explanation {
  color: #f00;
}

// SpaceAfterComma test
.spaceaftercomma {
  @include box-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
  color: rgba(0, 0, 0, 0.1);
}

// SpaceAfterPropertyColon test
.spaceafterpropertycolon {
  margin: 0;
  padding: 0;
}

// SpaceAfterPropertyName test
.spaceafterpropertyname {
  margin: 0;
}

// SpaceAfterVariableColon test
$spaceaftervariblecolon: #fff; // No space

// SpaceAfterVariableName test
$spaceaftervariblename: #f00;

// SpaceAroundOperator test
.spacearoundoperator {
  margin: 5px + 5px;
  padding: 5px + 5px;
}

// SpaceBeforeBrace test
.spacebeforebrace1 {
  color: #f00;
}

// SpaceBetweenParens test
.spacebetweenparens {
  @include box-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
  color: rgba(0, 0, 0, 0.1);
}

// StringQuotes test
.stringquotes {
  content: 'hello';
}

// TrailingSemicolon test
.trailingsemicolon {
  background-color: #fff;
  color: #fff;
}

// TrailingZero test
.trailingzero {
  margin: 0.5em;
}

// UnnecessaryMantissa test
.mantissa {
  margin: 1em;
}

// UnnecessaryParentReference test
// scss-lint:disable NestingDepth
.parentreference {
  > .bar {
    color: #f00;
  }
}
// scss-lint:enable NestingDepth

// UrlQuotes test
.quotes-url {
  background: url('example.png');
}

// Zero Unit test
.zerounit {
  margin: 0;
}

// SpaceBetweenParens media query test
@media (max-width: 300px) {
  .media-parens {
    margin: 0;
  }
}
`)

test("Valid scss", t => {
  t.plan(1)

  postcss()
    .use(stylelint({ code: validScss, config: config,}))
    .process(validScss, { syntax: scssSyntax })
    .then(checkResult)
    .catch(logError)

  function checkResult(result) {
    t.equal(result.warnings().length, 0, "flags 0 warning")
  }
})

function logError(err) {
  console.log(err.stack)
}
