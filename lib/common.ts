import * as tsParser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import globals from 'globals';

const languageOptions = {
  // Cast because of minor typing differences
  // Waiting for https://github.com/typescript-eslint/typescript-eslint/pull/7935
  parser: <Linter.ParserModule> tsParser,
  parserOptions: {
    // ecmaVersion: 'latest',
    // sourceType: 'module',
    project: true,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: true,
    },
  },
  globals: {
    ...globals.es6,
    ...globals.mocha,
    ...globals.node,

    // for tests
    ...globals.jest,
    spyOn: false,
    fail: false,

    // for .ts
    NodeJS: true,
  },
};

const settings = {
  'import/extensions': [ '.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx' ],
  'import/parsers': {
    // 'espree': [ '.js', '.mjs', '.cjs', '.jsx' ],
    '@typescript-eslint/parser': [ '.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx' ],
  },
  'import/resolver': {
    // 'eslint-import-resolver-node': {
    //   extensions: [ '.js', '.mjs', '.cjs', '.jsx' ],
    // },
    'eslint-import-resolver-typescript': {
      extensions: [ '.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx' ],
      // Always try to resolve types under `<root>@types` directory
      // even it doesn't contain any source code, like `@types/rdf-js`
      alwaysTryTypes: true,
    },
  },
};

export {
  languageOptions,
  settings,
};
