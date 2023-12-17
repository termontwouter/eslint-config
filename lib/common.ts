import * as tsParser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import globals from 'globals';
import { ALL } from './util.js';

type Config = Linter.FlatConfig;

const linterOptions: Config['linterOptions'] = {
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
};

const languageOptions: Config['languageOptions'] = {
  // Cast because of minor typing differences
  // Waiting for https://github.com/typescript-eslint/typescript-eslint/pull/7935
  parser: <Linter.ParserModule> tsParser,
  parserOptions: {
    // ecmaVersion: 'latest',
    // sourceType: 'module',
    project: true,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  globals: {
    ...globals.es6,
    ...globals.mocha,
    ...globals.node,

    // String globals are weirdly not supported, even though they are documented
    // https://eslint.org/docs/latest/use/configure/configuration-files-new#configuring-global-variables
    // window: 'off',
    // global: 'off',

    // from original rubensworks
    globalThis: false,
    fetch: false,
    Headers: false,
    Request: false,
    XMLHttpRequest: false,

    // for tests
    ...globals.jest,
    spyOn: false,
    fail: false,

    // for .ts ?
    NodeJS: true,
  },
};

// This is basically the same as the settings imported by extending import/typescript
const settings: Config['settings'] = {
  'import/extensions': ALL,
  // 'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  'import/parsers': {
    '@typescript-eslint/parser': ALL, // SHOULD only be ALL_TS
  },
  'import/resolver': {
    'eslint-import-resolver-typescript': {
      extensions: ALL,
      alwaysTryTypes: true,
    },
    // node: {
    //   extensions: ALL,
    // },
  },
};

export {
  linterOptions,
  languageOptions,
  settings,
};
