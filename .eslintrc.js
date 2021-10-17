module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
    },
    overrides: [
        {
            files: "**/cypress/**/*.ts",
            rules: {
                "global-require": "off",
                "@typescript-eslint/no-var-requires": "off"
            }
        }
    ]
};
