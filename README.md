# Fivestars TSLint

[TSLint config](https://palantir.github.io/tslint/usage/configuration/) for the [Fivestars TypeScript Style Guide](https://github.com/fivestars/tslint-config-airbnb/GUIDE.md)


## Basis

This document is based off the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).  The exceptions are listed below.


## Exceptions

  1. `align: [false]`
  2. `brace-style: 'stroustrop'`
  3. `eofline: true`
  4. `function-name: null`
  5. `jsx-no-multiline-js: false`
  6. `max-line-length: [true, 120]`
  7. `member-access: false`
  8. `object-shorthand-properties-first': false`
  9. `quotemark: [true, 'single', 'jsx-double']`
  10. `semicolon: [true, 'always', 'ignore-bound-class-methods']`
  11. `ter-indent: [ true, 4, { 'SwitchCase': 1 }]`
  12. `trailing-comma: [true, {'multiline': 'never', 'singleline': 'never'}]`
  13. `variable-name: [true, 'ban-keywords', 'allow-leading-underscore']`


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

## License

Apache 2.0
