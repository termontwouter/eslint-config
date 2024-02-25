import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import type { Linter } from 'eslint';
import { languageOptions, linterOptions, settings } from './common.js';
import plugins from './plugins.js';

// import { rules as commentsRules } from './rules/comments.js';
import { rules as coreRules } from './rules/core.js';
import { rules as importRules } from './rules/import.js';
import { rules as stylisticRules } from './rules/stylistic.js';
import { rules as typescriptRules } from './rules/typescript.js';
import { rules as unicornRules } from './rules/unicorn.js';
import { rules as unusedImportsRules } from './rules/unusedImports.js';

// import { ALL, ALL_TS, glob } from './util.js';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// antfu extra's: formaters, ignores, jsdoc, node, perfectionist, sort, test, unoccs,
// (jsonc, yarml, toml, markdown)
// (react,  vue, svelte)

// antfu-dts-overrides
//     'eslint-comments/no-unlimited-disable': 'off',
//     'import/no-duplicates': 'off',
//     'no-restricted-syntax': 'off',
//     'unused-imports/no-unused-vars': 'off',

// antfu-test-overrides
//     'no-unused-expressions': 'off',

// antfu-js-overrides
//     'ts/no-require-imports': 'off',
//     'ts/no-var-requires': 'off',

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
    files: [ '**/*' ],
    // files: ALL.map(ext => glob(ext)),
    rules: {

      ...coreRules,
      ...unicornRules,
      ...unusedImportsRules,
      ...stylisticRules,
      ...importRules,

      // ...commentsRules,
      // ...mochaRules,

      'extended/consistent-err-names': 'off',

      'tsdoc/syntax': 'off', //  Try to re-enable

      // CSS EXTRA
      // 'jsdoc/no-multi-asterisks': [ 'error', { allowWhitespace: true }],
      // 'node/prefer-global/buffer': 'off',
      // 'node/prefer-global/process': 'off',
    },
  },
  {
    // files: ALL_TS.map(ext => glob(ext)),
    files: [
      '**/*.ts',
      '**/*.tsx',
    ],
    rules: typescriptRules
  },
  {

    // Specific rules for bin files
    files: [ '**/bin/*.ts' ],
    rules: {
      'no-process-env': 'off',
      'unicorn/filename-case': [ 'error', {
        case: 'kebabCase',
      }],
      'unicorn/no-process-exit': 'off', // disabled in @rubensworks v2
    },
  },
  {
    /* Specific rules for test files */
    files: [ '**/test/**/*.ts' ],
    rules: {
      'arrow-body-style': 'off',
      'id-length': 'off',
      'line-comment-position': 'off',
      'no-inline-comments': 'off',
      'no-new': 'off',
      'no-return-assign': 'off',
      'no-sync': 'off',
      'no-useless-call': 'off',

      'import/no-extraneous-dependencies': 'off',

      'unicorn/filename-case': 'off',
      'unicorn/no-nested-ternary': 'off',

      '@stylistic/brace-style': 'off',
      '@stylistic/max-statements-per-line': 'off',
      '@stylistic/no-extra-parens': 'off',

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/require-array-sort-compare': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
];

export default flat;
