module.exports = {
  "plugins": ["stylelint-scss"],
  "customSyntax": "postcss-scss",
  "rules": {
    "at-rule-disallowed-list": ["debug"],
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "block-no-empty": true,
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "declaration-block-single-line-max-declarations": 1,
    "declaration-property-value-disallowed-list": {
      "border": ["none"],
      "border-top": ["none"],
      "border-right": ["none"],
      "border-bottom": ["none"],
      "border-left": ["none"]
    },
    "function-url-quotes": "always",
    "length-zero-no-unit": true,
    "max-nesting-depth": [
      1,
      {
        "ignoreAtRules": [
          "each",
          "media",
          "supports",
          "include"
        ]
      }
    ],
    "media-feature-name-no-vendor-prefix": true,
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/no-global-function-names": true,
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-class-pattern": [
      "^[a-z0-9\\-]+$",
      {
        "message":
          "Selector should be written in lowercase with hyphens (selector-class-pattern)"
      }
    ],
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "value-no-vendor-prefix": true
  }
}
