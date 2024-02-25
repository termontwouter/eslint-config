import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  // rec disable
  // 'no-negated-condition': 'off',
  // 'no-nested-ternary': 'off',

  // RECOMMENDED (all)

  // already in CSS
  'unicorn/error-message': [ 'error' ],
  'unicorn/escape-case': [ 'error' ],
  'unicorn/new-for-builtins': [ 'error' ],
  'unicorn/no-for-loop': [ 'error' ],
  'unicorn/no-instanceof-array': [ 'error' ],
  'unicorn/no-nested-ternary': [ 'error' ],
  'unicorn/no-object-as-default-parameter': [ 'error' ],
  'unicorn/no-process-exit': [ 'error' ],
  'unicorn/no-useless-undefined': [ 'error' ],
  'unicorn/no-zero-fractions': [ 'error' ],
  'unicorn/number-literal-case': [ 'error' ],
  'unicorn/prefer-array-find': [ 'error' ],
  'unicorn/prefer-array-flat-map': [ 'error' ],
  'unicorn/prefer-math-trunc': [ 'error' ],
  'unicorn/prefer-negative-index': [ 'error' ],
  'unicorn/prefer-number-properties': [ 'error' ],
  'unicorn/prefer-optional-catch-binding': [ 'error' ],
  'unicorn/prefer-reflect-apply': [ 'error' ],
  'unicorn/prefer-set-has': [ 'error' ],
  'unicorn/prefer-string-slice': [ 'error' ],
  'unicorn/prefer-string-starts-ends-with': [ 'error' ],
  'unicorn/throw-new-error': [ 'error' ],

  // enabled without issues
  'unicorn/no-invalid-remove-event-listener': 'error',
  'unicorn/no-new-array': 'error',
  'unicorn/no-new-buffer': 'error', // (but is similar to eslint noBufferConstructor ?)
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

  // enabled with minor errors
  // 'unicorn/expiring-todo-comments': [ 'error', {
  //   ignoreDatesOnPullRequests: false,
  //   terms: [ 'todo' ],
  //   allowWarningComments: false,
  // }],
  // 'unicorn/empty-brace-spaces': 'error',
  // 'unicorn/no-array-for-each': 'error',
  // 'unicorn/no-array-reduce': 'error',
  // 'unicorn/no-lonely-if': 'error',
  // 'unicorn/no-negated-condition': 'error',
  // 'unicorn/prefer-includes': 'error',
  // 'unicorn/prefer-native-coercion-functions': 'error',
  // 'unicorn/prefer-regexp-test': 'error',
  // 'unicorn/prefer-spread': 'error',
  // 'unicorn/prefer-string-replace-all': 'error',

  // enabled with major errors
  // 'unicorn/consistent-function-scoping': [ 'error' ], // mostly in tests
  // 'unicorn/no-useless-promise-resolve-reject': 'error', // errors in comunica
  // 'unicorn/prefer-at': 'error',
  // 'unicorn/prefer-node-protocol': 'error',
  // 'unicorn/prefer-type-error': 'error',

  // absent/different in CSS
  'unicorn/better-regex': [ 'error', { sortCharacterClasses: true }], // css/rec: no options
  'unicorn/catch-error-name': [ 'error', { // rec: no options
    name: 'error', // thenativeweb: ex
    // ignore: [ '^ex([AZ0-9].*)?$' ] // thenativeweb
  }],
  'unicorn/explicit-length-check': [ 'error', { 'non-zero': 'greater-than' }], // css/rec: no options
  'unicorn/filename-case': [ 'error', { // also in css | rec: no options (but why iff ts/naming-convention?)
    cases: {
      camelCase: true, // antfu: false
      pascalCase: true, // antfu: false
      kebabCase: false, // antfu: true
      snakeCase: false, // antfu: false
    },
    ignore: [ // not in css
      'nextEnv.d.ts',
    ],
  }],
  'unicorn/no-abusive-eslint-disable': [ 'error' ],
  'unicorn/no-console-spaces': [ 'error' ],
  'unicorn/no-hex-escape': [ 'error' ],
  'unicorn/no-unreadable-array-destructuring': [ 'error' ],
  'unicorn/numeric-separators-style': [ 'error', { // rec: no options
    hexadecimal: { minimumDigits: 0, groupLength: 2 },
    binary: { minimumDigits: 0, groupLength: 4 },
    octal: { minimumDigits: 0, groupLength: 4 },
    number: { minimumDigits: 0, groupLength: 3 },
  }],
  'unicorn/prefer-dom-node-dataset': [ 'error' ],
  'unicorn/prefer-keyboard-event-key': [ 'error' ],
  'unicorn/prefer-string-trim-start-end': [ 'error' ],

  // OFF
  // 'unicorn/consistent-destructuring': 'off', // rec: off
  // 'unicorn/custom-error-definition': 'off', // rec: off
  // 'unicorn/import-style': 'error', // rec: error | try to re-enable
  // 'unicorn/no-anonymous-default-export': 'error', // rec
  // 'unicorn/no-array-callback-reference': [ 'error' ], // rec: error | comunica: off
  // 'unicorn/no-array-method-this-argument': [ 'error' ], // rec: error (try to re-enable)
  // 'unicorn/no-array-push-push': 'error', // rec
  // 'unicorn/no-await-expression-member': 'error', // rec
  // 'unicorn/no-await-in-promise-methods': 'error', // rec
  // 'unicorn/no-document-cookie': [ 'error' ], // rec: error (try to re-enable)
  // 'unicorn/no-empty-file': 'error', // rec
  // 'unicorn/no-keyword-prefix': 'off', // rec: off
  // 'unicorn/no-null': 'error', // rec: error
  // 'unicorn/no-single-promise-in-promise-methods': 'error', // rec
  // 'unicorn/no-static-only-class': [ 'error' ], // rec: error (try to re-enable)
  // 'unicorn/no-this-assignment': 'error', // rec
  // 'unicorn/no-typeof-undefined': 'error', // rec
  // 'unicorn/no-unnecessary-await': 'error', // rec
  // 'unicorn/no-unnecessary-polyfills': 'error', // rec
  // 'unicorn/no-unreadable-iife': 'error', // rec
  // 'unicorn/no-unused-properties': 'off', // rec: off
  // 'unicorn/no-useless-switch-case': 'error', // rec
  // 'unicorn/prefer-add-event-listener': 'error', // rec: error
  // 'unicorn/prefer-array-flat': [ 'error' ], // rec: error (try to re-enable)
  // 'unicorn/prefer-blob-reading-methods': 'error', // rec
  // 'unicorn/prefer-code-point': 'error', // css & rec
  // 'unicorn/prefer-dom-node-append': 'error', // rec: error
  // 'unicorn/prefer-dom-node-remove': 'error', // rec: error
  // 'unicorn/prefer-event-target': 'error', // rec
  // 'unicorn/prefer-export-from': 'error', // rec
  // 'unicorn/prefer-json-parse-buffer': 'off', // rec: off
  // 'unicorn/prefer-logical-operator-over-ternary': 'error', // rec
  // 'unicorn/prefer-modern-dom-apis': 'error', // rec: error
  // 'unicorn/prefer-modern-math-apis': 'error', // rec
  // 'unicorn/prefer-module': 'error', // rec
  // 'unicorn/prefer-prototype-methods': [ 'error' ], // rec: error (try to re-enable)
  // 'unicorn/prefer-query-selector': 'error', // rec: error
  // 'unicorn/prefer-switch': 'error', // rec
  // 'unicorn/prefer-ternary': 'error', // rec (but see issue #1079)
  // 'unicorn/prefer-top-level-await': 'error', // rec: error
  // 'unicorn/prevent-abbreviations': 'error', // rec: error
  // 'unicorn/relative-url-style': 'error', // rec
  // 'unicorn/require-post-message-target-origin': 'off', // rec: off (see issue #1396) | also enforced by TS
  // 'unicorn/string-content': 'off', // rec: off
  // 'unicorn/switch-case-braces': 'error', // rec
  // 'unicorn/template-indent': 'error', // rec
  // 'unicorn/text-encoding-identifier-case': 'error', // rec
};
