/* eslint-disable import/no-commonjs, import/no-import-module-exports */

import type { Linter } from 'eslint';
import { config as rubensworks } from './rubensworks';
import { config as thenativeweb } from './thenativeweb';

// In ESLint v9, switch to ESM and the following export
// const config: Linter.Config[] = [ thenativeweb, rubensworks ];

const config: Linter.Config = {
  extends: [ ...new Set([ ...thenativeweb.extends ?? [], ...rubensworks.extends ?? [] ]) ],
  root: rubensworks.root,
  parser: rubensworks.parser,
  parserOptions: Object.assign(thenativeweb.parserOptions ?? {}, rubensworks.parserOptions ?? {}),
  env: Object.assign(thenativeweb.env ?? {}, rubensworks.env ?? {}),
  globals: Object.assign(thenativeweb.globals ?? {}, rubensworks.globals ?? {}),
  plugins: [ ...new Set([ ...thenativeweb.plugins ?? [], ...rubensworks.plugins ?? [] ]) ],
  settings: Object.assign(thenativeweb.settings ?? {}, rubensworks.settings ?? {}),
  rules: Object.assign(thenativeweb.rules ?? {}, rubensworks.rules ?? {}),
  overrides: [ ...new Set([ ...thenativeweb.overrides ?? [], ...rubensworks.overrides ?? [] ]) ],
};

module.exports = config;

/* eslint-enable */
