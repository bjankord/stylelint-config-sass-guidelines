module.exports = {
 "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-property-value-blacklist": {
      "/^border/": [
        "none"
      ]
    },
    "color-named": "never",
    "block-closing-brace-newline-after": [
      "always",
      {
        "ignoreAtRules": ["if", "else"]
      }
    ],
    "at-rule-blacklist": ["debug"],
    "rule-nested-empty-line-before": [
      "always-multi-line",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "rule-non-nested-empty-line-before": [
      "always-multi-line",
      {
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "block-no-empty": true,
    "color-hex-length": "short",
    "color-hex-case": "lower",
    "color-no-invalid-hex": true,
    "selector-no-id": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "indentation": 2,
    "number-leading-zero": "always",
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "selector-max-compound-selectors": 3,
    "scss/at-extend-no-missing-placeholder": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-no-qualifying-type": true,
    "selector-class-pattern": [
      "^(?:u|is|has)-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:-[a-z][a-zA-Z0-9]*)?(?:--[a-z][a-zA-Z0-9]*)?$",
      {
        "message": "Selector should be written in lowercase with hyphens (selector-class-pattern)"
      }
    ],
    "shorthand-property-no-redundant-values": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-single-line-max-declarations": 1,
    "selector-list-comma-newline-after": "always",
    "function-comma-space-after": "always-single-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "function-calc-no-unspaced-operator": true,
    "block-opening-brace-space-before": "always",
    "string-quotes": "single",
    "declaration-block-semicolon-space-before": "never",
    "number-no-trailing-zeros": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "function-url-quotes": "always",
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "length-zero-no-unit": true,
    "no-missing-eof-newline": true,
    "max-nesting-depth": 3,



    "declaration-block-trailing-semicolon": "always",
    "no-extra-semicolons": true,
    "string-no-newline": true
  }
}
