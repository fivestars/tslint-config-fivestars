module.exports = {
    extends: [
        'tslint-config-airbnb'
    ],
    rules: {
        'align': false,
        'eofline': true,
        'function-name': null,
        'jsx-no-multiline-js': false,
        'max-line-length': [true, {'ignore-pattern': '.*[`\'"].*[`\'"].*', 'limit': 120}],
        'member-access': false,
        'object-shorthand-properties-first': false,
        "ordered-imports": [true],
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
