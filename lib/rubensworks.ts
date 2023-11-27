import type { Linter } from 'eslint';

export const config: Linter.Config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {},
  plugins: [
    'eslint-plugin-tsdoc',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-unused-imports',
  ],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    },
    'import/resolver': {
      typescript: {
        // Always try to resolve types under `<root>@types` directory
        // even it doesn't contain any source code, like `@types/rdf-js`
        alwaysTryTypes: true,
      },
    },
  },
  globals: {
    window: 'off',
    global: 'off',
    globalThis: false,
    fetch: false,
    Headers: false,
    Request: false,
    XMLHttpRequest: false,
  },
  rules: {

    /* Default */

    // Conflicts with functions from interfaces that sometimes don't require `this`
    'class-methods-use-this': 'off',

    'comma-dangle': [ 'error', 'always-multiline' ],
    'dot-location': [ 'error', 'property' ],
    'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true }],

    // Conflicts with external libraries
    'no-underscore-dangle': 'off',

    'padding-line-between-statements': 'off',
    'no-param-reassign': 'off',
    'func-style': 'off',
    'new-cap': 'off',
    'lines-around-comment': [ 'error', {
      beforeBlockComment: false,
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false,
    }],
    'no-multi-assign': 'off',
    'no-plusplus': 'off',
    'guard-for-in': 'off',

    // Disabled in favor of eslint-plugin-import
    'sort-imports': 'off',

    'prefer-named-capture-group': 'off',
    'max-len': [ 'error', {
      code: 120,
      ignoreTemplateLiterals: true,
    }],
    'unicorn/consistent-function-scoping': 'off',
    'no-warning-comments': 'off',
    'no-mixed-operators': 'off',
    'prefer-destructuring': 'off',

    // TSC already takes care of these checks
    'default-case': 'off',

    'no-loop-func': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'extended/consistent-err-names': 'off',
    'unicorn/prefer-replace-all': 'off',
    'unicorn/catch-error-name': [ 'error', { name: 'error' }],
    'unicorn/no-reduce': 'off',

    // Incompatible with type imports
    'no-duplicate-imports': 'off',

    /* Import */
    'import/order': [ 'error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
    'import/no-unused-modules': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-nodejs-modules': 'error',

    // TODO: Try to re-enable the following rules in the future
    'global-require': 'off',
    'tsdoc/syntax': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/import-style': 'off',

  },
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [ 'error' ],

        // Breaks with default void in Asynchandler 2nd generic
        '@typescript-eslint/no-invalid-void-type': 'off',

        '@typescript-eslint/array-type': [ 'error', { default: 'array' }],
        '@typescript-eslint/generic-type-naming': 'off',
        '@typescript-eslint/no-empty-interface': 'off',

        // Problems with optional parameters
        '@typescript-eslint/no-unnecessary-condition': 'off',

        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [ 'error', 'never' ],
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/consistent-type-assertions': [ 'error', { assertionStyle: 'angle-bracket' }],
        '@typescript-eslint/member-naming': 'off',
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: [ 'PascalCase' ],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
        ],
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/explicit-function-return-type': [ 'error', {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-type-imports': [ 'error', { prefer: 'type-imports' }],

        // TODO: Try to re-enable the following rules in the future
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      // Specific rules for bin files
      files: [ '**/bin/*.ts' ],
      rules: {
        'unicorn/filename-case': [ 'error', {
          case: 'kebabCase',
        }],
        'no-process-env': 'off',
        'unicorn/no-process-exit': 'off',
      },
    },
    {
      /* Specific rules for test files */

      files: [ '**/test/**/*.ts' ],
      env: {
        jest: true,
      },
      globals: {
        spyOn: false,
        fail: false,
      },
      rules: {
        'mocha/no-synchronous-tests': 'off',
        'mocha/valid-test-description': 'off',
        'mocha/no-sibling-hooks': 'off',

        'max-statements-per-line': 'off',
        'id-length': 'off',
        'arrow-body-style': 'off',
        'line-comment-position': 'off',
        'no-inline-comments': 'off',
        'unicorn/filename-case': 'off',
        'no-new': 'off',
        'unicorn/no-nested-ternary': 'off',
        'no-return-assign': 'off',
        'no-useless-call': 'off',
        'no-sync': 'off',

        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
