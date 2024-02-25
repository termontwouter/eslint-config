import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  // eslint-comments/recommended
  'eslint-comments/disable-enable-pair': [ 'error' ], // !!
  'eslint-comments/no-aggregating-enable': [ 'error' ], // antfu
  'eslint-comments/no-duplicate-disable': [ 'error' ], // antfu
  'eslint-comments/no-unlimited-disable': [ 'error' ], // antfu

  // These are now a built-in ESLint option
  'eslint-comments/no-unused-disable': [ 'off' ], // antfu
  'eslint-comments/no-unused-enable': [ 'off' ],

  'eslint-comments/no-restricted-disable': 'off',
  'eslint-comments/no-use': 'off',
  'eslint-comments/require-description': [ 'error' ], // !!
};
