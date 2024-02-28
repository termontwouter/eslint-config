import type { Linter } from 'eslint';
import * as tsParser from '@typescript-eslint/parser';
import { languageOptions, linterOptions, settings } from './common.js';
import plugins from './plugins.js';
import { rules as commentsRules } from './rules/comments.js';
import { rules as coreRules } from './rules/core.js';
import { rules as importRules } from './rules/import.js';
import { rules as jestRules } from './rules/jest.js';
import { rules as jsdocRules, tsOverrides as jsdocTsRules } from './rules/jsdoc.js';
import { rules as nodeRules } from './rules/node.js';
import { rules as stylisticRules } from './rules/stylistic.js';
import { rules as typescriptRules } from './rules/typescript.js';
import { rules as unicornRules } from './rules/unicorn.js';
import { rules as unusedImportsRules } from './rules/unusedImports.js';

// eslint-flat-config-viewer

/**
 * Disabled due to conflicts:
 * - @stylistic/block-spacing (@stylistic/object-curly-spacing)
 *
 * Disabled/loosened in tests:
 * - id-length (comunica)
 * - no-new (comunica)
 * - no-return-assign (comunica)
 * - line-comment-position (comunica)
 * - arrow-body-style (comunica, componentsjs)
 * - unicorn/filename-case (comunica, componentsjs)
 * - unicorn/no-useless-undefined (css)
 * - unicorn/consistent-function-scoping (comunica, componentsjs)
 * - @stylistic/max-statements-per-line (comunica)
 * - @typescript-eslint/ban-ts-comment (comunica)
 * - @typescript-eslint/promise-function-async (comunica)
 * - @typescript-eslint/naming-convention (comunica)
 * - @typescript-eslint/unbound-method (all)
 *
 * Disabled due to trivial errors:
 * - @stylistic/no-extra-parens (css)
 * - @stylistic/no-mixed-operators (comunica)
 * - @stylistic/no-multiple-empty-lines (comunica, componentsjs)
 * - @stylistic/generator-star-spacing (comunica, componentsjs)
 * - @stylistic/yield-star-spacing (comunica, componentsjs)
 * - @stylistic/object-curly-spacing (css, componentsjs)
 * - @stylistic/space-before-blocks (comunica)
 * - @stylistic/type-generic-spacing (comunica)
 * - @typescript-eslint/no-unnecessary-type-arguments (css)
 * - @typescript-eslint/no-redeclare (componentsjs)
 * - consistent-this (css)
 * - no-fallthrough (componentsjs)
 * - no-implicit-coercion (componentsjs)
 * - no-restricted-globals (componentsjs)
 * - object-shorthand (comunica)
 * - unicorn/empty-brace-spaces (comunica, componentsjs)
 * - unicorn/no-lonely-if (componentsjs)
 * - unicorn/prefer-at (comunica, componentsjs)
 * - unicorn/prefer-includes (componentsjs)
 * - unicorn/prefer-node-protocol (comunica, componentsjs)
 * - unicorn/prefer-regexp-test (componentsjs)
 * - unicorn/prefer-spread (componentsjs)
 * - unicorn/prefer-type-error (comunica, componentsjs)
 * - unicorn/import-style (comunica, componentsjs)
 * - unicorn/no-negated-condition (comunica, componentsjs)
 * - unicorn/no-useless-promise-resolve-reject (comunica)
 * - jest/no-conditional-expect (comunica, componentsjs)
 * - jest/no-done-callback (comunica)
 * - jest/no-jasmine-globals (comunica)
 * - jest/no-mocks-import (comunica)
 * - jest/no-standalone-expect (comunica)
 * - jest/valid-expect (comunica)
 * - n/no-deprecated-api (comunica)
 * - n/no-unpublished-import (componentsjs)
 * - n/shebang (comunica, componentsjs)
 * - jsdoc/tag-lines (all)
 * - jsdoc/check-alignmentomunica)
 * - jsdoc/check-tag-names (all)
 * - jsdoc/check-param-names (comunica, componentsjs)
 * - jsdoc/no-multi-asterisks (css, componentsjs)
 * - jsdoc/require-param-name (componentsjs)
 * - jsdoc/require-param-description (all)
 * - jsdoc/require-returns-description (comunica)
 * - jsdoc/valid-types (css, comunica)
 *
 * Disabled due to minor errors:
 * - @typescript-eslint/consistent-type-definitions (css)
 * - @typescript-eslint/no-dynamic-delete (all, mostly comunica)
 * - @typescript-eslint/no-floating-promises (comunica)
 * - @typescript-eslint/no-invalid-void-type (comunica)
 * - @typescript-eslint/switch-exhaustiveness-check (comunica, componentsjs)
 * - @typescript-eslint/explicit-function-return-type (comunica, componentsjs)
 * - guard-for-in (comunica, componentsjs)
 * - no-async-promise-executor (comunica)
 * - unicorn/prefer-native-coercion-functions (comunica, componentsjs)
 * - unicorn/prefer-string-replace-all (comunica, componentsjs)
 * - unicorn/no-array-callback-reference (css, comunica)
 * - jest/expect-expect (css, comunica)
 * - jest/no-alias-methods (comunica, componentsjs)
 * - jest/prefer-to-have-length (comunica, componentsjs)
 * - n/callback-return (all)
 * - n/no-process-exit (all)
 * - n/global-require (all)
 * - n/no-path-concat (comunica, componentsjs)
 * - n/no-process-env (css, comunica)
 * - n/no-sync (all)
 * - jsdoc/require-jsdoc (all)
 *
 * Disabled due to major errors:
 * - @stylistic/indent-binary-ops (all, mostly comunica)
 * - @typescript-eslint/no-explicit-any (all)
 * - @typescript-eslint/no-non-null-assertion (all)
 * - @typescript-eslint/no-require-imports (css, componentsjs)
 * - @typescript-eslint/no-unused-vars (all)
 * - @typescript-eslint/no-var-requires (componentsjs)
 * - no-multi-assign (comunica)
 * - no-plusplus (comunica, componentsjs)
 * - unicorn/no-array-for-each (comunica, componentsjs)
 * - unicorn/no-array-method-this-argument (css)
 * - unicorn/no-array-reduce (comunica, componentsjs)
 * - jest/prefer-to-be (all)
 * - jest/no-test-return-statement (comunica)
 * - jest/require-top-level-describe (comunica)
 * - n/no-extraneous-import (all)
 * - n/no-extraneous-require (comunica, componentsjs)
 * - n/no-missing-import (all)
 * - jsdoc/require-param (all)
 * - jsdoc/require-returns (all)
 * - jsdoc/require-yields (all)
 * - jsdoc/no-types (all)
 *
 * Loosened due to major errors:
 * - @stylistic/arrow-parens (comunica, componentsjs)
 * - @typescript-eslint/promise-function-async (comunica, componentsjs)
 * - jest/valid-title (css, comunica)
 *
 * Loosened due to minor errors:
 * - @stylistic/brace-style (comunica)
 * - @stylistic/comma-dangle (comunica)
 * - @stylistic/quote-props (componentsjs)
 * - @typescript-eslint/ban-ts-comment (componentsjs)
 * - @typescript-eslint/no-misused-promises (comunica)
 * - @typescript-eslint/unbound-method (comunica)
 * - @typescript-eslint/unified-signatures (css)
 * - array-callback-return (comunica)
 * - yoda (comunica)
 *
 */

