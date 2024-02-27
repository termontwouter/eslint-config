import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  /* DISABLE IMPORT */

  'import/named': 'off',

  /* DISABLE ESLINT */

  'camelcase': 'off', // rule (naming-convention)
  'constructor-super': 'off', // ts(2335) & ts(2377)
  'default-case': 'off', // rule (switch-exhaustiveness-check)
  'default-param-last': 'off', // rule
  'dot-notation': 'off', // rule
  'getter-return': 'off', // ts(2378)
  'no-array-constructor': 'off', // rule
  'no-const-assign': 'off', // ts(2588)
  'no-dupe-args': 'off', // ts(2300)
  'no-dupe-class-members': 'off', // ts(2393) & ts(2300) & rule
  'no-dupe-keys': 'off', // ts(1117)
  'no-empty-function': 'off', // rule
  'no-func-assign': 'off', // ts(2630)
  'no-implied-eval': 'off', // rule
  'no-import-assign': 'off', // ts(2632) & ts(2540)
  'no-loop-func': 'off', // rule
  'no-loss-of-precision': 'off', // rule
  'no-magic-numbers': 'off', // rule
  'no-new-symbol': 'off', // ts(7009)
  'no-obj-calls': 'off', // ts(2349)
  'no-redeclare': 'off', // ts(2451)
  'no-setter-return': 'off', // ts(2408)
  'no-shadow': 'off', // rule
  'no-this-before-super': 'off', // ts(2408)
  'no-throw-literal': 'off', // rule
  'no-undef': 'off', // ts(2304) & ts(2552)
  'no-unreachable': 'off', // // ts(7027)
  'no-unsafe-negation': 'off', // // ts(2365) & ts(2322) & ts(2358)
  'no-unused-vars': 'off', // rule
  'no-use-before-define': 'off', // rule
  'no-useless-constructor': 'off', // rule
  'prefer-promise-reject-errors': 'off', // rule
  'require-await': 'off', // rule
  'class-methods-use-this': 'off', // rule
  'init-declarations': 'off', // rule
  'max-params': 'off', // rule
  'no-invalid-this': 'off', // ts & rule
  'no-restricted-imports': 'off', // rule
  'no-unused-expressions': 'off', // rule
  'prefer-destructuring': 'off', // rule
  'return-await': 'off', // rule

  /* RECOMMENDED */

  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-types': [ 'error', { types: { object: false }, extendDefaults: true }], // looser
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  // major errors
  // '@typescript-eslint/no-unused-vars': 'error', // (all)
  // '@typescript-eslint/no-explicit-any': 'error', // (all)
  // '@typescript-eslint/no-var-requires': 'error', // (componentsjs)

  /* STRICT */

  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

  // trivial errors
  // '@typescript-eslint/unified-signatures': [ 'error', { ignoreDifferentlyNamedParameters: true }], // looser (css)

  // minor errors
  // '@typescript-eslint/no-dynamic-delete': 'error', // (all, mostly comunica)
  // '@typescript-eslint/no-invalid-void-type': 'error', // (comunica)

  // major errors
  // '@typescript-eslint/no-non-null-assertion': 'error', // (all)

  /* TYPE-CHECKED */

  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/no-misused-promises': [ 'error', { checksVoidReturn: false }], // looser
  '@typescript-eslint/unbound-method': [ 'error', { ignoreStatic: true }], // looser

  // minor errors
  // '@typescript-eslint/no-floating-promises': [ 'error', { ignoreVoid: false }], // looser (comunica)

  // OFF
  // '@typescript-eslint/require-await': 'error',
  // '@typescript-eslint/no-duplicate-type-constituents': 'error',
  // '@typescript-eslint/no-redundant-type-constituents': 'error',
  // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  // '@typescript-eslint/no-unsafe-argument': 'error',
  // '@typescript-eslint/no-unsafe-assignment': 'error',
  // '@typescript-eslint/no-unsafe-call': 'error',
  // '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  // '@typescript-eslint/no-unsafe-member-access': 'error',
  // '@typescript-eslint/no-unsafe-return': 'error',
  // '@typescript-eslint/restrict-template-expressions': 'error',

  /* STRICT TYPE-CHECKED */

  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-includes': 'error',

  // '@typescript-eslint/no-unnecessary-type-arguments': 'error', // trivial errors (css)

  // OFF
  // '@typescript-eslint/prefer-promise-reject-errors': 'error',
  // '@typescript-eslint/no-array-delete': 'error',
  // '@typescript-eslint/no-confusing-void-expression': 'error',
  // '@typescript-eslint/no-meaningless-void-operator': 'error',
  // '@typescript-eslint/no-mixed-enums': 'error',
  // '@typescript-eslint/no-unnecessary-condition': 'error', // problems w opt params
  // '@typescript-eslint/no-useless-template-literals': 'error',
  // '@typescript-eslint/prefer-return-this-type': 'error',

  /* STYLISTIC */

  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/consistent-indexed-object-style': 'error',
  '@typescript-eslint/consistent-type-assertions': [ 'error', { assertionStyle: 'angle-bracket' }], // different (css)
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/class-literal-property-style': 'error',

  // trivial errors
  // '@typescript-eslint/no-empty-function': 'error', // (css)

  // minor errors
  // '@typescript-eslint/consistent-type-definitions': 'error', // (css)

  // OFF
  // '@typescript-eslint/consistent-generic-constructors': 'error',
  // '@typescript-eslint/no-empty-interface': 'error',
  // '@typescript-eslint/prefer-namespace-keyword': 'error',

  /* STYLISTIC TYPE-CHECKED */

  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  // OFF
  // '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  // '@typescript-eslint/prefer-nullish-coalescing': 'error',
  // '@typescript-eslint/prefer-optional-chain': 'error',

  /* OTHER */

  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/method-signature-style': 'error',

  '@typescript-eslint/consistent-type-imports': [ 'error', { disallowTypeAnnotations: false }], // looser (css)
  '@typescript-eslint/promise-function-async': [ 'error', {  // looser (comunica, componentsjs)
    checkArrowFunctions: false,
    checkMethodDeclarations: false,
  }],

  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'typeLike',
      format: [ 'PascalCase' ],
      custom: {
        regex: '^[A-Z]',
        match: true,
      },
    },
    {
      selector: [ 'typeParameter' ],
      format: [ 'PascalCase' ],
      // prefix: [ 'T' ], // css stricter
    },
    {
      selector: 'variableLike',
      format: [
        'camelCase',
        'UPPER_CASE',
        'PascalCase', // css stricter
      ],
      leadingUnderscore: 'allowSingleOrDouble', // css stricter: forbid
      trailingUnderscore: 'allow', // css stricter: forbid
    },
    {
      selector: 'parameter',
      format: [ 'camelCase' ],
      leadingUnderscore: 'allow',
    },
  ],

  // trivial errors
  // '@typescript-eslint/no-redeclare': 'error', // (componentsjs)
  // '@typescript-eslint/switch-exhaustiveness-check': [ 'error', { requireDefaultForNonUnion: true }], // stricter (css)

  // minor errors
  // '@typescript-eslint/explicit-function-return-type': [ 'error', { allowExpressions: true }], // looser (comunica)

  // major errors
  // '@typescript-eslint/no-require-imports': 'error', // (css, componentsjs)

  // OFF
  // '@typescript-eslint/no-magic-numbers': 'error',
  // '@typescript-eslint/no-shadow': 'error',
  // '@typescript-eslint/no-use-before-define': 'error',
  // '@typescript-eslint/explicit-module-boundary-types': 'error',
  // '@typescript-eslint/class-methods-use-this': 'error',
  // '@typescript-eslint/init-declarations': 'error',
  // '@typescript-eslint/max-params': 'error',
  // '@typescript-eslint/member-ordering': 'error',
  // '@typescript-eslint/no-invalid-this': 'error',
  // '@typescript-eslint/no-parameter-properties': 'error',
  // '@typescript-eslint/no-type-alias': 'error',
  // '@typescript-eslint/prefer-enum-initializers': 'error',
  // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
  // '@typescript-eslint/strict-boolean-expressions': 'error',
  // '@typescript-eslint/typedef': 'error',
  // '@typescript-eslint/no-restricted-imports': 'error',
  // '@typescript-eslint/no-unused-expressions': 'error',
  // '@typescript-eslint/prefer-destructuring': 'error',
  // '@typescript-eslint/return-await': 'error',

  /* DEPRECATED */

  '@typescript-eslint/block-spacing': 'off', // stylistic
  '@typescript-eslint/brace-style': 'off', // stylistic
  '@typescript-eslint/comma-dangle': 'off', // stylistic
  '@typescript-eslint/comma-spacing': 'off', // stylistic
  '@typescript-eslint/func-call-spacing': 'off', // stylistic
  '@typescript-eslint/indent': 'off', // stylistic
  '@typescript-eslint/key-spacing': 'off', // stylistic
  '@typescript-eslint/keyword-spacing': 'off', // stylistic
  '@typescript-eslint/lines-around-comment': 'off', // stylistic
  '@typescript-eslint/lines-between-class-members': 'off', // stylistic
  '@typescript-eslint/member-delimiter-style': 'off', // stylistic
  '@typescript-eslint/no-extra-parens': 'off', // stylistic
  '@typescript-eslint/no-extra-semi': 'off', // stylistic
  '@typescript-eslint/no-type-alias': 'off', // -> @typescript-eslint/consistent-type-definitions
  '@typescript-eslint/object-curly-spacing': 'off', // stylistic
  '@typescript-eslint/padding-line-between-statements': 'off', // stylistic
  '@typescript-eslint/quotes': 'off', // stylistic
  '@typescript-eslint/semi': 'off', // stylistic
  '@typescript-eslint/space-before-blocks': 'off', // stylistic
  '@typescript-eslint/space-before-function-paren': 'off', // stylistic
  '@typescript-eslint/space-infix-ops': 'off', // stylistic
  '@typescript-eslint/type-annotation-spacing': 'off', // stylistic
};
