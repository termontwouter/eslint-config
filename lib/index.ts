

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import type { Linter } from 'eslint';
import { languageOptions, linterOptions, settings } from './common.js';
import configs from './configs.js';
import plugins from './plugins.js';
import { rules as commentsRules } from './rules/comments.js';
import { rules as coreRules } from './rules/core.js';
import { rules as importRules } from './rules/import.js';
import { rules as mochaRules } from './rules/mocha.js';
import * as rubensworks from './rules/rubensworks.js';
import { rules as typescriptRules } from './rules/typescript.js';
import { rules as unicornRules } from './rules/unicorn.js';
import { ALL, ALL_TS, glob } from './util.js';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  // baseDirectory: __dirname,
  // resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const flat: Linter.FlatConfig[] = [
  {
    files: [ '**/*' ],
    // processor?: string | Processor;
    linterOptions,
    languageOptions,
    plugins,
    settings,
  },
  {
    // thenativeweb rules
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
  },
  {
    // thenativeweb TS rules
    files: [
      '**/*.ts',
      '**/*.tsx',
    ],
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
  ...compat.config(configs['import/errors']),
  ...compat.config(configs['import/warnings']),
  ...compat.config(configs['import/typescript']),
  {
    // Overrides for all files
    files: ALL.map(ext => glob(ext)),
    rules: rubensworks.js,
  },
  {
    // Overrides for TS files
    files: ALL_TS.map(ext => glob(ext)),
    rules: rubensworks.ts,
  },
  {
    // Specific rules for bin files
    files: [ '**/bin/*.ts' ],
    rules: rubensworks.bin,
  },
  {
    /* Specific rules for test files */
    files: [ '**/test/**/*.ts' ],
    rules: rubensworks.test,
  },
];

export default flat;