// antfu extra's: formaters, ignores, perfectionist, unoccs,
// (jsonc + sort, yarml, toml, markdown)
// (react,  vue, svelte)

// antfu specific rules
// 'antfu/import-dedupe': 'error',
// 'antfu/no-import-dist': 'error', // (not on bin)
// 'antfu/no-import-node-modules-by-path': 'error', // (not on bin)
// 'antfu/consistent-list-newline': 'error',
// 'antfu/if-newline': 'error',
// 'antfu/top-level-function': 'error',

const flat: Linter.FlatConfig[] = [
  // ignores: [ 'test/assets/*', '**/*.md/**/*.ts' ]
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
      ...nodeRules,
      ...jsdocRules,
      ...importRules,
      ...unusedImportsRules,
      ...stylisticRules,
      ...commentsRules,
      ...unicornRules,

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
    files: [ '**/*.ts', '**/*.tsx' ], // [ '**/*.ts' ]
    languageOptions: {
      // Cast because of minor typing differences (ReturnType<parseForESLint>.ast.comments can be undefined)
      parser: tsParser as Linter.ParserModule,
      parserOptions: {
        project: true, // antfu: configurable
        // tsconfigRootDir: process.cwd(), // antfu
      },
    },
    rules: {
      ...typescriptRules,
      ...jsdocTsRules,
    },
  },
  {
    /* Specific rules for test files */
    files: [ '**/test/**/*.ts' ], // [ 'test/**/*.ts' ] ['**/*.{test,spec}.ts?(x)']
    rules: {
      ...jestRules,

      '@stylistic/brace-style': 'off',
      '@stylistic/max-statements-per-line': [ 'error', { max: 2 }],
      '@typescript-eslint/ban-ts-comment': [ 'error', { 'ts-expect-error': false, 'ts-ignore': false }],
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'arrow-body-style': 'off',
      'id-length': 'off',
      'import/no-extraneous-dependencies': 'off',
      'line-comment-position': 'off',
      'no-new': 'off',
      'no-return-assign': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-useless-undefined': [ 'error', { 'checkArguments': false }],

      // Possibly enable but currently not triggered
      // '@stylistic/no-extra-parens': 'off',
      // '@typescript-eslint/ban-ts-ignore': 'off',
      // '@typescript-eslint/explicit-function-return-type': 'off',
      // '@typescript-eslint/require-array-sort-compare': 'off',
      // '@typescript-eslint/restrict-plus-operands': 'off',
      // 'no-inline-comments': 'off',
      // 'no-sync': 'off',
      // 'no-unused-expressions': 'off',
      // 'no-useless-call': 'off',
      // 'unicorn/no-nested-ternary': 'off',
    },
  },
  {
    // Specific rules for bin files
    files: [ '**/bin/*.ts' ], // [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`, '**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`]
    rules: {
      'no-process-env': 'off',
      'unicorn/filename-case': [ 'error', {
        case: 'kebabCase',
      }],
      'unicorn/no-process-exit': 'off', // disabled in @rubensworks v2
      // 'no-console': 'off',
      // 'antfu/no-import-dist': 'off',
      // 'antfu/no-import-node-modules-by-path': 'off',
    },
  },
];

export default flat;
