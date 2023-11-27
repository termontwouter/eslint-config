import { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {
  'eslint-comments/disable-enable-pair': [ 'error' ],
  'eslint-comments/no-aggregating-enable': [ 'error' ],
  'eslint-comments/no-duplicate-disable': [ 'error' ],
  'eslint-comments/no-unlimited-disable': [ 'error' ],
  'eslint-comments/no-unused-disable': [ 'error' ],
  'eslint-comments/no-unused-enable': [ 'error' ],
  'eslint-comments/no-restricted-disable': 'off',
  'eslint-comments/no-use': 'off',

  // TODO [eslint-plugin-eslint-comments@>3.2.0]: This should be turned on,
  // once https://github.com/mysticatea/eslint-plugin-pull/56
  // has been merged.
  'eslint-comments/require-description': 'off',
};
