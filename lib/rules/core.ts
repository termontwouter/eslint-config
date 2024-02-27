import type { Linter } from 'eslint';

const restrictedProperties = [
  { property: '__defineGetter__', message: 'Use `Object.defineProperty` instead.' },
  { property: '__defineSetter__', message: 'Use `Object.defineProperty` instead.' },
  { property: '__lookupGetter__', message: 'Use `Object.getOwnPropertyDescriptor` instead.' },
  { property: '__lookupSetter__', message: 'Use `Object.getOwnPropertyDescriptor` instead.' },
  { property: '__proto__', message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.' },
] as const;

const restrictedSyntax = [
  'DebuggerStatement',
  'LabeledStatement',
  'WithStatement',
  'TSEnumDeclaration[const=true]',
  // 'TSExportAssignment', // triggers on imports.d.ts
] as const;

export const rules: Linter.RulesRecord = {

  // separate in Possible Problems, Suggestions, and Layout & Formatting ?

  /* RECOMMENDED */

  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': [ 'error', { allowImplicit: true }], // looser
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': [ 'error', 'always' ], // stricter
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-empty': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-import-assign': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-new-native-nonconstructor': 'error', // caught by typescript (TS7009) ?
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': [ 'error', { builtinGlobals: false }], // looser
  'no-regex-spaces': 'error',
  'no-self-assign': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-this-before-super': 'error',
  'no-undef': [ 'error', { typeof: true }], // stricter
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error', // caught by typescript ?
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': [ 'error', { caughtErrors: 'all' }], // stricter
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  'no-with': 'error',
  'require-yield': 'error',
  'use-isnan': [ 'error', { enforceForIndexOf: true }], // stricter
  'valid-typeof': [ 'error', { requireStringLiterals: true }], // stricter

  // trivial errors
  // 'no-fallthrough': 'error', // (componentsjs)

  // minor errors
  // 'no-async-promise-executor': 'error', // (comunica)

  /* OTHER */

  'accessor-pairs': 'error',
  'array-callback-return': [ 'error', { allowImplicit: true }], // looser
  'arrow-body-style': [ 'error', 'as-needed', { requireReturnForObjectLiteral: false }], // looser
  'block-scoped-var': 'error',
  'camelcase': 'error',
  'capitalized-comments': [ 'error', 'always', { ignoreConsecutiveComments: true }], // looser
  'curly': 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-notation': 'error',
  'eqeqeq': 'error',
  'func-style': [ 'error', 'declaration', { allowArrowFunctions: true }], // different
  'grouped-accessor-pairs': [ 'error', 'getBeforeSet' ], // stricter
  'id-length': [ 'error', { exceptions: [ '_', 'i', 'j', 't', 'x', 'y', 'z' ]}], // looser
  'line-comment-position': 'error',
  'multiline-comment-style': [ 'error', 'separate-lines' ], // different
  'new-cap': [ 'error', { capIsNew: false }], // looser
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-console': 'error',
  'no-constructor-return': 'error',
  'no-div-regex': 'error',
  'no-else-return': [ 'error', { 'allowElseIf': false }], // stricter
  'no-empty-function': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': 'error',
  'no-multi-str': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-new': 'error',
  'no-octal-escape': 'error',
  'no-proto': 'error',
  'no-restricted-properties': [ 'error', ...restrictedProperties ],
  'no-restricted-syntax': [ 'error', ...restrictedSyntax ],
  'no-return-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': [ 'error', { defaultAssignment: false }], // stricter
  'no-unreachable-loop': 'error',
  'no-unused-expressions': 'error',
  'no-use-before-define': 'error',
  'no-useless-call': 'error',
  'no-useless-computed-key': [ 'error', { enforceForClassMembers: true }], // stricter
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'error',
  'one-var': [ 'error', 'never' ],
  'operator-assignment': [ 'error', 'always' ],
  'prefer-arrow-callback': 'error',
  'prefer-const': [ 'error', { ignoreReadBeforeAssign: true }], // looser
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': [ 'error', { disallowRedundantWrapping: true }], // stricter
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'radix': 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'sort-vars': [ 'error', { ignoreCase: true }], // looser
  'strict': [ 'error', 'global' ], // different
  'symbol-description': 'error',
  'unicode-bom': [ 'error', 'never' ],
  'vars-on-top': 'error',
  'yoda': [ 'error', 'never', { exceptRange: true }], // looser

  // trivial errors
  // 'consistent-this': 'error', // (css)
  // 'object-shorthand': [ 'error', 'always', { avoidQuotes: true, avoidExplicitReturnArrows: true }], // looser (comunica)
  // 'no-implicit-coercion': 'error', // (componentsjs)
  // 'no-restricted-globals': [ // (componentsjs)
  //   'error',
  //   { message: 'Use `globalThis` instead.', name: 'global' },
  //   { message: 'Use `globalThis` instead.', name: 'self' },
  // ],

  // minor errors
  // 'guard-for-in': 'error', // (comunica, componentsjs)

  // major errors
  // 'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true }], // (comunica, componentsjs)
  // 'no-multi-assign': 'error', // ( comunica)

  // OFF
  // 'class-methods-use-this': 'error', // conflicts with interfaces functions that sometimes don't require `this` ?
  // 'complexity': 'error',
  // 'consistent-return': 'error',
  // 'func-name-matching': 'error',
  // 'func-names': 'error',
  // 'id-denylist': 'error',
  // 'id-match': 'error',
  // 'init-declarations': 'error',
  // 'no-duplicate-imports': 'error', // incompatible with type imports ?
  // 'no-param-reassign': 'error',
  // 'no-ternary': 'error',
  // 'no-undefined': 'error',
  // 'no-underscore-dangle': 'error', // conflicts with external libraries ?
  // 'prefer-destructuring': 'error',
  // 'prefer-named-capture-group': 'error',
  // 'require-atomic-updates': 'error',
  // 'sort-keys': 'error',
  // 'sort-imports': 'off', // => eslint-plugin-import

  /* DEPRECATED */

  'array-bracket-newline': 'off', // stylistic
  'array-bracket-spacing': 'off', // stylistic
  'array-element-newline': 'off', // stylistic
  'arrow-parens': 'off', // stylistic
  'arrow-spacing': 'off', // stylistic
  'block-spacing': 'off', // stylistic
  'brace-style': 'off', // stylistic
  'callback-return': 'off', // => eslint-plugin-n
  'comma-dangle': 'off', // stylistic
  'comma-spacing': 'off', // stylistic
  'comma-style': 'off', // stylistic
  'computed-property-spacing': 'off', // stylistic
  'dot-location': 'off', // stylistic
  'eol-last': 'off', // stylistic
  'func-call-spacing': 'off', // stylistic
  'function-call-argument-newline': 'off', // stylistic
  'function-paren-newline': 'off', // stylistic
  'generator-star-spacing': 'off', // stylistic
  'global-require': 'off', // => eslint-plugin-n
  'handle-callback-err': 'off', // => eslint-plugin-n
  'id-blacklist': 'off', // -> id-denylist
  'implicit-arrow-linebreak': 'off', // stylistic
  'indent': 'off', // stylistic
  'indent-legacy': 'off', // -> indent
  'jsx-quotes': 'off', // stylistic
  'key-spacing': 'off', // stylistic
  'keyword-spacing': 'off', // stylistic
  'linebreak-style': 'off', // stylistic
  'lines-around-comment': 'off', // stylistic
  'lines-around-directive': 'off', // -> padding-line-between-statements
  'lines-between-class-members': 'off', // stylistic
  'max-len': 'off', // stylistic
  'max-statements-per-line': 'off', // stylistic
  'multiline-ternary': 'off', // stylistic
  'new-parens': 'off', // stylistic
  'newline-after-var': 'off', // -> padding-line-between-statements
  'newline-before-return': 'off', // -> padding-line-between-statements
  'newline-per-chained-call': 'off', // stylistic
  'no-buffer-constructor': 'off', // => eslint-plugin-n
  'no-catch-shadow': 'off', // -
  'no-confusing-arrow': 'off', // stylistic
  'no-extra-parens': 'off', // stylistic
  'no-extra-semi': 'off', // stylistic
  'no-floating-decimal': 'off', // stylistic
  'no-mixed-operators': 'off', // stylistic
  'no-mixed-requires': 'off', // => eslint-plugin-n
  'no-mixed-spaces-and-tabs': 'off', // stylistic
  'no-multi-spaces': 'off', // stylistic
  'no-multiple-empty-lines': 'off', // stylistic
  'no-native-reassign': 'off', // -> no-global-assign
  'no-negated-in-lhs': 'off', // -> no-unsafe-negation
  'no-new-object': 'off', // -> no-object-constructor
  'no-new-require': 'off', // => eslint-plugin-n
  'no-new-symbol': 'off', // -> no-new-native-nonconstructor
  'no-path-concat': 'off', // => eslint-plugin-n
  'no-process-env': 'off', // => eslint-plugin-n
  'no-process-exit': 'off', // => eslint-plugin-n
  'no-restricted-modules': 'off', // => eslint-plugin-n
  'no-return-await': 'off', // -
  'no-spaced-func': 'off', // -> func-call-spacing
  'no-sync': 'off', // => eslint-plugin-n
  'no-tabs': 'off', // stylistic
  'no-trailing-spaces': 'off', // stylistic
  'no-whitespace-before-property': 'off', // stylistic
  'nonblock-statement-body-position': 'off', // stylistic
  'object-curly-newline': 'off', // stylistic
  'object-curly-spacing': 'off', // stylistic
  'object-property-newline': 'off', // stylistic
  'one-var-declaration-per-line': 'off', // stylistic
  'operator-linebreak': 'off', // stylistic
  'padded-blocks': 'off', // stylistic
  'padding-line-between-statements': 'off', // stylistic
  'prefer-reflect': 'off', // -
  'quote-props': 'off', // stylistic
  'quotes': 'off', // stylistic
  'rest-spread-spacing': 'off', // stylistic
  'semi': 'off', // stylistic
  'semi-spacing': 'off', // stylistic
  'semi-style': 'off', // stylistic
  'space-before-blocks': 'off', // stylistic
  'space-before-function-paren': 'off', // stylistic
  'space-in-parens': 'off', // stylistic
  'space-infix-ops': 'off', // stylistic
  'space-unary-ops': 'off', // stylistic
  'spaced-comment': 'off', // stylistic
  'switch-colon-spacing': 'off', // stylistic
  'template-curly-spacing': 'off', // stylistic
  'template-tag-spacing': 'off', // stylistic
  'wrap-iife': 'off', // stylistic
  'wrap-regex': 'off', // stylistic
  'yield-star-spacing': 'off', // stylistic

  /* REMOVED */

  'generator-star': 'off', // -> generator-star-spacing
  'global-strict': 'off', // -> strict
  'no-arrow-condition': 'off', // -> no-confusing-arrowno-constant-condition
  'no-comma-dangle': 'off', // -> comma-dangle
  'no-empty-class': 'off', // -> no-empty-character-class
  'no-empty-label': 'off', // -> no-labels
  'no-extra-strict': 'off', // -> strict
  'no-reserved-keys': 'off', // -> quote-props
  'no-space-before-semi': 'off', // -> semi-spacing
  'no-wrap-func': 'off', // -> no-extra-parens
  'space-after-function-name': 'off', // -> space-before-function-paren
  'space-after-keywords': 'off', // -> keyword-spacing
  'space-before-function-parentheses': 'off', // -> space-before-function-paren
  'space-before-keywords': 'off', // -> keyword-spacing
  'space-in-brackets': 'off', // -> object-curly-spacingarray-bracket-spacing
  'space-return-throw-case': 'off', // -> keyword-spacing
  'space-unary-word-ops': 'off', // -> space-unary-ops
  'spaced-line-comment': 'off', // -> spaced-comment
  'valid-jsdoc': 'off', // => eslint-plugin-jsdoc
  'require-jsdoc': 'off', // => eslint-plugin-jsdoc
};
