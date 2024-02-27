import type { Linter } from 'eslint';

const jsxNodes = [
  'JSXAttribute',
  'JSXClosingElement',
  'JSXClosingFragment',
  'JSXElement > *',
  'JSXElement',
  'JSXEmptyExpression',
  'JSXExpressionContainer',
  'JSXFragment',
  'JSXIdentifier',
  'JSXMemberExpression',
  'JSXNamespacedName',
  'JSXOpeningElement',
  'JSXOpeningFragment',
  'JSXSpreadAttribute',
  'JSXSpreadChild',
  'JSXText',
] as const;

const indentIgnoredNodes = [
  // ... jsxNodes
  'TSTypeReference', // fix for comunica ?? ===> errors in componentsjs
  'ConditionalExpression', // fix for css ??
  // 'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
  // 'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
  // 'FunctionExpression > .params[decorators.length > 0]',
] as const;

export const rules: Linter.RulesRecord = {

  '@stylistic/array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false, arraysInArrays: false }], // different
  '@stylistic/arrow-spacing': 'error',
  // '@stylistic/block-spacing': 'error', // conflicts with @stylistic/object-curly-spacing
  '@stylistic/brace-style': [ 'error', '1tbs', { 'allowSingleLine': true }], // looser (comunica tests)
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': 'error',
  '@stylistic/computed-property-spacing': 'error',
  '@stylistic/dot-location': [ 'error', 'property' ], // different
  '@stylistic/function-call-argument-newline': [ 'error', 'consistent' ], // different
  '@stylistic/function-paren-newline': [ 'error', 'consistent' ], // different
  '@stylistic/keyword-spacing': 'error',
  '@stylistic/linebreak-style': 'error',
  '@stylistic/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true }], // looser
  '@stylistic/member-delimiter-style': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/operator-linebreak': [ 'error', 'after', { overrides: {}}], // different
  '@stylistic/quotes': [ 'error', 'single', { allowTemplateLiterals: true }], // different
  '@stylistic/rest-spread-spacing': 'error',
  '@stylistic/semi-spacing': 'error',
  '@stylistic/semi-style': 'error',
  '@stylistic/space-before-function-paren': [ 'error', 'never' ], // different
  '@stylistic/space-in-parens': 'error',
  '@stylistic/space-unary-ops': 'error',
  '@stylistic/template-tag-spacing': 'error',
  '@stylistic/max-statements-per-line': 'error',
  '@stylistic/multiline-ternary': [ 'error', 'always-multiline' ], // different
  '@stylistic/new-parens': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-tabs': 'error',
  '@stylistic/type-named-tuple-spacing': 'error',
  '@stylistic/arrow-parens': [ 'error', 'as-needed' ], // different
  '@stylistic/eol-last': 'error',
  '@stylistic/function-call-spacing': 'error',
  '@stylistic/key-spacing': 'error',
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/object-curly-newline': 'error',
  '@stylistic/one-var-declaration-per-line': [ 'error', 'always' ], // stricter
  '@stylistic/padded-blocks': [ 'error', 'never' ], // different
  '@stylistic/semi': 'error',
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/spaced-comment': [ 'error', 'always' ],
  '@stylistic/switch-colon-spacing': 'error',
  '@stylistic/template-curly-spacing': 'error',
  '@stylistic/type-annotation-spacing': 'error',
  '@stylistic/wrap-iife': [ 'error', 'inside', { functionPrototypeMethods: true }], // different
  '@stylistic/comma-dangle': [ 'error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
    enums: 'always-multiline',
    tuples: 'always-multiline',
    generics: 'only-multiline',
  }], // different

  '@stylistic/quote-props': [ 'error', 'as-needed', { unnecessary: false }], // looser (componentsjs)
  '@stylistic/max-len': [ 'error', { // looser (css, comunica)
    code: 120,
    ignoreTemplateLiterals: true,
    ignoreComments: true, // fix for comunica
    ignoreUrls: true, // for css
  }],

  // trivial errors
  // '@stylistic/no-mixed-operators': 'error', // (comunica)
  // '@stylistic/space-before-blocks': [ 'error', 'always' ], // (comunica)
  // '@stylistic/no-multiple-empty-lines': [ 'error', { max: 1 } ], // stricter | (comunica, componentsjs)
  // '@stylistic/type-generic-spacing': 'error', // (comunica)
  // '@stylistic/object-curly-spacing': [ 'error', 'always', { objectsInObjects: false, arraysInObjects: false }], // (componentsjs)
  // '@stylistic/generator-star-spacing': [ 'error', { before: false, after: true }], // (comunica, componentsjs)
  // '@stylistic/yield-star-spacing': [ 'error', { before: false, after: true }], // (comunica, componentsjs)
  // '@stylistic/no-extra-parens': [ 'error', 'all', { nestedBinaryExpressions: false }], // looser (css)

  // '@stylistic/indent': [ 'error', 2, { // trivial errors (css, comunica)
  //   SwitchCase: 1,
  //   VariableDeclarator: { var: 2, let: 2, const: 3 },
  //   outerIIFEBody: 1,
  //   MemberExpression: 1,
  //   FunctionDeclaration: { parameters: 1, body: 1 },
  //   FunctionExpression: { parameters: 1, body: 1 },
  //   CallExpression: { arguments: 1 },
  //   ArrayExpression: 1,
  //   ObjectExpression: 1,
  //   ImportDeclaration: 1,
  //   flatTernaryExpressions: false,
  //   ignoreComments: false,
  //   ignoredNodes: indentIgnoredNodes,
  //   // offsetTernaryExpressions: true, // css
  // }],

  // major errors
  // '@stylistic/indent-binary-ops': 'error', // (all, mostly comunica) | inconsistent in added indentation ?

  /* OFF */

  // '@stylistic/padding-line-between-statements': 'error',
  // '@stylistic/lines-around-comment': 'error',
  // '@stylistic/array-bracket-newline': 'error',
  // '@stylistic/array-element-newline': 'error',
  // '@stylistic/function-call-spacing': 'error',
  // '@stylistic/implicit-arrow-linebreak': 'error',
  // '@stylistic/no-multi-spaces': 'error', // lots of errors in CSS
  // '@stylistic/newline-per-chained-call': 'error',
  // '@stylistic/no-confusing-arrow': 'error',
  // '@stylistic/nonblock-statement-body-position': 'error',
  // '@stylistic/wrap-regex': 'error',

  /* JSX */

  // '@stylistic/jsx-child-element-spacing'
  // '@stylistic/jsx-closing-bracket-location': 'error',
  // '@stylistic/jsx-closing-tag-location': 'error',
  // '@stylistic/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
  // '@stylistic/jsx-curly-newline': 'error',
  // '@stylistic/jsx-curly-spacing': ['error', 'never'],
  // '@stylistic/jsx-equals-spacing': 'error',
  // '@stylistic/jsx-first-prop-new-line': 'error',
  // '@stylistic/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
  // '@stylistic/jsx-indent-props': ['error', 2],
  // '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
  // '@stylistic/jsx-newline'
  // '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  // '@stylistic/jsx-props-no-multi-spaces'
  // '@stylistic/jsx-quotes': 'error'
  // '@stylistic/jsx-self-closing-comp'
  // '@stylistic/jsx-sort-props'
  // '@stylistic/jsx-tag-spacing': [
  //   'error',
  //   {
  //     afterOpening: 'never',
  //     beforeClosing: 'never',
  //     beforeSelfClosing: 'always',
  //     closingSlash: 'never',
  //   },
  // ],
  // '@stylistic/jsx-wrap-multilines': [
  //   'error',
  //   {
  //     arrow: 'parens-new-line',
  //     assignment: 'parens-new-line',
  //     condition: 'parens-new-line',
  //     declaration: 'parens-new-line',
  //     logical: 'parens-new-line',
  //     prop: 'parens-new-line',
  //     return: 'parens-new-line',
  //   },
  // ],

  /* DEPRECATED */

  '@stylistic/func-call-spacing': 'off', // -> @stylistic/function-call-spacing

  /* DISABLE LEGACY */

  'array-bracket-newline': 'off',
  'array-bracket-spacing': 'off',
  'array-element-newline': 'off',
  'arrow-parens': 'off',
  'arrow-spacing': 'off',
  'block-spacing': 'off',
  'brace-style': 'off',
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'comma-style': 'off',
  'computed-property-spacing': 'off',
  'dot-location': 'off',
  'eol-last': 'off',
  'func-call-spacing': 'off',
  'function-call-argument-newline': 'off',
  'function-paren-newline': 'off',
  'generator-star-spacing': 'off',
  'implicit-arrow-linebreak': 'off',
  'indent': 'off',
  'jsx-quotes': 'off',
  'key-spacing': 'off',
  'keyword-spacing': 'off',
  'linebreak-style': 'off',
  'lines-around-comment': 'off',
  'lines-between-class-members': 'off',
  'max-len': 'off',
  'max-statements-per-line': 'off',
  'multiline-ternary': 'off',
  'new-parens': 'off',
  'newline-per-chained-call': 'off',
  'no-confusing-arrow': 'off',
  'no-extra-parens': 'off',
  'no-extra-semi': 'off',
  'no-floating-decimal': 'off',
  'no-mixed-operators': 'off',
  'no-mixed-spaces-and-tabs': 'off',
  'no-multi-spaces': 'off',
  'no-multiple-empty-lines': 'off',
  'no-tabs': 'off',
  'no-trailing-spaces': 'off',
  'no-whitespace-before-property': 'off',
  'nonblock-statement-body-position': 'off',
  'object-curly-newline': 'off',
  'object-curly-spacing': 'off',
  'object-property-newline': 'off',
  'one-var-declaration-per-line': 'off',
  'operator-linebreak': 'off',
  'padded-blocks': 'off',
  'padding-line-between-statements': 'off',
  'quote-props': 'off',
  'quotes': 'off',
  'rest-spread-spacing': 'off',
  'semi': 'off',
  'semi-spacing': 'off',
  'semi-style': 'off',
  'space-before-blocks': 'off',
  'space-before-function-paren': 'off',
  'space-in-parens': 'off',
  'space-infix-ops': 'off',
  'space-unary-ops': 'off',
  'spaced-comment': 'off',
  'switch-colon-spacing': 'off',
  'template-curly-spacing': 'off',
  'template-tag-spacing': 'off',
  'wrap-iife': 'off',
  'wrap-regex': 'off',
  'yield-star-spacing': 'off',
  '@typescript-eslint/block-spacing': 'off',
  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/comma-spacing': 'off',
  '@typescript-eslint/func-call-spacing': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/key-spacing': 'off',
  '@typescript-eslint/keyword-spacing': 'off',
  '@typescript-eslint/lines-around-comment': 'off',
  '@typescript-eslint/lines-between-class-members': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/no-extra-semi': 'off',
  '@typescript-eslint/object-curly-spacing': 'off',
  '@typescript-eslint/padding-line-between-statements': 'off',
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/semi': 'off',
  '@typescript-eslint/space-before-blocks': 'off',
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/space-infix-ops': 'off',
  '@typescript-eslint/type-annotation-spacing': 'off',
  'react/jsx-child-element-spacing': 'off',
  'react/jsx-closing-bracket-location': 'off',
  'react/jsx-closing-tag-location': 'off',
  'react/jsx-curly-brace-presence': 'off',
  'react/jsx-curly-newline': 'off',
  'react/jsx-curly-spacing': 'off',
  'react/jsx-equals-spacing': 'off',
  'react/jsx-first-prop-new-line': 'off',
  'react/jsx-indent': 'off',
  'react/jsx-indent-props': 'off',
  'react/jsx-max-props-per-line': 'off',
  'react/jsx-newline': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-multi-spaces': 'off',
  'react/jsx-self-closing-comp': 'off',
  'react/jsx-sort-props': 'off',
  'react/jsx-tag-spacing': 'off',
  'react/jsx-wrap-multilines': 'off',
};
