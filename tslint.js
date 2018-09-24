module.exports = {
    extends: [
        'tslint-config-airbnb',
        'tslint-react'
    ],
    rules: {
        'function-name': null,
        'max-line-length': [true, 120],
        'member-access': false,
        'object-shorthand-properties-first': false,
        'quotemark': [true, 'single', 'jsx-double'],
        'semicolon': [true, 'always', 'ignore-bound-class-methods'],
        'ter-indent': [
            true,
            4, {
                'SwitchCase': 1
            }
        ],
        'trailing-comma': [true, {'multiline': 'never', 'singleline': 'never'}],
        'variable-name': [true, 'ban-keywords', 'allow-leading-underscore']
    }
};
