import type { Linter } from 'eslint';

import { rules as commentsRules } from './rules/comments';
import { rules as coreRules } from './rules/core';
import { rules as importRules } from './rules/import';
import { rules as mochaRules } from './rules/mocha';
import { rules as typescriptRules } from './rules/typescript';
import { rules as unicornRules } from './rules/unicorn';

const parserOptions: Linter.ParserOptions = {
  sourceType: 'script',
  ecmaVersion: 'latest',
  ecmaFeatures: {
    globalReturn: false,
    impliedStrict: false,
    jsx: true,
  },
};

const globals = {};

const env = {
  es6: true,
  mocha: true,
  node: true,
};

const settings = {};

const plugins = [ 'eslint-comments', 'import', 'mocha', 'unicorn' ];

const rules: Linter.RulesRecord = {
  ...commentsRules,
  ...coreRules,
  ...importRules,
  ...mochaRules,
  ...unicornRules,
  'import/noCommonjs': 'off',
  camelcase: <Linter.RuleEntry> [ 'error', {
    properties: 'always',
    ignoreDestructuring: false,
    ignoreImports: false,
    allow: [],
  }],
};

// This import config is necessary to make eslint-plugin-import work
// Import config taken from https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js
const allExtensions = [ '.ts', '.tsx', '.js', '.jsx' ];
const pluginImportSettings: Linter.BaseConfig['settings'] = {
  'import/extensions': allExtensions,
  'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  'import/parsers': {
    '@typescript-eslint/parser': [ '.ts', '.tsx' ],
  },
  'import/resolver': {
    node: {
      extensions: allExtensions,
    },
  },
};

const overrides: Linter.ConfigOverride[] = [
  {
    files: [ '*.ts', '*.tsx' ],
    parser: '@typescript-eslint/parser',
    settings: {
      ...pluginImportSettings,
    },
    parserOptions: {
      ...parserOptions,
      sourceType: 'module',
      project: 'tsconfig.json',
    },

    globals: { ...globals, NodeJS: true },
    plugins: [ ...plugins, '@typescript-eslint' ],
    rules: {
      ...typescriptRules,
      'import/no-commonjs': [ 'error' ],
      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: [ 'variableLike', 'memberLike' ],
          format: [ 'strictCamelCase', 'StrictPascalCase' ],
          filter: { regex: '^__html$', match: false },
        },
        {
          selector: [ 'typeLike' ],
          format: [ 'StrictPascalCase' ],
        },
        {
          selector: [ 'typeParameter' ],
          format: [ 'StrictPascalCase' ],
          prefix: [ 'T' ],
        },
      ],
    },
  },
];

export const config: Linter.Config = {
  parserOptions,
  globals,
  env,
  settings,
  plugins,
  rules,
  overrides,
};
