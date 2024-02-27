import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  /* RECOMMENDED */ // (in CSS?)

  'import/default': 'error',
  'import/export': 'error',

  // 'import/named': 'error', // errors in componentsjs
  // 'import/namespace': 'error', // errors in componentsjs
  // 'import/no-unresolved': 'error', // errors in componentsjs

  'import/no-duplicates': [ 'warn' ], // antfu stricter: error
  // 'import/no-named-as-default-member': [ 'warn' ], // crashes on v8->9 change
  // 'import/no-named-as-default': [ 'warn' ], // crashes on v8->9 change

  /* OTHER */

  'import/no-extraneous-dependencies': 'error',

  // in CSS but not rubensworks
  // 'import/extensions': 'error', // css | comunica: try re-enable
  // 'import/first': 'error', // antfu
  // 'import/no-commonjs': 'error', // comunica/css | try re-enable
  // 'import/no-mutable-exports': 'error', // antfu
  // 'import/no-named-default': 'error', // antfu
  // 'import/no-self-import': 'error', // antfu
  // 'import/no-webpack-loader-syntax': 'error', // antfu
  // 'import/newline-after-import': [ 'error', { considerComments: true, count: 1 }], // antfu

  // absent/different in CSS
  'import/order': [ 'error', {
    // alphabetize: { // ===> errors in css
    //   order: 'asc',
    //   caseInsensitive: true,
    // },
  }],

  /* OFF */

  // 'import/exports-last': 'error', // thenativeweb/comunica: try re-enable
  // 'import/group-exports': 'error', // thenativeweb/comunica: try re-enable
  // 'import/no-nodejs-modules': 'off', // enabled in @rubensworks/eslint-config@v2.0.0
  // 'import/dynamic-import-chunkname': 'off', // only for webpack projects
  // 'import/imports-first': 'off', // deprecated, superseded by 'first'
  // 'import/max-dependencies': 'off',
  // 'import/no-absolute-path': 'error', // thenativeweb
  // 'import/no-amd': 'error', // thenativeweb
  // 'import/no-anonymous-default-export': 'error', // thenativeweb
  // 'import/no-cycle': 'off', // computationally expensive
  // 'import/no-default-export': 'error', // thenativeweb
  // 'import/no-deprecated': 'error', // thenativeweb
  // 'import/no-dynamic-require': 'error', // thenativeweb
  // 'import/no-import-module-exports': 'error', // thenativeweb
  // 'import/no-internal-modules': 'off', // project specific
  // 'import/no-named-export': 'off',
  // 'import/no-namespace': 'off',
  // 'import/no-relative-packages': 'error', // thenativeweb
  // 'import/no-relative-parent-imports': 'off',
  // 'import/no-restricted-paths': 'off',
  // 'import/no-unassigned-import': 'error', // thenativeweb
  // 'import/no-unused-modules': 'off', // crashes on non-found files (issue #2128)
  // 'import/no-useless-path-segments': 'error', // thenativeweb
  // 'import/prefer-default-export': 'off',
  // 'import/unambiguous': 'error', // thenativeweb
};
