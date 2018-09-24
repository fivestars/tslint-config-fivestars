module.exports = {
    extends: [
        'tslint-config-airbnb',
        'tslint-react',

    ],
    rules: {
        'function-name': null,
        'member-access': false,
        'object-shorthand-properties-first': false,
        'quotemark': [true, 'single', 'jsx-double'],
        'variable-name': [true, 'ban-keywords', 'allow-leading-underscore']
    }
};
