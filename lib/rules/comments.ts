import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {
  'eslint-comments/disable-enable-pair': [ 'error' ],
  'eslint-comments/no-aggregating-enable': [ 'error' ],
  'eslint-comments/no-duplicate-disable': [ 'error' ],
  'eslint-comments/no-unlimited-disable': [ 'error' ],
  'eslint-comments/no-restricted-disable': 'off',
  'eslint-comments/no-use': 'off',
  'eslint-comments/require-description': [ 'error' ],

  // The following will be deprecated because of the built-in ESLint option
  // 'eslint-comments/no-unused-disable': [ 'error' ],
  // 'eslint-comments/no-unused-enable': [ 'error' ],
};
