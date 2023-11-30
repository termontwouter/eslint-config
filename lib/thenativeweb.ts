import * as tsParser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import globals from 'globals';
import plugins from './plugins.js';
import { rules as commentsRules } from './rules/comments.js';
import { rules as coreRules } from './rules/core.js';
import { rules as importRules } from './rules/import.js';
import { rules as mochaRules } from './rules/mocha.js';
import { rules as typescriptRules } from './rules/typescript.js';
import { rules as unicornRules } from './rules/unicorn.js';

type Config = Linter.FlatConfig;

const ecmaFeatures = {
  globalReturn: false,
  impliedStrict: false,
  jsx: true,
};

const importSettings = {
  'import/extensions': [ '.ts', '.tsx', '.js', '.jsx' ],
  'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  'import/parsers': {
    '@typescript-eslint/parser': [ '.ts', '.tsx' ],
  },
  'import/resolver': {
    node: {
      extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
    },
  },
};

const config: Config = {
  // files: [],
  ignores: [
    'node_modules',
  ],
  languageOptions: {
    parserOptions: {
      // ecmaVersion: 'latest',
      // sourceType: 'script',
      ecmaFeatures,
    },
    globals: {
      ...globals.es6,
      ...globals.mocha,
      ...globals.node,
    },
  },
  plugins: {
    'eslint-comments': plugins['eslint-comments'],
    'import': plugins['import'],
    'mocha': plugins['mocha'],
    'unicorn': plugins['unicorn'],
  },
  settings: {
    ...importSettings,
  },
  rules: {
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
  },
};


const ts: Config = {
  files: [
    '**/*.ts',
    '**/*.tsx',
  ],
  ignores: [
  ],
  languageOptions: {
  // Cast because of minor typing differences
  // Waiting for https://github.com/typescript-eslint/typescript-eslint/pull/7935
    parser: <Linter.ParserModule> tsParser,
    parserOptions: {
      // ecmaVersion: 'latest',
      // sourceType: 'module',
      project: 'tsconfig.json',
      ecmaFeatures,
    },
    globals: {
      ...globals.es6,
      ...globals.mocha,
      ...globals.node,
      NodeJS: true,
    },
  },
  plugins: {
    'eslint-comments': plugins['eslint-comments'],
    'import': plugins['import'],
    'mocha': plugins['mocha'],
    'unicorn': plugins['unicorn'],
    '@typescript-eslint': plugins['@typescript-eslint'],
  },
  settings: {
    ...importSettings,
  },
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
};

const flat: Config[] = [
  config,
  ts,
];

export default flat;
