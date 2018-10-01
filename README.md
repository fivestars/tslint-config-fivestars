# Fivestars TSLint

[TSLint config](https://palantir.github.io/tslint/usage/configuration/) for the [Fivestars TypeScript Style Guide](https://github.com/fivestars/tslint-config-airbnb/GUIDE.md)


## Basis

This document is based off the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).  The exceptions are listed below.


## Exceptions

  1. `align: [false]`
  1. `eofline: true`
  1. `function-name: null`
  1. `jsx-no-multiline-js: false`
  1. `max-line-length: [true, 120]`
  1. `member-access: false`
  1. `object-shorthand-properties-first': false`
  1. `quotemark: [true, 'single', 'jsx-double']`
  1. `semicolon: [true, 'always', 'ignore-bound-class-methods']`
  1. `ter-indent: [ true, 4, { 'SwitchCase': 1 }]`
  1. `trailing-comma: [true, {'multiline': 'never', 'singleline': 'never'}]`
  1. `variable-name: [true, 'ban-keywords', 'allow-leading-underscore']`


## Installation

```sh
npm install tslint-config-fivestars --save-dev
```

## Usage

In `tslint.json`:

```json
{
  "extends": "tslint-config-fivestars"
}
```

## Versioning

```
+----- Major version is synchronize with tslint's major version.
| +--- Minor version has BREAKING CHANGE and feat.
| | +- Patch version has patch.
| | |
x.x.x
```

## License

Apache 2.0
