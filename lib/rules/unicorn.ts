import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  /* DISABLE ESLINT */

  'no-negated-condition': 'off',
  'no-nested-ternary': 'off',

  /* LOOSEN ESLINT */
  'no-warning-comments': 'warn', // unicorn/expiring-todo-comments

  // RECOMMENDED (all)

  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/no-nested-ternary': 'error',
  'unicorn/no-object-as-default-parameter': 'error',
  'unicorn/no-process-exit': 'error',
  'unicorn/no-zero-fractions': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/prefer-array-find': 'error',
  'unicorn/prefer-array-flat-map': 'error',
  'unicorn/prefer-math-trunc': 'error',
  'unicorn/prefer-negative-index': 'error',
  'unicorn/prefer-number-properties': 'error',
  'unicorn/prefer-optional-catch-binding': 'error',
  'unicorn/prefer-reflect-apply': 'error',
  'unicorn/prefer-set-has': 'error',
  'unicorn/prefer-string-slice': 'error',
  'unicorn/prefer-string-starts-ends-with': 'error',
  'unicorn/throw-new-error': 'error',
  'unicorn/no-invalid-remove-event-listener': 'error',
  'unicorn/no-new-array': 'error',
  'unicorn/no-new-buffer': 'error', // but is similar to eslint noBufferConstructor
  'unicorn/no-thenable': 'error',
  'unicorn/no-useless-fallback-in-spread': 'error',
  'unicorn/no-useless-length-check': 'error',
  'unicorn/no-useless-spread': 'error',
  'unicorn/prefer-array-index-of': 'error',
  'unicorn/prefer-array-some': 'error',
  'unicorn/prefer-date-now': 'error',
  'unicorn/prefer-default-parameters': 'error',
  'unicorn/prefer-dom-node-text-content': 'error',
  'unicorn/prefer-object-from-entries': 'error',
  'unicorn/prefer-set-size': 'error',
  'unicorn/require-array-join-separator': 'error',
  'unicorn/require-number-to-fixed-digits-argument': 'error',
  'unicorn/no-abusive-eslint-disable': 'error',
  'unicorn/no-console-spaces': 'error',
  'unicorn/no-hex-escape': 'error',
  'unicorn/no-unreadable-array-destructuring': 'error',
  'unicorn/prefer-dom-node-dataset': 'error',
  'unicorn/prefer-keyboard-event-key': 'error',
  'unicorn/prefer-string-trim-start-end': 'error',
  'unicorn/catch-error-name': [ 'error', { ignore: [ 'err', 'cause' ]}], // looser
  'unicorn/better-regex': 'error',
  'unicorn/explicit-length-check': 'error',
  'unicorn/filename-case': [ 'error', { cases: { camelCase: true, pascalCase: true }}], // different
  'unicorn/no-static-only-class': 'error',
  'unicorn/prefer-code-point': 'error',
  'unicorn/prefer-prototype-methods': 'error',

  'unicorn/prefer-array-flat': 'error',
  'unicorn/no-document-cookie': 'error',
  'unicorn/no-useless-undefined': 'error', // loosened in tests (css)
  'unicorn/consistent-function-scoping': [ 'error', { checkArrowFunctions: false }], // looser + disabled in tests (comunica, componentsjs)
  'unicorn/expiring-todo-comments': [ 'error', {
    ignoreDatesOnPullRequests: false, // stricter
    terms: [ 'todo' ],
    allowWarningComments: true, // stricter in css: false
  }],
  'unicorn/numeric-separators-style': [ 'error', {
    onlyIfContainsSeparator: true, // looser (css)
    number: { minimumDigits: 0 }, // stricter (comunica)
  }],

  // trivial errors
  // 'unicorn/empty-brace-spaces': 'error', // (comunica, componentsjs)
  // 'unicorn/no-lonely-if': 'error', // (componentsjs)
  // 'unicorn/prefer-includes': 'error', // (componentsjs)
  // 'unicorn/prefer-regexp-test': 'error', // (componentsjs)
  // 'unicorn/prefer-spread': 'error', // (componentsjs)
  // 'unicorn/prefer-node-protocol': 'error', // (comunica, componentsjs)
  // 'unicorn/import-style': 'error', // (comunica, componentsjs)
  // 'unicorn/no-useless-promise-resolve-reject': 'error', // (comunica)
  // 'unicorn/prefer-at': 'error', // (comunica, componentsjs)
  // 'unicorn/prefer-type-error': 'error', // (comunica, componentsjs)

  // minor errors
  // 'unicorn/prefer-native-coercion-functions': 'error', // (comunica, componentsjs)
  // 'unicorn/prefer-string-replace-all': 'error', // (comunica, componentsjs)
  // 'unicorn/no-array-callback-reference': 'error', // (css, comunica)

  // major errors
  // 'unicorn/no-array-for-each': 'error', // (comunica, componentsjs)
  // 'unicorn/no-array-reduce': 'error', // (comunica, componentsjs)
  // 'unicorn/no-negated-condition': 'error', // (comunica, componentsjs)
  // 'unicorn/no-array-method-this-argument': 'error', // (css)

  // OFF
  // 'unicorn/no-anonymous-default-export': 'error',
  // 'unicorn/no-array-push-push': 'error',
  // 'unicorn/no-await-expression-member': 'error',
  // 'unicorn/no-await-in-promise-methods': 'error',
  // 'unicorn/no-empty-file': 'error',
  // 'unicorn/no-null': 'error',
  // 'unicorn/no-single-promise-in-promise-methods': 'error',
  // 'unicorn/no-this-assignment': 'error',
  // 'unicorn/no-typeof-undefined': 'error',
  // 'unicorn/no-unnecessary-await': 'error',
  // 'unicorn/no-unnecessary-polyfills': 'error',
  // 'unicorn/no-unreadable-iife': 'error',
  // 'unicorn/no-useless-switch-case': 'error',
  // 'unicorn/prefer-add-event-listener': 'error',
  // 'unicorn/prefer-blob-reading-methods': 'error',
  // 'unicorn/prefer-dom-node-append': 'error',
  // 'unicorn/prefer-dom-node-remove': 'error',
  // 'unicorn/prefer-event-target': 'error',
  // 'unicorn/prefer-export-from': 'error',
  // 'unicorn/prefer-logical-operator-over-ternary': 'error',
  // 'unicorn/prefer-modern-dom-apis': 'error',
  // 'unicorn/prefer-modern-math-apis': 'error',
  // 'unicorn/prefer-module': 'error',
  // 'unicorn/prefer-query-selector': 'error',
  // 'unicorn/prefer-switch': 'error',
  // 'unicorn/prefer-ternary': 'error', // see issue #1079
  // 'unicorn/prefer-top-level-await': 'error',
  // 'unicorn/prevent-abbreviations': 'error',
  // 'unicorn/relative-url-style': 'error',
  // 'unicorn/switch-case-braces': 'error',
  // 'unicorn/template-indent': 'error',
  // 'unicorn/text-encoding-identifier-case': 'error',

  /* OTHER */

  // 'unicorn/consistent-destructuring': 'error',
  // 'unicorn/custom-error-definition': 'error',
  // 'unicorn/no-keyword-prefix': 'error',
  // 'unicorn/no-unused-properties': 'error',
  // 'unicorn/prefer-json-parse-buffer': 'error',
  // 'unicorn/require-post-message-target-origin': 'error', // (see issue #1396) | also enforced by TS
  // 'unicorn/string-content': 'error',
};
