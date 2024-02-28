import pluginStylistic from '@stylistic/eslint-plugin';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import type { ESLint } from 'eslint';
import pluginComments from 'eslint-plugin-eslint-comments';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import pluginNode from 'eslint-plugin-n';
import pluginTsdoc from 'eslint-plugin-tsdoc';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

const plugins: Record<string, ESLint.Plugin> = {
  'eslint-comments': { rules: pluginComments.rules },
  'import': { rules: pluginImport.rules },
  'jest': { rules: pluginJest.rules },
  'n': { rules: pluginNode.rules },
  'tsdoc': { rules: pluginTsdoc.rules },
  '@typescript-eslint': ({ rules: pluginTypescript.rules } as unknown) as ESLint.Plugin,
  'unicorn': { rules: pluginUnicorn.rules },
  'unused-imports': { rules: pluginUnusedImports.rules },
  '@stylistic': { rules: pluginStylistic.rules },
};

export default plugins;
