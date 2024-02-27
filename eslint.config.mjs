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
      // Allow for comments next to rules
      'line-comment-position': 'off',
      // Allow for consistent access with often-dash/slash-containing rulenames
      '@typescript-eslint/dot-notation': 'off',
      // Allow for consistent definition of often-dash/slash-containing rulenames
      '@stylistic/quote-props': 'off',
      // ESLint rules are kebab-case
      '@typescript-eslint/naming-convention': 'off',
      // Prefer 'as' casting
      '@typescript-eslint/consistent-type-assertions': [ 'error', { assertionStyle: 'as' }],
    }
  }
];

export default flat;
