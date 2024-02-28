import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

//   jest/no-mocks-import
// jest/no-conditional-expect

// jest/no-alias-methods
// jest/prefer-to-have-length

  /* RECOMMENDED */
  // 'jest/expect-expect': 'warn', // minor errors (css, comunica)
  // 'jest/no-alias-methods': 'error', // minor errors (comunica, componentsjs)
  // 'jest/no-conditional-expect': 'error', // trivial errors (comunica, componentsjs)
  'jest/no-deprecated-functions': 'error',
  'jest/no-disabled-tests': 'error', // stricter
  // 'jest/no-done-callback': 'error', // trivial errors (comunica)
  'jest/no-export': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-identical-title': 'error',
  'jest/no-interpolation-in-snapshots': 'error',
  // 'jest/no-jasmine-globals': 'error', // trivial errors (comunica)
  // 'jest/no-mocks-import': 'error', // trivial errors (componentsjs)
  // 'jest/no-standalone-expect': 'error', // trivial errors (comunica)
  'jest/no-test-prefixes': 'error',
  'jest/valid-describe-callback': 'error',
  // 'jest/valid-expect': 'error', // trivial errors (comunica)
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-title': [ 'error', { ignoreSpaces: true }], // looser (comunica) | rubensworks stricter: { mustNotMatch: [ '\\.$' ]}

  /* STYLE */

  // 'jest/no-alias-methods': 'warn', // stricter in recommended
  // 'jest/prefer-to-be': 'error', // major errors (all)
  'jest/prefer-to-contain': 'error',
  // 'jest/prefer-to-have-length': 'error', // minor errors (componentsjs)

  /* TYPE CHECKING */

  // 'jest/unbound-method': 'error',

  /* OTHER */

  // 'jest/no-test-return-statement': 'error', // major errors (comunica)
  // 'jest/require-top-level-describe': [ 'error', { 'maxNumberOfTopLevelDescribes': 1 }], // stricter | major errors (comunica)

  // ...

  /* DEPRECATED */

  'jest/no-if': 'off', // -> jest/no-conditional-in-test
};
