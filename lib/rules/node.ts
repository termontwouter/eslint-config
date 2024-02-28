import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  /* RECOMMENDED */

  'n/no-exports-assign': 'error',
  'n/no-missing-require': 'error',
  'n/no-unpublished-bin': 'error',
  'n/no-unpublished-require': 'error',
  'n/no-unsupported-features/es-builtins': 'error',
  'n/no-unsupported-features/es-syntax': 'error',
  'n/no-unsupported-features/node-builtins': 'error',
  'n/process-exit-as-throw': 'error',

  // trivial errors
  // 'n/no-deprecated-api': 'error', // (comunica)
  // 'n/no-unpublished-import': 'error', // (componentsjs)
  // 'n/shebang': 'error', // (comunica, componentsjs)

  // minor errors
  // 'n/no-process-exit': 'error', // (all)

  // major errors
  // 'n/no-extraneous-import': 'error', // (all)
  // 'n/no-extraneous-require': 'error', // (comunica, componentsjs)
  // 'n/no-missing-import': 'error', // (all)

  /* OTHER */

  'n/handle-callback-err': 'error',
  'n/no-mixed-requires': 'error',
  'n/no-new-require': 'error',

  // 'n/prefer-global/buffer': ['error', 'never'],
  // 'n/prefer-global/process': ['error', 'never'],

  // trivial errors
  // 'n/callback-return': 'error', // (all)

  // minor errors
  // 'n/global-require': 'error', // (all)
  // 'n/no-path-concat': 'error', // (comunica, componentsjs)
  // 'n/no-process-env': 'error', // (css, comunica)
  // 'n/no-sync': 'error', // (all)
};
