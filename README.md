# stylelint-config-sass-guidelines

[![NPM version](http://img.shields.io/npm/v/stylelint-config-sass-guidelines.svg)](https://www.npmjs.com/package/stylelint-config-sass-guidelines)
[![Build Status](https://github.com/bjankord/stylelint-config-sass-guidelines/workflows/CI/badge.svg)](https://github.com/bjankord/stylelint-config-sass-guidelines/actions?workflow=CI)
[![Known Vulnerabilities](https://snyk.io/test/github/bjankord/stylelint-config-sass-guidelines/badge.svg)](https://snyk.io//test/github/bjankord/stylelint-config-sass-guidelines)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/bjankord/stylelint-config-sass-guidelines/blob/main/CONTRIBUTING.md)
[![Downloads per month](https://img.shields.io/npm/dm/stylelint-config-sass-guidelines.svg)](https://npmcharts.com/compare/stylelint-config-sass-guidelines)

> A stylelint config inspired by [sass-guidelin.es](https://sass-guidelin.es/).

This linter has been designed / tested with SCSS syntax based on the SCSS guidelines documented in https://sass-guidelin.es/. It is intended for use with SCSS syntax, not Sass (tab style) syntax.

This config:
- includes the [`stylelint-scss` plugin module](https://github.com/stylelint-scss/stylelint-scss) and turns on rules for SCSS specific code
- includes the [`@stylistic/stylelint-plugin` plugin module](https://github.com/stylelint-stylistic/stylelint-stylistic) and turns on rules for stylistic settings
- includes the [`postcss-scss` custom syntax module](https://github.com/postcss/postcss-scss) and configures it
- has a peer dependency on [`stylelint`](https://github.com/stylelint/stylelint)
  - You'll need to install this package in your project
- has a peer dependency on [`postcss`](https://github.com/postcss/postcss)
  - You'll need to install this package in your project

## Installation

Using NPM
```console
$ npm i -D stylelint postcss stylelint-config-sass-guidelines
```

Using Yarn
```console
$ yarn add -D stylelint postcss stylelint-config-sass-guidelines
```

Using PNPM
```console
$ pnpm add -D stylelint postcss stylelint-config-sass-guidelines
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-sass-guidelines"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example:


```json
{
  "extends": "stylelint-config-sass-guidelines",
  "rules": {
    "selector-max-compound-selectors": 4,
    "value-no-vendor-prefix": false
  }
}
```

## Documentation

### Configured lints

This is a list of the lints turned on in this configuration, and what they do.

#### At-Rule

* [`at-rule-disallowed-list`](https://stylelint.io/user-guide/rules/at-rule-disallowed-list/): Specify a list of disallowed at-rules.
  * `"debug"` Disallow the use of `@debug`.
* [`at-rule-no-unknown`](https://stylelint.io/user-guide/rules/at-rule-no-unknown/): Disallow unknown at-rules.
* [`at-rule-no-vendor-prefix`](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/): Disallow vendor prefixes for at-rules.

#### Block

* [`block-no-empty`](https://stylelint.io/user-guide/rules/block-no-empty/): Disallow empty blocks.


#### Color

* [`color-hex-length`](https://stylelint.io/user-guide/rules/color-hex-length/): Always use short hex notation, where available.
* [`color-named`](https://stylelint.io/user-guide/rules/color-named/): Colors must never be named.
* [`color-no-invalid-hex`](https://stylelint.io/user-guide/rules/color-no-invalid-hex/): Hex values must be valid.

#### Declaration Block

* [`declaration-block-single-line-max-declarations`](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): There should never be more than `1` declaration per line.

#### Declaration Property

* [`declaration-property-value-disallowed-list`](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list/): Specify a list of disallowed property and value pairs within declarations.
  * `^border`: Disallow the use of the word `none` for borders, use `0` instead. The intent of this rule is to enforce consistency, rather than define which is "better."

#### Function

* [`function-url-quotes`](https://stylelint.io/user-guide/rules/function-url-quotes/): URLs must always be quoted.

#### General

* [`length-zero-no-unit`](https://stylelint.io/user-guide/rules/length-zero-no-unit/): Disallow units for zero lengths.
* [`max-nesting-depth`](https://stylelint.io/user-guide/rules/max-nesting-depth/): Limit the allowed nesting depth to `1`. _Ignore_: Nested at-rules `@media`, `@supports`, and `@include`.


#### Media Feature

* [`media-feature-name-no-vendor-prefix`](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/): Disallow vendor prefixes for media feature names.


#### Property

* [`property-no-unknown`](https://stylelint.io/user-guide/rules/property-no-unknown/): Disallow unknown properties
* [`property-no-vendor-prefix`](https://stylelint.io/user-guide/rules/property-no-vendor-prefix/): Disallow vendor prefixes for properties.
* [`shorthand-property-no-redundant-values`](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/): Disallow redundant values in shorthand properties.


#### Rule

* [`rule-empty-line-before`](https://stylelint.io/user-guide/rules/rule-empty-line-before/): There must always be an empty line before multi-line rules. _Except_: Nested rules that are the first of their parent rule. _Ignore_: Rules that come after a comment.

#### SCSS

* [`scss/at-extend-no-missing-placeholder`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md): Disallow at-extends (`@extend`) with missing placeholders.
* [`scss/at-function-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md): SCSS functions must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`scss/at-import-partial-extension-disallowed-list`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-disallowed-list/README.md): Specify list of disallowed file extensions for partial names in `@import` commands.
  * `.scss`: Disallow the use of the `.scss` file extension in imports.
* [`scss/at-rule-no-unknown`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md): SCSS mixins must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`scss/dollar-variable-colon-space-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md): Require a single space after the colon in $-variable declarations.
* [`scss/dollar-variable-colon-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md): Disallow whitespace before the colon in $-variable declarations.
* [`scss/dollar-variable-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md): SCSS variables must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`scss/load-no-partial-leading-underscore`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-no-partial-leading-underscore/README.md): Disallow leading underscore in partial names in `@import`.
* [`scss/no-global-function-names`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md): Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.
* [`scss/percent-placeholder-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md): SCSS `%`-placeholders must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`scss/selector-no-redundant-nesting-selector`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md): Disallow redundant nesting selectors (`&`).

#### Selector

* [`selector-class-pattern`](https://stylelint.io/user-guide/rules/selector-class-pattern/): Selectors must be written in lowercase and match the regex `^(?:u|is|has)-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:-[a-z][a-zA-Z0-9]*)?(?:--[a-z][a-zA-Z0-9]*)?$`.
* [`selector-max-compound-selectors`](https://stylelint.io/user-guide/rules/selector-max-compound-selectors/): Limit the number of compound selectors in a selector to `3`.
* [`selector-max-id`](https://stylelint.io/user-guide/rules/selector-max-id/): Disallow id selectors.
* [`selector-no-qualifying-type`](https://stylelint.io/user-guide/rules/selector-no-qualifying-type/): Disallow qualifying a selector by type.
* [`selector-no-vendor-prefix`](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/): Disallow vendor prefixes for selectors.
* [`selector-pseudo-element-colon-notation`](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): Applicable pseudo-elements must always use the double colon notation.
* [`selector-pseudo-element-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/): Disallow unknown pseudo-element selectors.

#### Stylistic
* [`@stylistic/block-opening-brace-space-before`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-before/README.md): There must always be a single space before the opening brace.
* [`@stylistic/color-hex-case`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/color-hex-case/README.md): Hex colors must be written in lowercase.
* [`@stylistic/declaration-bang-space-after`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-after/README.md): There must never be whitespace after the bang.
* [`@stylistic/declaration-bang-space-before`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-before/README.md): There must always be a single space before the bang.
* [`@stylistic/declaration-block-semicolon-newline-after`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-after/README.md): There must always be a newline after the semicolon.
* [`@stylistic/declaration-block-semicolon-space-before`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-before/README.md): There must never be whitespace before the semicolons.
* [`@stylistic/declaration-block-trailing-semicolon`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-trailing-semicolon/README.md): There must always be a trailing semicolon.
* [`@stylistic/declaration-colon-space-after`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-after/README.md): There must always be a single space after the colon if the declaration's value is single-line.
* [`@stylistic/declaration-colon-space-before`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-before/README.md): There must never be whitespace before the colon.
* [`@stylistic/function-comma-space-after`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-after/README.md): There must always be a single space after the commas in single-line functions.
* [`@stylistic/function-parentheses-space-inside`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-space-inside/README.md): There must never be whitespace on the inside of the parentheses of functions.
* [`@stylistic/indentation`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/indentation/README.md): Indentation should always be 2 spaces.

* [`@stylistic/media-feature-parentheses-space-inside`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-parentheses-space-inside/README.md): There must never be whitespace on the inside of the parentheses of media features.
* [`@stylistic/no-missing-end-of-source-newline`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-missing-end-of-source-newline/README.md): Disallow missing end-of-file newlines in non-empty files.
* [`@stylistic/number-leading-zero`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-leading-zero/README.md): There must always be a leading zero.
* [`@stylistic/number-no-trailing-zeros`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-no-trailing-zeros/README.md): Disallow trailing zeros in numbers.
* [`@stylistic/selector-list-comma-newline-after`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-after/README.md): There must always be a newline after the commas of selector lists.
* [`@stylistic/string-quotes`](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/string-quotes/README.md): Strings must always be wrapped with single quotes.

#### Value

* [`value-no-vendor-prefix`](https://stylelint.io/user-guide/rules/value-no-vendor-prefix/): Disallow vendor prefixes for values.

## [Changelog](CHANGELOG.md)

## Contributors
stylelint-config-sass-guidelines is maintained by Brett Jankord and contributions from the community. Without the code contributions from [all these fantastic people](https://github.com/bjankord/stylelint-config-sass-guidelines/graphs/contributors), stylelint-config-sass-guidelines would not exist.

## [License](LICENSE)
