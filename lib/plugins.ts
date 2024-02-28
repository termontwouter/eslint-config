import type { ESLint } from 'eslint';
import pluginComments from 'eslint-plugin-eslint-comments';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import pluginJsdoc from 'eslint-plugin-jsdoc';
import pluginNode from 'eslint-plugin-n';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginTsdoc from 'eslint-plugin-tsdoc';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

const plugins: Record<string, ESLint.Plugin> = {
  '@stylistic': { rules: pluginStylistic.rules },
  '@typescript-eslint': ({ rules: pluginTypescript.rules } as unknown) as ESLint.Plugin,
  'eslint-comments': { rules: pluginComments.rules },
  'import': { rules: pluginImport.rules },
  'jest': { rules: pluginJest.rules },
  'jsdoc': { rules: pluginJsdoc.rules },
  'n': { rules: pluginNode.rules },
  'perfectionist': { rules: pluginPerfectionist.rules },
  'tsdoc': { rules: pluginTsdoc.rules },
  'unicorn': { rules: pluginUnicorn.rules },
  'unused-imports': { rules: pluginUnusedImports.rules },
};

export default plugins;
