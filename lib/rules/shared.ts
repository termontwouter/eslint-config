import type { Linter } from 'eslint';

const js: Linter.RulesRecord = {

  /* RECOMMENDED */

  // aready in CSS
  'constructor-super': [ 'error' ], // ts(2335) & ts(2377)
  'getter-return': [ 'error', { allowImplicit: true }], // ts(2378) | rec: no options
  'no-const-assign': 'error', // ts(2588)
  'no-dupe-args': 'error', // ts(2300)
  'no-dupe-class-members': [ 'error' ], // ts(2393) & ts(2300)
  'no-dupe-keys': 'error', // ts(1117)
  'no-loss-of-precision': [ 'error' ],
  'no-setter-return': 'off', // ts(2408) | rec: error
  'no-this-before-super': [ 'error' ], // ts(2408)
  'no-unreachable': [ 'error' ], // // ts(7027)
  'no-unsafe-negation': [ 'error' ], // // ts(2365) & ts(2322) & ts(2358)

  // enabled
  'no-func-assign': 'error', // ts(2630)
  'no-import-assign': 'error', // ts(2632) & ts(2540)
  'no-obj-calls': 'error', // ts(2349)
  'no-redeclare': [ 'error', { builtinGlobals: false }], // // ts(2451) | rec: no options

  // different in CSS
  'no-undef': [ 'error', { // ts(2304) & ts(2552) | rec/antfu: no options
    typeof: true, // not in antfu
  }],
  'no-unused-vars': [ 'error', { // rec: no options
    args: 'after-used', // antfu: none
    caughtErrors: 'all', // antfu: none
    vars: 'all',
    ignoreRestSiblings: false, // antfu: true
  }],

  /* OTHER */

  // already in CSS
  'dot-notation': [ 'error', { allowKeywords: true }],
  'no-array-constructor': [ 'error' ],
  'no-implied-eval': 'error',
  'no-throw-literal': [ 'error' ],
  'no-useless-constructor': [ 'error' ],

  // enabled without issues
  'camelcase': [ 'error', { // css
    properties: 'always',
    ignoreDestructuring: false,
    ignoreImports: false,
    allow: [],
  }],

  // absent/different in CSS
  'default-param-last': [ 'error' ],
  'no-empty-function': [ 'error', { allow: []}],
  'no-magic-numbers': [ 'error' ],
  'no-shadow': [ 'error', { builtinGlobals: false, hoist: 'functions', allow: []}],
  'no-use-before-define': [ 'error', {
    functions: true, //  antfu: false
    classes: true, //  antfu: false
    variables: true,
  }],

  // OFF (explicit to disable hard in override)
  'no-loop-func': 'off',
  'prefer-promise-reject-errors': 'off',
  'require-await': 'off',
};

const ts: Linter.RulesRecord = {

  /* RECOMMENDED */

  // already in CSS
  '@typescript-eslint/no-implied-eval': [ 'error' ], // typechecked
  '@typescript-eslint/no-loss-of-precision': [ 'error' ], // recommended
  '@typescript-eslint/no-unused-vars': [ 'off' ], // recommended: error
  '@typescript-eslint/no-throw-literal': [ 'error' ], // strict-typechecked

  // absent/different in CSS
  '@typescript-eslint/no-array-constructor': [ 'error' ], // recommended
  '@typescript-eslint/no-empty-function': [ 'error' ], // stylistic
  '@typescript-eslint/no-useless-constructor': [ 'error' ], // strict | antfu: off
  '@typescript-eslint/dot-notation': [ 'error', { // stylistic-typechecked: no options
    allowKeywords: true,
    allowPrivateClassPropertyAccess: false, // not in antfu
  }],

  // OFF
  // '@typescript-eslint/require-await': 'error', // typechecked
  // '@typescript-eslint/prefer-promise-reject-errors': 'error', // strict-typechecked

  /* OTHER */

  // already in CSS
  '@typescript-eslint/no-dupe-class-members': [ 'error' ],

  // absent/different in CSS
  '@typescript-eslint/default-param-last': [ 'error' ],
  '@typescript-eslint/no-loop-func': [ 'error' ],
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
    // eslint camelcase behavior
    // {
    //   'selector': 'default',
    //   'format': [ 'camelCase' ]
    // }, {
    //   'selector': 'variable',
    //   'format': [ 'camelCase', 'UPPER_CASE' ]
    // }, {
    //   'selector': 'parameter',
    //   'format': [ 'camelCase' ],
    //   'leadingUnderscore': 'allow'
    // }, {
    //   'selector': 'memberLike',
    //   'modifiers': [ 'private' ],
    //   'format': [ 'camelCase' ],
    //   'leadingUnderscore': 'require'
    // }, {
    //   'selector': 'typeLike',
    //   'format': [ 'PascalCase' ]
    // },
    // CSS
    //   {
    //     selector: 'default',
    //     format: [ 'camelCase' ],
    //     leadingUnderscore: 'forbid',
    //     trailingUnderscore: 'forbid',
    //   },
    //   {
    //     selector: 'import',
    //     format: null,
    //   },
    //   {
    //     selector: 'variable',
    //     format: [ 'camelCase', 'UPPER_CASE' ],
    //     leadingUnderscore: 'forbid',
    //     trailingUnderscore: 'forbid',
    //   },
    //   {
    //     selector: 'typeLike',
    //     format: [ 'PascalCase' ],
    //   },
    //   {
    //     selector: [ 'typeParameter' ],
    //     format: [ 'PascalCase' ],
    //     prefix: [ 'T' ],
    //   },
    // thenativeweb
    // {
    //   selector: [ 'variableLike', 'memberLike' ],
    //   format: [ 'strictCamelCase', 'StrictPascalCase' ],
    //   filter: { regex: '^__html$', match: false },
    // },
    // {
    //   selector: [ 'typeLike' ],
    //   format: [ 'StrictPascalCase' ],
    // },
    // {
    //   selector: [ 'typeParameter' ],
    //   format: [ 'StrictPascalCase' ],
    //   prefix: [ 'T' ],
    // },
  ],

  // OFF
  // '@typescript-eslint/no-magic-numbers': 'off',
  // '@typescript-eslint/no-shadow': 'off',
  // '@typescript-eslint/no-use-before-define': 'off',
};

export { js, ts };
