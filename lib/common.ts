import type { Linter } from 'eslint';
import globals from 'globals';
import { ALL, ALL_TS } from './util.js';

type Config = Linter.FlatConfig;

const linterOptions: Config['linterOptions'] = {
  noInlineConfig: false,
  // reportUnusedDisableDirectives: true, // TODO: re-enable (antfu)
};

/**
 *
 * @param globals
 */
function mapLegacyGlobals(globals: Record<string, boolean>): Record<string, 'writable' | 'readonly'> {
  return Object.fromEntries(Object.entries<boolean>(globals).map(
    ([ global, writable ]: [string, boolean]) => [ global, writable ? 'writable' : 'readonly' ],
  ));
}

const languageOptions: Config['languageOptions'] = {
  // sourceType: 'module', // antfu (but should be in parserOptions?)
  // ecmaVersion: 'latest', // antfu: 2022 (but should be in parserOptions?)

  parserOptions: {
    // ecmaVersion: 'latest', // antfu: 2022
    // sourceType: 'module', // antfu
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },

  // String globals are supported:
  // https://eslint.org/docs/latest/use/configure/configuration-files-new#configuring-global-variables
  globals: {
    ...mapLegacyGlobals(globals.es2015), // antfu: es2021
    ...mapLegacyGlobals(globals.mocha),
    ...mapLegacyGlobals(globals.node),
    // ...mapLegacyGlobals(globals.browser), // antfu

    // from original rubensworks
    window: 'off',

    // antfu
    // document: 'readonly',
    // navigator: 'readonly',
    // window: 'readonly',

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
  } as any,
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
