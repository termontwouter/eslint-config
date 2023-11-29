

import type { Linter } from 'eslint';
import rubensworks from './rubensworks.js';
import thenativeweb from './thenativeweb.js';

const configs: Linter.FlatConfig[] = [
  ...thenativeweb,
  ...rubensworks,
];

export default configs;


