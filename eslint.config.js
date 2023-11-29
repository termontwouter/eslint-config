import configs from './dist/index.js';

const flat = [ 
  ... configs.map(config => ({ 
    ...config, 
    files: config.files?.map(glob => 'lib/**/'.concat(glob)) ?? [ 'lib/**/*' ] 
  })), 
  {
    files: [ 'lib/**/*' ],
    rules: {
      // Some code is commented out
      'capitalized-comments': 'off',
      // ESLint rules are kebab-case
      '@typescript-eslint/naming-convention': 'off',
      // Allow for consistency with dash/slash-containing rulenames
      '@typescript-eslint/dot-notation': 'off',
      'quote-props': 'off',
    }
  }
];

export default flat;
