import type { Linter } from 'eslint';

const js: Linter.RulesRecord = {

  /* Default */

  // Conflicts with functions from interfaces that sometimes don't require `this`
  'class-methods-use-this': 'off',

  '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
  '@stylistic/dot-location': [ 'error', 'property' ],
  '@stylistic/lines-between-class-members': [ 'error', 'always', {
    exceptAfterSingleLine: true,
  }],

  // Conflicts with external libraries
  'no-underscore-dangle': 'off',

  '@stylistic/padding-line-between-statements': 'off',
  'no-param-reassign': 'off',
  'func-style': 'off',
  'new-cap': 'off',
  '@stylistic/lines-around-comment': [ 'error', {
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
  '@stylistic/max-len': [ 'error', {
    code: 120,
    ignoreTemplateLiterals: true,
  }],
  'unicorn/consistent-function-scoping': 'off',
  'no-warning-comments': 'off',
  '@stylistic/no-mixed-operators': 'off',
  'prefer-destructuring': 'off',

  // TSC already takes care of these checks
  'default-case': 'off',

  'no-loop-func': 'off',
  'unicorn/no-array-callback-reference': 'off',
  'extended/consistent-err-names': 'off',
  'unicorn/prefer-string-replace-all': 'off',
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

  // TODO: Try to re-enable the following rules in the future

  'global-require': 'off',
  'tsdoc/syntax': 'off',
  'unicorn/expiring-todo-comments': 'off',
  'unicorn/import-style': 'off',

  'unicorn/prefer-includes': 'off', // somehow raises additional errors now
  'unicorn/prefer-spread': 'off', // somehow raises additional errors now
  'import/no-nodejs-modules': 'off', // enabled in @rubensworks/eslint-config@v2.0.0

  // TODO: should the following be enabled? They are ignored in some code files

  'no-case-declarations': 'off',
  'no-console': 'off',
  'no-sync': 'off',

  // TODO: evaluate the following added rules of thenativeweb

  'no-nonoctal-decimal-escape': 'off',
  'no-restricted-properties': 'off',
  'no-return-assign': 'off',
  'no-unsafe-optional-chaining': 'off',

  'eslint-comments/disable-enable-pair': 'off',
  'eslint-comments/no-aggregating-enable': 'off',
  'eslint-comments/no-duplicate-disable': 'off',
  'eslint-comments/no-unlimited-disable': 'off',
  'eslint-comments/require-description': 'off',

  'import/default': 'off',
  'import/export': 'off',
  'import/exports-last': 'off',
  'import/extensions': 'off',
  'import/first': 'off',
  'import/group-exports': 'off',
  'import/named': 'off',
  'import/namespace': 'off',
  'import/newline-after-import': 'off',
  'import/no-absolute-path': 'off',
  'import/no-amd': 'off',
  'import/no-anonymous-default-export': 'off',
  'import/no-commonjs': 'off',
  'import/no-default-export': 'off',
  'import/no-deprecated': 'off',
  'import/no-duplicates': 'off',
  'import/no-dynamic-require': 'off',
  'import/no-import-module-exports': 'off',
  'import/no-mutable-exports': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-named-as-default': 'off',
  'import/no-named-default': 'off',
  'import/no-relative-packages': 'off',
  'import/no-self-import': 'off',
  'import/no-unassigned-import': 'off',
  'import/no-unresolved': 'off',
  'import/no-useless-path-segments': 'off',
  'import/no-webpack-loader-syntax': 'off',
  'import/unambiguous': 'off',

  'unicorn/consistent-destructuring': 'off',
  'unicorn/no-array-method-this-argument': 'off',
  'unicorn/no-document-cookie': 'off',
  'unicorn/no-invalid-remove-event-listener': 'off',
  'unicorn/no-lonely-if': 'off',
  'unicorn/no-new-array': 'off',
  'unicorn/no-static-only-class': 'off',
  'unicorn/no-useless-fallback-in-spread': 'off',
  'unicorn/no-useless-length-check': 'off',
  'unicorn/no-useless-spread': 'off',
  'unicorn/prefer-array-flat': 'off',
  'unicorn/prefer-array-index-of': 'off',
  'unicorn/prefer-array-some': 'off',
  'unicorn/prefer-at': 'off',
  'unicorn/prefer-date-now': 'off',
  'unicorn/prefer-default-parameters': 'off',
  'unicorn/prefer-object-from-entries': 'off',
  'unicorn/prefer-object-has-own': 'off',
  'unicorn/prefer-prototype-methods': 'off',
  'unicorn/prefer-regexp-test': 'off',
  'unicorn/require-array-join-separator': 'off',
  'unicorn/require-number-to-fixed-digits-argument': 'off',
  'unicorn/require-post-message-target-origin': 'off',
};

const ts: Linter.RulesRecord = {
  '@stylistic/lines-between-class-members': [ 'error', 'always', {
    exceptAfterSingleLine: true,
    exceptAfterOverload: true,
  }],

  // Breaks with default void in Asynchandler 2nd generic
  '@typescript-eslint/no-invalid-void-type': 'off',

  '@typescript-eslint/array-type': [ 'error', { default: 'array' }],
  '@typescript-eslint/generic-type-naming': 'off',
  '@typescript-eslint/no-empty-interface': 'off',

  // Problems with optional parameters
  '@typescript-eslint/no-unnecessary-condition': 'off',

  '@stylistic/space-before-function-paren': [ 'error', 'never' ],
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/consistent-type-assertions': [ 'error', { assertionStyle: 'angle-bracket' }],
  '@typescript-eslint/member-naming': 'off',
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

  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'interface',
      format: [ 'PascalCase' ],
      custom: {
        regex: '^[A-Z]', // Was '^I[A-Z]' but overridden in projects
        match: true,
      },
    },
  ],

  // TODO: Try to re-enable the following rules in the future

  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/no-unused-vars': 'off',

  '@typescript-eslint/no-unnecessary-type-assertion': 'off', // somehow raises additional errors now

  // TODO: evaluate the following added rules of thenativeweb

  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-shadow': 'off',
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  '@stylistic/object-curly-spacing': 'off',
};

const bin: Linter.RulesRecord = {
  'unicorn/filename-case': [ 'error', {
    case: 'kebabCase',
  }],
  'no-process-env': 'off',
  'unicorn/no-process-exit': 'off', // disabled in @rubensworks v2
};

const test: Linter.RulesRecord = {
  'mocha/no-synchronous-tests': 'off',
  'mocha/valid-test-description': 'off',
  'mocha/no-sibling-hooks': 'off',

  'import/no-extraneous-dependencies': 'off',

  'unicorn/filename-case': 'off',
  'unicorn/no-nested-ternary': 'off',

  '@stylistic/max-statements-per-line': 'off',
  'id-length': 'off',
  'arrow-body-style': 'off',
  'line-comment-position': 'off',
  'no-inline-comments': 'off',
  'no-new': 'off',
  'no-return-assign': 'off',
  'no-useless-call': 'off',
  'no-sync': 'off',

  '@stylistic/brace-style': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/ban-ts-ignore': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/unbound-method': 'off',
  '@stylistic/no-extra-parens': 'off',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/require-array-sort-compare': 'off',
};

export {
  js,
  ts,
  bin,
  test,
};
