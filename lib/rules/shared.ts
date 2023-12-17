import type { Linter } from 'eslint';

const js: Linter.RulesRecord = {
  'default-param-last': [ 'error' ],
  'dot-notation': [ 'error', { allowKeywords: true }],
  'no-array-constructor': [ 'error' ],
  'no-dupe-class-members': [ 'error' ],
  'no-empty-function': [ 'error', { allow: []}],
  'no-loop-func': [ 'error' ],
  'no-loss-of-precision': [ 'error' ],
  'no-magic-numbers': [ 'error' ],
  'no-shadow': [ 'error', { builtinGlobals: false, hoist: 'functions', allow: []}],
  'no-unused-vars': [ 'error', {
    args: 'after-used',
    caughtErrors: 'all',
    vars: 'all',
    ignoreRestSiblings: false,
  }],
  'no-use-before-define': [ 'error', {
    functions: true,
    classes: true,
    variables: true,
  }],
  'no-useless-constructor': [ 'error' ],
  'require-await': 'off',
};

const ts: Linter.RulesRecord = {
  '@typescript-eslint/default-param-last': [ 'error' ],
  '@typescript-eslint/dot-notation': [ 'error', {
    allowKeywords: true,
    allowPrivateClassPropertyAccess: false,
  }],
  '@typescript-eslint/no-array-constructor': [ 'error' ],
  '@typescript-eslint/no-dupe-class-members': [ 'error' ],
  '@typescript-eslint/no-empty-function': [ 'error' ],
  '@typescript-eslint/no-loop-func': [ 'error' ],
  '@typescript-eslint/no-loss-of-precision': [ 'error' ],
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-shadow': [ 'error', { builtinGlobals: false, hoist: 'functions', allow: []}],
  '@typescript-eslint/no-unused-vars': [ 'error', { vars: 'all' }],
  '@typescript-eslint/no-use-before-define': [ 'error', {
    functions: true,
    classes: true,
    enums: true,
    variables: true,
    typedefs: true,
  }],
  '@typescript-eslint/no-useless-constructor': [ 'error' ],
  '@typescript-eslint/require-await': 'off',
};

export { js, ts };
