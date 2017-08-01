# 3.1.0
- Update: Bumped up `stylelint-scss` to v2.0.0

# 3.0.1
- Update: Update copyright years in license

# 3.0.0
- Addition: Added [greenkeeper](https://greenkeeper.io/) to help keep dependencies up to date
- Update: Bumped up `stylelint` to v8.0.0
- Update: Bumped up `stylelint-order` to v0.6.0
- Removal: Removed unused `stylelint-selector-no-utility` dependency from package.json

# 3.0.0-rc.1
- Addition: Added [greenkeeper](https://greenkeeper.io/) to help keep dependencies up to date
- Update: Bumped up `stylelint` to v8.0.0
- Update: Bumped up `stylelint-order` to v0.6.0
- Removal: Removed unused `stylelint-selector-no-utility` dependency from package.json

# 2.2.0
- Update: Bumped up `stylelint` to v7.12.0
- Fix: Replaced deprecated `selector-no-id` rule with `selector-max-id` rule

# 2.1.0
- Update: Bumped up `stylelint-order` to v0.4.3
- Fix: Replaced deprecated `order/declaration-block-properties-alphabetical-order` rule with `order/properties-alphabetical-order` rule

# 2.0.0
- Addition: `stylelint-order` plugin
- Removal: `stylelint-disable-reason` rule. This rule has been deprecated in stylelint 7.8 and in 8.0 will be removed. See stylelint CHANGELOG: https://stylelint.io/CHANGELOG/#780
- Fix: Replaced deprecated `declaration-block-properties-order` rule with `order/declaration-block-properties-alphabetical-order` rule
- Fix: Replaced deprecated `rule-nested-empty-line-before` rule with `rule-empty-line-before` rule
- Fix: Replaced deprecated `rule-non-nested-empty-line-before` rule with `rule-empty-line-before` rule
- Update: Bumped up `stylelint` to v7.8.0
- Update: Bumped up `stylelint-scss` to v1.4.1

# 1.1.1

- Fix: Regex for selector-class-pattern now matches lowercase with hyphens correctly
- Fix: Updated test for url-quotes.js to match updated error text

# 1.1.0

- Addition: `scss/dollar-variable-colon-space-after` rule
- Addition: `scss/dollar-variable-colon-space-before` rule
- Update: Bumped up `stylelint` to v7.1.0
- Update: Bumped up `stylelint-scss` to v1.3.4

# 1.0.0

- Addition: `stylelint-disable-reason` rule
- Addition: `property-no-unknown` rule
- Addition: `media-feature-parentheses-space-inside` rule
- Addition: `no-missing-end-of-source-newline` rule
- Removal: `no-missing-eof-newline `rule
- Removal: `function-calc-no-unspaced-operator` rule
- Update: Bumped up `stylelint` to v7.0.2
- Update: Bumped up `stylelint-scss` to v1.2.1

# 0.2.0

- Addition: `function-parentheses-space-inside` rule
- Addition: `scss/at-import-partial-extension-blacklist` rule
- Addition: `declaration-block-properties-order` rule
- Addition: `selector-no-vendor-prefix` rule
- Addition: `media-feature-name-no-vendor-prefix` rule
- Addition: `at-rule-no-vendor-prefix` rule
- Fix: Sorted stylelint rules alphabetically in config
- Fix: `max-nesting-depth` rule set to 1 to match Sass Guidelines NestingDepth max_depth: 1 rule
- Fix: Cleaned up comments in `failing-test-case.scss`
- Fix: Declaration order now sorted alphabetically in `passing-test-case.scss`
- Fix: Updated tests to account for new rules
- Removal: `block-closing-brace-newline-after` rule
- Removal: `no-extra-semicolons` rule
- Removal: `string-no-newline` rule

# 0.1.0

- Initial release
