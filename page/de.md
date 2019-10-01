# stylelint-config-sass-guidelines

[![NPM version](http://img.shields.io/npm/v/stylelint-config-sass-guidelines.svg)](https://www.npmjs.org/package/stylelint-config-sass-guidelines)
[![Greenkeeper badge](https://badges.greenkeeper.io/bjankord/stylelint-config-sass-guidelines.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/bjankord/stylelint-config-sass-guidelines.svg?branch=master)](https://travis-ci.org/bjankord/stylelint-config-sass-guidelines)
[![Downloads per month](https://img.shields.io/npm/dm/stylelint-config-sass-guidelines.svg)](http://npmcharts.com/compare/stylelint-config-sass-guidelines)

[![Dependency Status](https://david-dm.org/bjankord/stylelint-config-sass-guidelines.svg)](https://david-dm.org/bjankord/stylelint-config-sass-guidelines)
[![devDependency Status](https://david-dm.org/bjankord/stylelint-config-sass-guidelines/dev-status.svg)](https://david-dm.org/bjankord/stylelint-config-sass-guidelines/?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/bjankord/stylelint-config-sass-guidelines/badge.svg)](https://snyk.io//test/github/bjankord/stylelint-config-sass-guidelines)

> Sass-Konfiguration for stylelint

Diese Konfiguration basiert auf [sass-guidelin.es](https://sass-guidelin.es/)

Zurück zur [englischen Version](../README)

# Installation

```console
$ npm install --save stylelint-config-sass-guidelines
```

## Konfiguration

Füge diese Zeile in deine stylelint-Konfiguration hinzu:

```json
{
  "extends": "stylelint-config-sass-guidelines"
}
```

### Erweiterung der Konfiguration

Füge `"rules"` in dein Konfiguration hinzu. Und überschreibe dann Regel innerhalb von `"rules"`.

Zum Beispiel kannst du mit `indentation` Tabs aktivieren und die Regel `number-leading-zero` deaktivieren.

```json
{
  "extends": "stylelint-config-sass-guidelines",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [Regel-Vergleich](https://github.com/bjankord/stylelint-config-sass-guidelines/wiki/Lint-Rule-Comparison)

## [Lint-Report-Vergleich](https://github.com/bjankord/stylelint-config-sass-guidelines/wiki/Lint-Report-Comparison)

## Dokumetation

### Erweiterungen

* [`stylelint-order`](https://github.com/hudochenkov/stylelint-order): Eine Erweiterung die Regel CSS-Eigenschaft sortiert.
* [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss): Eine Sammlung von SCSS-speziefischen Regeln für stylelint.

### Configured lints

Hier findest du eine Liste mit den voreingestellten Regel und was sie bewirken.

#### At-Regeln

* [`at-rule-blacklist`](http://stylelint.io/user-guide/rules/at-rule-blacklist/): Erstellt eine Blacklist für unerwünschte at-Regeln.
  * `"debug"` Verbiete das Benutzen von `@debug`.
* [`at-rule-no-vendor-prefix`](http://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/): Verbiete fremde Präfixe für at-Regeln.

#### Blöcke

* [`block-no-empty`](http://stylelint.io/user-guide/rules/block-no-empty/): Verbiete leere Blöcke.
* [`block-opening-brace-space-before`](http://stylelint.io/user-guide/rules/block-opening-brace-space-before/): Es muss immer ein Leerzeichen vor einer öffnenden Klammer sein.

#### Farben

* [`color-hex-case`](http://stylelint.io/user-guide/rules/color-hex-case/): Hex-Farben müssen klein geschrieben werden.
* [`color-hex-length`](http://stylelint.io/user-guide/rules/color-hex-length/): Wenn möglich, nutzen verkürtze Hex-Werte.
* [`color-named`](http://stylelint.io/user-guide/rules/color-named/): Farben dürfen nicht benannt werden.
* [`color-no-invalid-hex`](http://stylelint.io/user-guide/rules/color-no-invalid-hex/): Hex-Farben müssen valide Werte sein.

#### Deklaration

* [`declaration-bang-space-after`](http://stylelint.io/user-guide/rules/declaration-bang-space-after/): Es darf kein Leerzeichen vor dem Ausrufezeichen sein.
* [`declaration-bang-space-before`](http://stylelint.io/user-guide/rules/declaration-bang-space-before/): Es muss immer ein Leerzeichen vor dem Ausrufezeichen sein.
* [`declaration-colon-space-after`](http://stylelint.io/user-guide/rules/declaration-colon-space-after/): Wenn der Wert der Eigenschaft ein Zeile lang ist muss ein Leerzeichen nach dem Doppelpunkt sein.
* [`declaration-colon-space-before`](http://stylelint.io/user-guide/rules/declaration-colon-space-before/): Es darf kein Leerzeichen vor der Doppelpunkt sein.

#### Deklarationsblöcke

* [`declaration-block-properties-order`](http://stylelint.io/user-guide/rules/declaration-block-properties-order/): Eigenschaft in Blöcken müssen alphabetisch sortiert werden.
* [`declaration-block-semicolon-newline-after`](http://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/): Es muss immer eine neue Zeile nach einem Semikolon anfangen.
* [`declaration-block-semicolon-space-before`](http://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/): Es darf kein Leerzeichen vor dem Semikolon sein.
* [`declaration-block-single-line-max-declarations`](http://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): Es darf nich mehr als eine Eigenschaft in einer Zeile sein.
* [`declaration-block-trailing-semicolon`](http://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/): Es muss immer ein Semikolon nach einer Eigenschaft kommen.

#### Deklarationseigenschaft

* [`declaration-property-value-blacklist`](http://stylelint.io/user-guide/rules/declaration-property-value-blacklist/): Verbiete bestimmte Eigenschaften- und Werte-Paare in einer Deklaration
  * `^border`: Verbiete das Nutzen von `none` für Borders, nutze `0` lieber.

#### Funktionen

* [`function-comma-space-after`](http://stylelint.io/user-guide/rules/function-comma-space-after/): Es muss immer ein Leerzeichen nach dem Komma in einzeiligen Fuktionen sein.
* [`function-parentheses-space-inside`](http://stylelint.io/user-guide/rules/function-parentheses-space-inside/): Es darf kein Leerzeichen in den Klammern einer Funktion sein.
* [`function-url-quotes`](http://stylelint.io/user-guide/rules/function-url-quotes/): URLs müssen immer von Anführungzeichen umgeben sein.

#### General

* [`indentation`](http://stylelint.io/user-guide/rules/indentation/): Die Einrückung muss immer `2` Leerzeichen groß sein.
* [`length-zero-no-unit`](http://stylelint.io/user-guide/rules/length-zero-no-unit/): Verbiete Einheiten bei Werten mit dem Wert `0`.
* [`max-nesting-depth`](http://stylelint.io/user-guide/rules/max-nesting-depth/): Limitiert die Verschachtelungstiefe auf `1`. Wird ignoriert bei `@media`, `@supports`, und `@include`.
* [`no-missing-eof-newline`](http://stylelint.io/user-guide/rules/no-missing-eof-newline/): Es muss sich am Ende der Datei eine neue leere Zeile befinden.

#### Medienfeature

* [`media-feature-name-no-vendor-prefix`](http://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/): Verbiete fremde Präfixe für Medienfeaturenamen.

#### Zahlen

* [`number-leading-zero`](http://stylelint.io/user-guide/rules/number-leading-zero/): Verbiete Werte wie `.5`und nutze lieber `0.5`.
* [`number-no-trailing-zeros`](http://stylelint.io/user-guide/rules/number-no-trailing-zeros/): Verbiete unnötige Nullen am Ende von Werten.

#### Eigenschaften

* [`property-no-vendor-prefix`](http://stylelint.io/user-guide/rules/property-no-vendor-prefix/): Verbiete fremde Präfixe für Eigenschaften.
* [`shorthand-property-no-redundant-values`](http://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/): Verbiete überflüssige Werte in verkürtzen Eigenschaften.

#### Regeln

* [`rule-nested-empty-line-before`](http://stylelint.io/user-guide/rules/rule-nested-empty-line-before/): Es muss immer eine leere Zeile vor jeder mehrzeiligen Regel geben. _Außer_ bei verschachtelte Selektoren die die erste von dem Eltern-Selektor ist. _Igniert_ Regeln die nach einem Kommentar kommen.
* [`rule-non-nested-empty-line-before`](http://stylelint.io/user-guide/rules/rule-non-nested-empty-line-before/): Vor jeder mehrzeiligen Regel muss es eine leere Zeile geben. _Ignoriert_ wenn die Regel nach einem Kommenter kommt.

#### SCSS
* [`at-extend-no-missing-placeholder`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md): Verbiete at-extends (`@extend`) mit fehlendem Platzhalter.
* [`at-function-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md): SCSS Funktionen müssen klein geschrieben werden und diesem Regex entsprechen `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`at-import-no-partial-leading-underscore`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md): Verbiete führende Unterstriche in partiellen Namen bei `@import`.
* [`at-import-partial-extension-blacklist`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md): Erstellt eine Blacklist von verbotenen Dateiendungen für partiellen name beim importieren.
  * `.scss`: Verbiete das Nutzen von `.scss` Dateiendungen beim importieren.
* [`at-mixin-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md): SCSS Mixins müssen klein geschrieben werden und diesem Regex entsprechen `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`dollar-variable-colon-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md): Benötigt ein Leerzeichen nach dem Doppelpunkt bei der $-variable Deklaration.
* [`dollar-variable-colon-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md): Verbiete Leerzeichen vor dem Doppelpunkt bei der $-variable Deklaration.
* [`dollar-variable-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md): SCSS Variablen müssen klein geschrieben werden und diesem Regex entsprechen `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`percent-placeholder-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md): SCSS `%`-Platzhalter klein geschrieben werden und diesem Regex entsprechen `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
* [`selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md): Verbiete unnötiges verschachteln von Selektoren (`&`).

#### Selektoren

* [`selector-class-pattern`](http://stylelint.io/user-guide/rules/selector-class-pattern/): Selektoren müssen klein geschrieben werden und dem Regex entsprechen `^(?:u|is|has)-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:-[a-z][a-zA-Z0-9]*)?(?:--[a-z][a-zA-Z0-9]*)?$`.
* [`selector-list-comma-newline-after`](http://stylelint.io/user-guide/rules/selector-list-comma-newline-after/): Es muss nach jedem Selektir immer eine neue Zeile angefangen werden bei einer Selektoreliste.
* [`selector-max-compound-selectors`](http://stylelint.io/user-guide/rules/selector-max-compound-selectors/): Limitiert die Anzal der zusammengesetzten Selektoren auf `3`.
* [`selector-no-id`](http://stylelint.io/user-guide/rules/selector-no-id/): Verbiete ID-Selektoren.
* [`selector-no-qualifying-type`](http://stylelint.io/user-guide/rules/selector-no-qualifying-type/): Verbiete qualifizierende Selektoren nach Typ.
* [`selector-no-vendor-prefix`](http://stylelint.io/user-guide/rules/selector-no-vendor-prefix/): Verbiete fremde Präfixe for Selektoren.
* [`selector-pseudo-element-colon-notation`](http://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): Anwendbare Pseudo-Elemente müssen die zwei Doppelpunkt-Schreibweise verwenden.
* [`selector-pseudo-element-no-unknown`](http://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/): Verbiete unbekannte Pseudo-Element-Selektoren.

#### String

* [`string-quotes`](http://stylelint.io/user-guide/rules/string-quotes/): Strings müssen immer von einfachen Anführungszeichen umgeben sein.

#### Stylelint Deaktiviere Kommentare

* [`stylelint-disable-reason`](http://stylelint.io/user-guide/rules/stylelint-disable-reason/): Benötigt ein Begründungskommentart vor einem stylelint-disable Kommentar.

#### Werte

* [`value-no-vendor-prefix`](http://stylelint.io/user-guide/rules/value-no-vendor-prefix/): Verbiete fremde Präfixe für Werte.
