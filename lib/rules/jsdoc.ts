import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  /* RECOMMENDED */

  'jsdoc/check-access': 'error',
  'jsdoc/check-property-names': 'error',
  'jsdoc/check-types': 'error',
  'jsdoc/check-values': 'error',
  'jsdoc/empty-tags': 'error',
  'jsdoc/implements-on-classes': 'error',
  'jsdoc/multiline-blocks': 'error',
  'jsdoc/no-undefined-types': 'error',
  'jsdoc/require-param-type': 'error',
  'jsdoc/require-property': 'error',
  'jsdoc/require-property-description': 'error',
  'jsdoc/require-property-name': 'error',
  'jsdoc/require-property-type': 'error',
  'jsdoc/require-returns-check': 'error',
  'jsdoc/require-returns-type': 'error',
  'jsdoc/require-yields-check': 'error',

  // trivial errors
  // 'jsdoc/tag-lines': 'error', // (all)
  // 'jsdoc/check-alignment': 'error', // (comunica)
  // 'jsdoc/check-tag-names': 'error', // (all)
  // 'jsdoc/check-param-names': 'error', // (comunica, componentsjs)
  // 'jsdoc/no-multi-asterisks': 'error', // (css, componentsjs)
  // 'jsdoc/require-param-name': 'error', // (componentsjs)
  // 'jsdoc/require-param-description': 'error', // (all)
  // 'jsdoc/require-returns-description': 'error', // (comunica)
  // 'jsdoc/valid-types': 'error', // (css, comunica)

  // minor errors
  // 'jsdoc/require-jsdoc': 'error', // (all)

  // major errors
  // 'jsdoc/require-param': 'error', // (all)
  // 'jsdoc/require-returns': 'error', // (all)
  // 'jsdoc/require-yields': 'error', // (all)

  /* OTHER */

  'jsdoc/no-defaults': 'error',
};

export const tsOverrides: Linter.RulesRecord = {
  'jsdoc/no-undefined-types': 'off',
  'jsdoc/require-param-type': 'off',
  'jsdoc/require-property-type': 'off',
  'jsdoc/require-returns-type': 'off',

  // 'jsdoc/no-types': 'error', // major errors (all)
};
