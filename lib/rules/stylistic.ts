import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {
  '@stylistic/array-bracket-newline': 'off',
  '@stylistic/array-bracket-spacing': [ 'error', 'always',
    { singleValue: true, objectsInArrays: false, arraysInArrays: false },
  ],
  '@stylistic/array-element-newline': 'off',
  '@stylistic/arrow-parens': [ 'error', 'as-needed', { requireForBlockBody: false }],
  '@stylistic/arrow-spacing': [ 'error', { before: true, after: true }],
  '@stylistic/block-spacing': [ 'error', 'always' ],
  '@stylistic/brace-style': [ 'error', '1tbs', { allowSingleLine: false }],
  '@stylistic/comma-dangle': [ 'error', 'never' ],
  '@stylistic/comma-spacing': [ 'error', { before: false, after: true }],
  '@stylistic/comma-style': [ 'error', 'last' ],
  '@stylistic/computed-property-spacing': [ 'error', 'never', { enforceForClassMembers: true }],
  '@stylistic/dot-location': [ 'error', 'object' ],
  '@stylistic/eol-last': [ 'error', 'always' ],
  '@stylistic/func-call-spacing': [ 'error', 'never' ],
  '@stylistic/function-call-argument-newline': [ 'error', 'consistent' ],
  // '@stylistic/function-call-spacing'
  '@stylistic/function-paren-newline': [ 'error', 'consistent' ],
  '@stylistic/generator-star-spacing': [ 'error', { before: true, after: true }],
  '@stylistic/implicit-arrow-linebreak': 'off',
  '@stylistic/indent': [ 'error', 2, {
    SwitchCase: 1,
    VariableDeclarator: { var: 2, let: 2, const: 3 },
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoredNodes: [
      'error',
      // 'JSXAttribute',
      // 'JSXClosingElement',
      // 'JSXClosingFragment',
      // 'JSXElement',
      // 'JSXElement > *',
      // 'JSXEmptyExpression',
      // 'JSXExpressionContainer',
      // 'JSXFragment',
      // 'JSXIdentifier',
      // 'JSXMemberExpression',
      // 'JSXNamespacedName',
      // 'JSXOpeningElement',
      // 'JSXOpeningFragment',
      // 'JSXSpreadAttribute',
      // 'JSXSpreadChild',
      // 'JSXText',
    ],
    ignoreComments: false,
  }],
  // '@stylistic/jsx-child-element-spacing'
  // '@stylistic/jsx-closing-bracket-location'
  // '@stylistic/jsx-closing-tag-location'
  // '@stylistic/jsx-curly-brace-presence'
  // '@stylistic/jsx-curly-newline'
  // '@stylistic/jsx-curly-spacing'
  // '@stylistic/jsx-equals-spacing'
  // '@stylistic/jsx-first-prop-new-line'
  // '@stylistic/jsx-indent'
  // '@stylistic/jsx-indent-props'
  // '@stylistic/jsx-max-props-per-line'
  // '@stylistic/jsx-newline'
  // '@stylistic/jsx-one-expression-per-line'
  // '@stylistic/jsx-props-no-multi-spaces'
  // '@stylistic/jsx-quotes'
  // '@stylistic/jsx-self-closing-comp'
  // '@stylistic/jsx-sort-props'
  // '@stylistic/jsx-tag-spacing'
  // '@stylistic/jsx-wrap-multilines'
  '@stylistic/key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'strict' }],
  '@stylistic/keyword-spacing': [ 'error', { before: true, after: true }],
  '@stylistic/linebreak-style': [ 'error', 'unix' ],
  '@stylistic/lines-around-comment': [ 'error', {
    beforeBlockComment: false,
    afterBlockComment: false,
    beforeLineComment: true,
    afterLineComment: false,
    allowBlockStart: true,
    allowBlockEnd: true,
    allowObjectStart: true,
    allowObjectEnd: true,
    allowArrayStart: true,
    allowArrayEnd: true,
    allowClassStart: true,
    allowClassEnd: true,
    applyDefaultIgnorePatterns: true,
  }],
  '@stylistic/lines-between-class-members': [ 'error', 'always', {
    exceptAfterOverload: false,
  }],
  // '@stylistic/max-len'
  // '@stylistic/max-statements-per-line'
  '@stylistic/member-delimiter-style': [ 'error', {
    multiline: { delimiter: 'semi', requireLast: true },
    singleline: { delimiter: 'semi', requireLast: false },
  }],
  // '@stylistic/multiline-ternary'
  // '@stylistic/new-parens'
  // '@stylistic/newline-per-chained-call'
  // '@stylistic/no-confusing-arrow'
  '@stylistic/no-extra-parens': [ 'error', 'all', {
    conditionalAssign: false,
    enforceForArrowConditionals: false,

    ignoreJSX: 'all',
    nestedBinaryExpressions: false,
    returnAssign: false,
  }],
  '@stylistic/no-extra-semi': [ 'error' ],
  // '@stylistic/no-floating-decimal'
  // '@stylistic/no-mixed-operators'
  // '@stylistic/no-mixed-spaces-and-tabs'
  // '@stylistic/no-multi-spaces'
  // '@stylistic/no-multiple-empty-lines'
  // '@stylistic/no-tabs'
  '@stylistic/no-trailing-spaces': [ 'error', { ignoreComments: false, skipBlankLines: false }],
  '@stylistic/no-whitespace-before-property': [ 'error' ],
  // '@stylistic/nonblock-statement-body-position'
  '@stylistic/object-curly-newline': [ 'error', {
    ObjectExpression: { consistent: true },
    ObjectPattern: { consistent: true },
    ImportDeclaration: { consistent: true },
    ExportDeclaration: { consistent: true },
  }],
  '@stylistic/object-curly-spacing': [ 'error', 'always', { objectsInObjects: false, arraysInObjects: false }],
  '@stylistic/one-var-declaration-per-line': [ 'error', 'always' ],
  '@stylistic/operator-linebreak': [ 'error', 'after' ],
  '@stylistic/padded-blocks': [ 'error', 'never', { allowSingleLineBlocks: true }],
  '@stylistic/padding-line-between-statements': [ 'error',
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
    { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ]},
    { blankLine: 'always', prev: 'directive', next: '*' },
    { blankLine: 'any', prev: 'directive', next: 'directive' },
  ],
  '@stylistic/quote-props': [ 'error', 'as-needed', {
    keywords: false, unnecessary: true, numbers: false,
  }],
  '@stylistic/quotes': [ 'error', 'single', { avoidEscape: false, allowTemplateLiterals: true }],
  '@stylistic/rest-spread-spacing': [ 'error', 'never' ],
  '@stylistic/semi': [ 'error', 'always', { omitLastInOneLineBlock: false }],
  '@stylistic/semi-spacing': [ 'error', { before: false, after: true }],
  '@stylistic/semi-style': [ 'error', 'last' ],
  '@stylistic/space-before-blocks': [ 'error', 'always' ],
  '@stylistic/space-before-function-paren': [ 'error', 'always' ],
  '@stylistic/space-in-parens': [ 'error', 'never' ],
  '@stylistic/space-infix-ops': [ 'error', { int32Hint: false }],
  '@stylistic/space-unary-ops': [ 'error', { words: true, nonwords: false }],
  '@stylistic/spaced-comment': [ 'error', 'always', { exceptions: [ 'error' ], markers: []}],
  '@stylistic/switch-colon-spacing': [ 'error', { after: true, before: false }],
  '@stylistic/template-curly-spacing': [ 'error', 'never' ],
  '@stylistic/template-tag-spacing': [ 'error', 'never' ],
  '@stylistic/type-annotation-spacing': [ 'error', {
    before: false,
    after: true,
    overrides: { arrow: { before: true, after: true }},
  }],
  '@stylistic/wrap-iife': [ 'error', 'inside', { functionPrototypeMethods: true }],
  '@stylistic/wrap-regex': 'off',
  '@stylistic/yield-star-spacing': [ 'error', { before: true, after: true }],
};
