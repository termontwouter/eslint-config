import type { Linter } from 'eslint';
import { js as shared } from './shared.js';

export const rules: Linter.RulesRecord = {
  ...shared,

  /* RECOMMENDED */

  // "constructor-super": "error", // in shared
  // "getter-return": "error", // in shared
  // "no-const-assign": "error", // in shared
  // "no-dupe-args": "error", // in shared
  // "no-dupe-class-members": "error", // in shared
  // "no-dupe-keys": "error", // in shared
  // "no-func-assign": "error", // in shared
  // "no-import-assign": "error", // in shared
  // "no-loss-of-precision": "error", // in shared
  // "no-obj-calls": "error", // in shared
  // "no-redeclare": "error", // in shared
  // "no-setter-return": "error", // in shared
  // "no-this-before-super": "error", // in shared
  // "no-undef": "error", // in shared
  // "no-unreachable": "error", // in shared
  // "no-unsafe-negation": "error", // in shared
  // "no-unused-vars": "error", // in shared

  // already in CSS
  'for-direction': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': [ 'error', 'always' ], // rec: no option
  // "no-constant-binary-expression": "off", // rec: error
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-else-if': [ 'error' ],
  'no-duplicate-case': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': [ 'error' ],
  // 'no-nonoctal-decimal-escape': 'off', // rec: error
  'no-unexpected-multiline': [ 'error' ],
  'no-unsafe-finally': [ 'error' ],
  // 'no-unsafe-optional-chaining': 'off', // rec: error
  'no-useless-backreference': [ 'error' ],
  'no-useless-catch': [ 'error' ],
  'no-useless-escape': [ 'error' ],
  'no-with': 'error',
  'require-yield': 'error',
  'valid-typeof': [ 'error', { requireStringLiterals: true }], // rec: no options

  // enabled without issue
  'no-case-declarations': 'error',
  'no-global-assign': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-misleading-character-class': 'error',
  'no-octal': 'error',
  'no-prototype-builtins': 'error',
  'no-regex-spaces': 'error',
  'no-self-assign': [ 'error', { props: true }], // rec: no options
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',

  // enabled with minor errors
  // 'no-async-promise-executor': 'error', // errors in comunica
  // 'no-fallthrough': 'error',

  // absent/different in CSS
  'no-constant-condition': [ 'error', { 'checkLoops': true }], // rec: no options
  'no-empty': [ 'error', { // rec: no options
    allowEmptyCatch: false, // antfu: true
  }],
  'no-empty-static-block': 'error',
  // "no-new-native-nonconstructor": "off", // rec: error (handled by ts(7009)? -> shared ?)
  'no-unused-labels': [ 'error' ],
  'no-unused-private-class-members': 'error',
  'use-isnan': [ 'error', { // rec: no options
    // enforceForIndexOf: true,  // antfu
    enforceForSwitchCase: true,
  }],

  /* OTHER */

  // already in CSS
  'arrow-body-style': [ 'error', 'as-needed', { requireReturnForObjectLiteral: false }],
  'block-scoped-var': [ 'error' ],
  'curly': [ 'error', 'all' ], // (antfu: ['error', 'multi-or-nest', 'consistent'])
  'default-case-last': [ 'error' ],
  'eqeqeq': [ 'error', 'always' ], // (antfu: 'smart')
  'grouped-accessor-pairs': [ 'error', 'getBeforeSet' ],
  'line-comment-position': [ 'error', { position: 'above' }],
  'no-alert': 'error',
  'no-caller': 'error',
  'no-else-return': [ 'error', { 'allowElseIf': false }],
  'no-extra-bind': [ 'error' ],
  'no-constructor-return': [ 'error' ],
  'no-template-curly-in-string': [ 'error' ],
  'no-undef-init': [ 'error' ],
  'no-unmodified-loop-condition': [ 'error' ],
  'no-unneeded-ternary': [ 'error', { defaultAssignment: false }],
  'no-unreachable-loop': [ 'error' ],
  'no-useless-call': [ 'error' ],
  'no-useless-concat': [ 'error' ],
  'operator-assignment': [ 'error', 'always' ],
  'prefer-arrow-callback': [ 'error', {
    allowNamedFunctions: false,
    allowUnboundThis: true,
  }],
  'prefer-exponentiation-operator': [ 'error' ],
  'prefer-object-spread': [ 'error' ],
  'prefer-rest-params': [ 'error' ], // also eslint-disable
  'prefer-spread': [ 'error' ], // also eslint-disable
  'prefer-template': [ 'error' ],
  'no-useless-return': [ 'error' ],
  'no-var': [ 'error' ], // also eslint-disable
  'require-unicode-regexp': [ 'error' ],
  'symbol-description': [ 'error' ],
  'unicode-bom': [ 'error', 'never' ],
  'vars-on-top': [ 'error' ],

  // enabled without issue
  'multiline-comment-style': [ 'error', 'separate-lines' ],
  'new-cap': [ 'error', { capIsNew: false, newIsCap: true, properties: true }],
  'no-console': [ 'error', { allow: [ '' ]}], // (antfu: ['error', { allow: ['warn', 'error'] }])
  'no-implicit-globals': 'error',
  'no-iterator': 'error',
  'no-labels': [ 'error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-multi-str': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-proto': 'error',
  'no-restricted-properties': [
    'error',
    { message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' },
    { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
    { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
    { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
    { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
  ],
  'no-restricted-syntax': [
    'error',
    'DebuggerStatement',
    'LabeledStatement',
    'WithStatement',
    'TSEnumDeclaration[const=true]',
    // 'TSExportAssignment', // triggers on imports.d.ts
  ],
  'no-self-compare': 'error',
  'no-sequences': 'error',

  // enabled with minor errors
  // 'default-case': 'error', // (!! TSC already takes care of these checks ??)
  // 'guard-for-in': 'error',
  // 'func-style': [ 'error', 'declaration' ],
  // 'no-implicit-coercion': 'error',
  // 'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true }],
  // 'no-restricted-globals': [
  //   'error',
  //   { message: 'Use `globalThis` instead.', name: 'global' },
  //   { message: 'Use `globalThis` instead.', name: 'self' },
  // ],

  // enabled with major errors
  // 'no-multi-assign': 'error', // errors in comunica

  // absent/different in CSS
  'accessor-pairs': [ 'error', {
    getWithoutSet: false, // not in antfu
    setWithoutGet: true,
    enforceForClassMembers: true,
  }],
  'array-callback-return': [ 'error', { allowImplicit: true }], // antfu: no options
  'capitalized-comments': [ 'error', 'always', {
    ignoreInlineComments: false, // not in css
    ignoreConsecutiveComments: true,
  }],
  'consistent-this': [ 'error', 'that' ],
  'id-length': [ 'error', {
    min: 2,
    max: Number.POSITIVE_INFINITY,
    properties: 'always',
    exceptions: [ '_', 'i', 'j', 't', 'x', 'y', 'z' ],
  }],
  'no-bitwise': [ 'error', { 'allow': [], 'int32Hint': false }],
  'no-div-regex': [ 'error' ],
  'no-eq-null': [ 'error' ],
  'no-eval': [ 'error', {
    'allowIndirect': false, // not in anftu
  }],
  'no-extend-native': [ 'error', {
    'exceptions': [], // not in antfu
  }],
  'no-extra-label': [ 'error' ],
  'no-sync': 'off', // deprecated | css: [ 'error', { allowAtRootLevel: false }]
  'no-unused-expressions': [ 'error', {
    allowShortCircuit: false, // antfu: true
    allowTernary: false, // antfu: true
    allowTaggedTemplates: false, // antfu: true
  }],
  'no-useless-computed-key': [ 'error', {
    enforceForClassMembers: true, // not in antfu
  }],
  'no-useless-rename': [ 'error', { // antfu: no options
    ignoreDestructuring: false,
    ignoreImport: false,
    ignoreExport: false,
  }],
  'object-shorthand': [ 'error', 'always', {
    avoidQuotes: false, // antfu: true
    ignoreConstructors: false,
    avoidExplicitReturnArrows: true, // not in antfu
  }],
  'one-var': 'off', // antfu: ['error', { initialized: 'never' }]
  'prefer-const': [ 'error', { // also eslint-disable (no options) (antu no options for ts?)
    destructuring: 'any', // antfu: all
    ignoreReadBeforeAssign: true,
  }],
  'no-void': [ 'error' ],
  'prefer-numeric-literals': [ 'error' ],
  'prefer-promise-reject-errors': [ 'error', {
    allowEmptyReject: false, // not in antfu
  }],
  'prefer-regex-literals': [ 'error', {
    // disallowRedundantWrapping: true  // only in antfu
  }],
  'radix': [ 'error', 'always' ], // also in css (no 'always')
  'sort-imports': 'off', // enabled in anfu, disabled here in favor of eslint-plugin-import
  // [ 'error', {
  //   // allowSeparatedGroups: false,  // only in antfu/css
  //   ignoreCase: true,  // css: true | antfu: false
  //   ignoreDeclarationSort: false,  // antfu/css: true
  //   ignoreMemberSort: false, // also in css
  //   memberSyntaxSortOrder: [  // antfu/css: none, all, multiple, single
  //     'single',
  //     'multiple',
  //     'all',
  //     'none',
  //   ],
  // }],
  'sort-vars': [ 'error', { ignoreCase: true }],
  'strict': [ 'error', 'global' ],
  'yoda': [ 'error', 'never', {
    exceptRange: true, // not in antfu
    onlyEquality: false, // not in antfu
  }],

  // OFF
  // 'class-methods-use-this': 'off', // conflicts with functions from interfaces that sometimes don't require `this`
  // 'complexity': 'off',
  // 'consistent-return': 'off',
  // 'func-name-matching': 'off',
  // 'func-names': 'off',
  // 'id-denylist': 'off',
  // 'id-match': 'off',
  // 'init-declarations': 'off',
  // 'no-duplicate-imports': 'off', // Incompatible with type imports
  // 'no-param-reassign': 'off',
  // 'no-return-assign': 'off', // try to enable
  // 'no-ternary': 'off',
  // 'no-undefined': 'off',
  // 'no-underscore-dangle': 'off', // Conflicts with external libraries
  // 'no-warning-comments': 'off',
  // 'prefer-destructuring': 'off',
  // 'prefer-named-capture-group': 'off',
  // 'require-atomic-updates': 'off',
  // 'sort-keys': 'off',
};
