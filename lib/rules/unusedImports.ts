import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  'unused-imports/no-unused-imports': 'error',

  // enabled with  major errors
  // 'unused-imports/no-unused-vars': [
  //   'error',
  //   {
  //     args: 'after-used',
  //     vars: 'all',
  //     // argsIgnorePattern: '^_', // only in antfu
  //     // varsIgnorePattern: '^_', // only in antfu,
  //     ignoreRestSiblings: true,
  //   },
  // ],

  // OFF
  'unused-imports/no-unused-imports-ts': 'off', // deprecated
};
