module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname, // this is the reason this is a .js file
        project: ['./tsconfig.eslint.json'],
    },
    extends: [
        './dist/index.js'
    ],
    rules: {
        // ESLint rules are kebab-case
        '@typescript-eslint/naming-convention': 'off',
    }
};
