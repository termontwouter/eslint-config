import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  /* BEST PRACTICES */

  // 'eslint-comments/disable-enable-pair': [ 'error' ], // ==> minor errors in componentsjs/css
  'eslint-comments/no-aggregating-enable': [ 'error' ], // antfu
  'eslint-comments/no-duplicate-disable': [ 'error' ], // antfu
  'eslint-comments/no-unlimited-disable': [ 'error' ], // antfu

  /* STYLISTIC */

  'eslint-comments/no-restricted-disable': 'off',
  'eslint-comments/no-use': 'off',
  // 'eslint-comments/require-description': [ 'error' ], // ==> major errors in componentsjs/css

  /* DEPRECATED */

  'eslint-comments/no-unused-disable': [ 'off' ], // eslint built-in
  'eslint-comments/no-unused-enable': [ 'off' ], // eslint built-in
};
