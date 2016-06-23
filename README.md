# stylelint-config-sass-guidelines

> Sass Guidelines shareable config for stylelint.

Configuration rules to ensure your CSS code is compliant with [Sass Guidelines's code style](https://sass-guidelin.es/).

## Installation

```console
$ npm install --save stylelint-config-sass-guidelines
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

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-sass-guidelines",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
