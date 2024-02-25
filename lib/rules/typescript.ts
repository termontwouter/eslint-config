import type { Linter } from 'eslint';
import { js as disabled, ts as shared } from './shared.js';

export const rules: Linter.RulesRecord = {
  ...shared,
  ...Object.fromEntries(Object.keys(disabled).map(rule => [ rule, 'off' ])),

  /* RECOMMENDED */ // (part of antfu)

  // shared
  // '@typescript-eslint/no-array-constructor': 'error', // in shared
  // '@typescript-eslint/no-loss-of-precision': 'error', // in shared
  // '@typescript-eslint/no-unused-vars': 'error', // in shared

  // absent/different in CSS
  '@typescript-eslint/ban-ts-comment': [ 'error', { // rec: no options
    'ts-ignore': true, // antfu: 'allow-with-description' | not in css
    'ts-nocheck': true, // not in anfu/css
    'ts-check': false, // not in anfu/css
    // 'ts-expect-error': true, // css
  }],
  '@typescript-eslint/ban-types': [ 'error', // rec: no options
    {
      types: {
        object: false,
        // Function: false // antfu
      },
    },
  ],
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': [ 'error', { // rec: no options
    allowDeclarations: false,
    allowDefinitionFiles: true,
  }],
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-this-alias': [ 'error', { // rec: no options
    allowDestructuring: false,
    allowedNames: [],
  }],
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/triple-slash-reference': 'error', // antfu: off
  '@typescript-eslint/prefer-as-const': 'error',

  // OFF
  // '@typescript-eslint/no-duplicate-enum-values': 'error',
  // '@typescript-eslint/no-extra-non-null-assertion': 'error',
  // '@typescript-eslint/no-explicit-any': 'error',
  // '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  // '@typescript-eslint/no-var-requires': 'error',

  /* STRICT */ // (part of antfu)

  // in shared
  // '@typescript-eslint/no-useless-constructor': 'error', // in shared

  // already in CSS
  '@typescript-eslint/no-extraneous-class': [ 'error', { // (antfu: off) | rec: no options
    allowConstructorOnly: false,
    allowEmpty: false,
    allowStaticOnly: false,
  }],

  // absent/different in CSS
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error', // also in antfu
  '@typescript-eslint/unified-signatures': 'error', // (antfu: off)

  // OFF
  // '@typescript-eslint/no-dynamic-delete': 'off', // also antfu | rec: error
  // '@typescript-eslint/no-invalid-void-type': 'off', // also in antfu | rec: error (but breaks asynchandler typing)
  // '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  // '@typescript-eslint/no-non-null-assertion': 'off', // also in antfu | rec: error

  /* TYPE-CHECKED */

  // in shared
  // '@typescript-eslint/no-implied-eval': 'error', // in shared
  // '@typescript-eslint/require-await': 'error', // in shared

  // already in CSS
  '@typescript-eslint/no-base-to-string': 'error',

  // enabled with minor errors
  // '@typescript-eslint/no-floating-promises': [ 'error', { // css | rec/antfu: no options | errors in comunica
  //   ignoreVoid: false,
  // }],

  // absent/different in CSS
  '@typescript-eslint/await-thenable': 'error', // also in antfu
  '@typescript-eslint/no-for-in-array': 'error', // also in antfu
  '@typescript-eslint/no-misused-promises': [ 'error', { // rec/antfu: no options
    checksConditionals: true,
    checksVoidReturn: false,
  }],
  '@typescript-eslint/restrict-plus-operands': 'error', // also in antfu
  '@typescript-eslint/unbound-method': [ 'error', { ignoreStatic: true }], // rec/antfu: no options

  // OFF
  // '@typescript-eslint/no-duplicate-type-constituents': 'error',
  // '@typescript-eslint/no-redundant-type-constituents': 'error',
  // '@typescript-eslint/no-unnecessary-type-assertion': [ 'off' ],
  // '@typescript-eslint/no-unsafe-argument': 'off',
  // '@typescript-eslint/no-unsafe-assignment': 'off',
  // '@typescript-eslint/no-unsafe-call': 'off',
  // '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  // '@typescript-eslint/no-unsafe-member-access': 'off',
  // '@typescript-eslint/no-unsafe-return': 'off',
  // '@typescript-eslint/restrict-template-expressions': 'off',

  /* STRICT TYPE-CHECKED */

  // in shared
  // '@typescript-eslint/no-throw-literal': 'error', // in shared
  // '@typescript-eslint/prefer-promise-reject-errors': 'error', // in shared

  // already in CSS
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // also in css
  '@typescript-eslint/prefer-reduce-type-parameter': 'error', // also in css

  // absent/different in CSS
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/prefer-includes': 'error',

  // OFF
  // '@typescript-eslint/no-array-delete': 'error',
  // '@typescript-eslint/no-confusing-void-expression': 'error',
  // '@typescript-eslint/no-meaningless-void-operator': 'error',
  // '@typescript-eslint/no-mixed-enums': 'error',
  // '@typescript-eslint/no-unnecessary-condition': 'error', // problems w opt params
  // '@typescript-eslint/no-useless-template-literals': 'error',
  // '@typescript-eslint/prefer-return-this-type': 'error',

  /* STYLISTIC */

  // in shared
  // '@typescript-eslint/no-empty-function': 'error', // in shared

  // already in CSS
  '@typescript-eslint/adjacent-overload-signatures': 'error', // also in css
  '@typescript-eslint/consistent-indexed-object-style': [ 'error', 'record' ], // also css | rec: no options
  '@typescript-eslint/no-confusing-non-null-assertion': 'error', // also in css
  '@typescript-eslint/no-inferrable-types': [ 'error', { // also css | rec: no options
    ignoreParameters: false,
    ignoreProperties: false,
  }],
  '@typescript-eslint/prefer-for-of': 'error', // also in css
  '@typescript-eslint/prefer-function-type': 'error', // also in css

  // absent/different in CSS
  '@typescript-eslint/array-type': [ 'error', { default: 'array' }], // css/rec: no options
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/class-literal-property-style': [ 'error', 'fields' ], // rec: no options
  '@typescript-eslint/consistent-type-assertions': [ 'error', { // rec: no options
    assertionStyle: 'angle-bracket', // thenativeweb: 'as',
    // objectLiteralTypeAssertions: 'allow', // thenativeweb
  }],
  '@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ], // also antfu | rec: no options | css: off

  // OFF
  // '@typescript-eslint/consistent-generic-constructors': 'error',
  // '@typescript-eslint/no-empty-interface': 'error',
  // '@typescript-eslint/prefer-namespace-keyword': 'error',

  /* STYLISTIC TYPE-CHECKED */ // (+ stylistic)

  // already in CSS
  '@typescript-eslint/prefer-string-starts-ends-with': 'error', // also in css

  // OFF
  // '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  // '@typescript-eslint/prefer-nullish-coalescing': 'error',
  // '@typescript-eslint/prefer-optional-chain': 'error',

  /* OTHER */

  // already in CSS
  '@typescript-eslint/no-unnecessary-qualifier': [ 'error' ], // also in css
  '@typescript-eslint/prefer-regexp-exec': [ 'error' ], // also in css
  '@typescript-eslint/require-array-sort-compare': [ 'error' ], // also in css

  // absent/different in CSS
  '@typescript-eslint/consistent-type-imports': [ 'error', {
    prefer: 'type-imports', // antfu: type-imports
    // disallowTypeAnnotations: false, // antfu
  }],
  '@typescript-eslint/explicit-function-return-type': [ 'error', {
    allowExpressions: true, // css: false
    allowTypedFunctionExpressions: true,
    allowHigherOrderFunctions: true, // css: false
    allowConciseArrowFunctionExpressionsStartingWithVoid: true, // not in css
  }],
  '@typescript-eslint/explicit-member-accessibility': [ 'error', { // css: no options
    accessibility: 'explicit',
  }],
  '@typescript-eslint/method-signature-style': [ 'error', 'property' ], // also in antfu | css: no option
  '@typescript-eslint/prefer-readonly': [ 'error', { onlyInlineLambdas: false }], // css: no options
  '@typescript-eslint/promise-function-async': 'off', // CSS: no options
  '@typescript-eslint/switch-exhaustiveness-check': [ 'error' ],

  // OFF
  // '@typescript-eslint/explicit-module-boundary-types': 'error',
  // '@typescript-eslint/init-declarations': 'error',
  // '@typescript-eslint/member-ordering': 'error',
  // '@typescript-eslint/no-import-type-side-effects': 'error', // antfu
  // '@typescript-eslint/no-invalid-this': 'error',
  // '@typescript-eslint/no-parameter-properties': 'error',
  // '@typescript-eslint/no-redeclare': 'error', // antfu
  // '@typescript-eslint/no-require-imports': [ 'error' ], // antfu: error (try to re-enable)
  // '@typescript-eslint/no-type-alias': 'error',
  // '@typescript-eslint/prefer-enum-initializers': 'off',
  // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
  // '@typescript-eslint/strict-boolean-expressions': 'error',
  // '@typescript-eslint/typedef': 'error',
};
