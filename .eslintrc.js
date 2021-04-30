module.exports = {
    root: true,

    extends: [
        'airbnb-typescript',
        'airbnb/hooks',

        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],

    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
    },

    rules: {
        'no-plusplus': 'off',
        'no-continue': 'off',
        'no-useless-return': 'off',
        'no-param-reassign': 'off',
        'no-nested-ternary': 'warn',
        'no-return-assign': ['error', 'except-parens'],
        'no-underscore-dangle': ['error', {
            'allow': [
                '_id',
            ],
            'allowAfterSuper': true,
            'allowAfterThis': true,
        }],
        'no-multiple-empty-lines': ['error', {
            'max': 1,
            'maxBOF': 0,
            'maxEOF': 1,
        }],
        'linebreak-style': 'off',
        'prefer-destructuring': 'off',
        'prefer-arrow-callback': ['error', {
            'allowNamedFunctions': true,
            'allowUnboundThis': true,
        }],
        'max-len': ['error', 128, 4, {
            'ignoreUrls': true,
            'ignoreComments': true,
            'ignoreRegExpLiterals': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
        }],
        'arrow-parens': ['warn', 'as-needed', {
            'requireForBlockBody': true,
        }],
        'object-curly-newline': ['error', {
            'multiline': true,
            'consistent': true,
        }],
        'class-methods-use-this': 'warn',
        'global-require': 'off',

        'import/prefer-default-export': 'warn',

        'jsx-a11y/aria-role': ['error', {
            'ignoreNonDOM': true
        }],

        'react/require-default-props': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-tag-spacing': ['error', {
            'closingSlash': 'never',
            'beforeSelfClosing': 'never',
            'afterOpening': 'never',
            'beforeClosing': 'never',
        }],

        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/indent': ['error', 4, {
            'SwitchCase': 1,
            'ignoreComments': true,
        }],
        '@typescript-eslint/lines-between-class-members': ['error', 'always', {
            'exceptAfterSingleLine': true,
        }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
