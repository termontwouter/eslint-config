import * as tsParser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import globals from 'globals';
import { ALL, ALL_TS } from './util.js';

type Config = Linter.FlatConfig;

const linterOptions: Config['linterOptions'] = {
  noInlineConfig: false,
  // reportUnusedDisableDirectives: true, // TODO: re-enable
};

function mapLegacyGlobals(globals: Record<string, boolean>): Record<string, 'writable' | 'readonly'> {
  return Object.fromEntries(Object.entries<boolean>(globals).map(
    ([ global, writable ]: [string, boolean]) => [ global, writable ? 'writable' : 'readonly' ],
  ));
}

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

  // String globals are supported:
  // https://eslint.org/docs/latest/use/configure/configuration-files-new#configuring-global-variables
  globals: <any> {
    ...mapLegacyGlobals(globals.es2015),
    ...mapLegacyGlobals(globals.mocha),
    ...mapLegacyGlobals(globals.node),

    // from original rubensworks
    window: 'off',

    // global: 'off', // disabled in v2, but some packages rely on it
    globalThis: 'readonly',
    fetch: 'readonly',
    Headers: 'readonly',
    Request: 'readonly',
    XMLHttpRequest: 'readonly',

    // for tests
    ...mapLegacyGlobals(globals.jest),
    spyOn: 'readonly',
    fail: 'readonly',

    // for .ts ?
    NodeJS: 'writable',
  },
};

// This is basically the same as the settings imported by extending import/typescript
const settings: Config['settings'] = {
  'import/extensions': ALL,
  'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  'import/parsers': {
    '@typescript-eslint/parser': ALL_TS,
  },
  'import/resolver': {
    'eslint-import-resolver-typescript': {
      extensions: ALL_TS,
      alwaysTryTypes: true,
    },
    'node': {
      extensions: ALL,
    },
  },
};

export {
  linterOptions,
  languageOptions,
  settings,
};
