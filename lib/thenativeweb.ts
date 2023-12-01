import type { Linter } from 'eslint';
import { languageOptions, settings } from './common.js';
import plugins from './plugins.js';
import { rules as commentsRules } from './rules/comments.js';
import { rules as coreRules } from './rules/core.js';
import { rules as importRules } from './rules/import.js';
import { rules as mochaRules } from './rules/mocha.js';
import { rules as typescriptRules } from './rules/typescript.js';
import { rules as unicornRules } from './rules/unicorn.js';

type Config = Linter.FlatConfig;

const config: Config = {
  // files: [],
  ignores: [
    'node_modules',
  ],
  languageOptions,
  plugins: {
    'eslint-comments': plugins['eslint-comments'],
    'import': plugins['import'],
    'mocha': plugins['mocha'],
    'unicorn': plugins['unicorn'],
  },
  settings,
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
  languageOptions,
  plugins: {
    'eslint-comments': plugins['eslint-comments'],
    'import': plugins['import'],
    'mocha': plugins['mocha'],
    'unicorn': plugins['unicorn'],
    '@typescript-eslint': plugins['@typescript-eslint'],
  },
  settings,
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
