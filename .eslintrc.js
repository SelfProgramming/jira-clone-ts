module.exports = {
    root: true,
    extends: [
        require.resolve('./eslint-base.js')
    ],

    rules: {
        "react/react-in-jsx-scope": "off",
    },
    overrides: [
        {
            files: '**/cypress/**/*.ts',
            rules: {
                'global-require': 'off',
                '@typescript-eslint/no-namespace': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            }
        }
    ]
};
