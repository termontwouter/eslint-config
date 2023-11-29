import type { Linter } from 'eslint';
import pluginImport from 'eslint-plugin-import';

const configs: Record<string, Linter.Config > = {
  'import/errors': { rules: pluginImport.configs['errors'].rules },
  'import/warnings': { rules: pluginImport.configs['warnings'].rules },
  'import/typescript': { rules: pluginImport.configs['typescript'].rules },
};

export default configs;
