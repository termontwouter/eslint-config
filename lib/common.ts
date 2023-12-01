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

const settings: Config['settings'] = {
  'import/extensions': ALL,
  'import/parsers': {
    '@typescript-eslint/parser': ALL,
  },
  'import/resolver': {
    'eslint-import-resolver-typescript': {
      extensions: ALL,
      alwaysTryTypes: true,
    },
  },
};

export {
  linterOptions,
  languageOptions,
  settings,
};
