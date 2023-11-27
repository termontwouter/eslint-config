import { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {
  'import/default': [ 'error' ],

  // This rule only makes sense in projects that use webpack
  'import/dynamic-import-chunkname': 'off',
  'import/export': [ 'error' ],
  'import/exports-last': [ 'error' ],
  'import/extensions': [ 'error', 'never' ],
  'import/first': [ 'error' ],
  'import/group-exports': [ 'error' ],

  // Deprecated rule, superseded by 'first'
  'import/imports-first': 'off',
  'import/max-dependencies': 'off',
  'import/named': [ 'error' ],
  'import/namespace': [ 'error' ],
  'import/newline-after-import': [ 'error', { count: 1 }],
  'import/no-absolute-path': [ 'error' ],
  'import/no-amd': [ 'error' ],
  'import/no-anonymous-default-export': [ 'error' ],

  // This rule is computational expensive and might slow down our IDEs, so we keep it off
  'import/no-cycle': 'off',
  'import/no-default-export': [ 'error' ],
  'import/no-deprecated': [ 'error' ],
  'import/no-duplicates': [ 'error' ],
  'import/no-dynamic-require': [ 'error' ],
  'import/no-extraneous-dependencies': 'off',
  'import/no-import-module-exports': [ 'error' ],

  // This rule is project specific and does not make sense to enable globally
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': [ 'error' ],
  'import/no-named-as-default-member': [ 'error' ],
  'import/no-named-as-default': [ 'error' ],
  'import/no-named-default': [ 'error' ],
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-nodejs-modules': 'off',
  'import/no-relative-packages': [ 'error' ],
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': [ 'error' ],
  'import/no-unassigned-import': [ 'error' ],
  'import/no-unresolved': [ 'error', {
    commonjs: true,
    amd: true,
    caseSensitive: true,
    caseSensitiveStrict: true,
  }],

  // Currently unusable, as non-found files in `ignoreExports` will actually
  // crash the eslint process - so we have no way of defining some common paths
  // (e.g. index.{js|ts}) that do not exit outside of this repository.
  // Also see: https://github.com/import-js/eslint-plugin-import/issues/2128
  'import/no-unused-modules': 'off',
  'import/no-useless-path-segments': [ 'error' ],
  'import/no-webpack-loader-syntax': [ 'error' ],

  // Ordering does not support sorting by single- and multi exports like the core-features does
  // It works by assining groups - which I guess is not what we want
  'import/order': 'off',
  'import/prefer-default-eport': 'off',
  'import/unambiguous': [ 'error' ],
};
