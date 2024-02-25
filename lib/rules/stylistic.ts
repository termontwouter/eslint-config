import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {

  // already in CSS
  '@stylistic/array-bracket-spacing': [ 'error', 'always', // same in css | antfu: never (no options)
    {
      singleValue: true,
      objectsInArrays: false,
      arraysInArrays: false,
    },
  ],
  '@stylistic/arrow-spacing': [ 'error', { before: true, after: true }], // also antfu
  '@stylistic/block-spacing': [ 'error', 'always' ], // also antfu | css: off (conflicts with object-curly-spacing)
  '@stylistic/brace-style': [ 'error', '1tbs', { // also css | antfu: 'error', 'stroustrup', { allowSingleLine: true }]
    allowSingleLine: false,
  }],
  '@stylistic/comma-spacing': [ 'error', { before: false, after: true }], // also in antfu
  '@stylistic/comma-style': [ 'error', 'last' ], // also in antfu
  '@stylistic/computed-property-spacing': [ 'error', 'never', { enforceForClassMembers: true }], // also in antfu
  '@stylistic/dot-location': [ 'error', 'property' ], // also antfu
  '@stylistic/function-call-argument-newline': [ 'error', 'consistent' ], // also css
  '@stylistic/function-paren-newline': [ 'error', 'consistent' ], // also css
  '@stylistic/indent-binary-ops': 'off', // (inconsistent in added indentation) | antfu: ['error', 2]
  '@stylistic/keyword-spacing': [ 'error', { before: true, after: true }], // also in antfu
  '@stylistic/linebreak-style': [ 'error', 'unix' ], // also css
  '@stylistic/lines-between-class-members': [ 'error', 'always', {
    exceptAfterSingleLine: true,
    exceptAfterOverload: true,
  }],
  '@stylistic/member-delimiter-style': [ 'error', { // also in css
    multiline: { delimiter: 'semi', requireLast: true },
    singleline: { delimiter: 'semi', requireLast: false },
  }], // antfu:
  // ['error', {
  //   multiline: {
  //     delimiter: 'none',
  //     requireLast: false,
  //   },
  //   multilineDetection: 'brackets',
  //   overrides: {
  //     interface: {
  //       multiline: {
  //         delimiter: 'none',
  //         requireLast: false,
  //       },
  //     },
  //   },
  //   singleline: {
  //     delimiter: 'comma',
  //   },
  // }],
  '@stylistic/no-whitespace-before-property': [ 'error' ], // also antfu
  '@stylistic/operator-linebreak': [ 'error', 'after' ], // also css | antfu: before
  '@stylistic/quotes': [ 'error', 'single', { avoidEscape: false, allowTemplateLiterals: true }], // also in antfu
  '@stylistic/rest-spread-spacing': [ 'error', 'never' ], // also in antfu
  '@stylistic/semi-spacing': [ 'error', { before: false, after: true }], // also in antfu
  '@stylistic/semi-style': [ 'error', 'last' ], // also in css
  '@stylistic/space-before-function-paren': [ 'error', 'never' ], // antfu anonymous/asyncArrow 'always', named 'never'
  '@stylistic/space-in-parens': [ 'error', 'never' ], // also in antfu
  '@stylistic/space-unary-ops': [ 'error', { words: true, nonwords: false }], // also in antfu
  '@stylistic/template-tag-spacing': [ 'error', 'never' ], // also in antfu

  // enabled without issues
  '@stylistic/max-statements-per-line': [ 'error', { max: 1 }],
  '@stylistic/multiline-ternary': [ 'error', 'always-multiline' ],
  '@stylistic/new-parens': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-tabs': 'error',
  '@stylistic/type-named-tuple-spacing': 'error',

  // enabled with minor errors
  // '@stylistic/comma-dangle': [ 'error', 'always-multiline' ], // errors in comunica
  // '@stylistic/object-curly-spacing': [ 'error', 'always', { // (antfu: no options)
  //   objectsInObjects: false,
  //   arraysInObjects: false,
  // }],
  // '@stylistic/no-mixed-operators': [ 'error', { // errors in comunica
  //   allowSamePrecedence: true,
  //   groups: [
  //     [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
  //     [ '&&', '||' ],
  //     [ 'in', 'instanceof' ],
  //   ],
  // }],
  // '@stylistic/no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  // '@stylistic/space-before-blocks': [ 'error', 'always' ], // errors in comunica
  // '@stylistic/type-generic-spacing': 'error', // errors in comunica

  // absent/different in CSS
  '@stylistic/arrow-parens': [ 'error', 'as-needed', {
    requireForBlockBody: false, // antfu: true
  }],
  '@stylistic/eol-last': [ 'error', 'always' ], // antfu: no always
  '@stylistic/func-call-spacing': [ 'error', 'never' ],
  '@stylistic/generator-star-spacing': [ 'error', {
    before: true, // css: false
    after: true,
  }],
  '@stylistic/indent': [ 'error', 2, { // rubensworks | errors in comunica
    SwitchCase: 1,
    VariableDeclarator: { var: 2, let: 2, const: 3 }, // antfu: 1 (no options)
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    // offsetTernaryExpressions: true, // antfu
    ignoreComments: false,
    ignoredNodes: [ // antfu
      // 'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
      // 'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
      // 'FunctionExpression > .params[decorators.length > 0]',
      // 'JSXAttribute',
      // 'JSXClosingElement',
      // 'JSXClosingFragment',
      // 'JSXElement > *',
      // 'JSXElement',
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
      // 'TemplateLiteral *',
      // 'TSIntersectionType',
      // 'TSTypeParameterInstantiation',
      'TSTypeReference', // fix for comunica ??
      // 'TSUnionType',
    ],
  }],
  '@stylistic/key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'strict' }], // antfu: no mode
  '@stylistic/lines-around-comment': [ 'error', {
    beforeBlockComment: false,
    afterBlockComment: false,
    beforeLineComment: false, // thenativeweb: true
    afterLineComment: false,
    /* thenativeweb only */
    // allowBlockStart: true,
    // allowBlockEnd: true,
    // allowObjectStart: true,
    // allowObjectEnd: true,
    // allowArrayStart: true,
    // allowArrayEnd: true,
    // allowClassStart: true,
    // allowClassEnd: true,
    // applyDefaultIgnorePatterns: true,
  }],
  '@stylistic/max-len': [ 'error', { // errors in comunica
    code: 120,
    ignoreTemplateLiterals: true,
    ignoreComments: true, // fix for comunica ??
    // ignoreUrls: true, // css
  }],
  '@stylistic/no-extra-parens': [ 'error', 'all', { // antfu: functions (no options) | errors in comunica
    conditionalAssign: false,
    enforceForArrowConditionals: false,
    ignoreJSX: 'all',
    nestedBinaryExpressions: false,
    returnAssign: false,
  }],
  '@stylistic/no-extra-semi': [ 'error' ],
  '@stylistic/no-trailing-spaces': [ 'error', { // antfu: no options
    ignoreComments: false,
    skipBlankLines: false,
  }],
  '@stylistic/object-curly-newline': [ 'error', {
    ObjectExpression: { consistent: true },
    ObjectPattern: { consistent: true },
    ImportDeclaration: { consistent: true },
    ExportDeclaration: { consistent: true },
  }],
  '@stylistic/one-var-declaration-per-line': [ 'error', 'always' ],
  '@stylistic/padded-blocks': [ 'error', 'never', { // antfu: extra option instead of never
    //   blocks: 'never',
    //   classes: 'never',
    //   switches: 'never',
    // }, {
    allowSingleLineBlocks: true, // not in antfu
  }],
  '@stylistic/padding-line-between-statements': [ 'off', // thenativeweb:
    // { blankLine: 'always', prev: '*', next: 'return' },
    // { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
    // { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ]},
    // { blankLine: 'always', prev: 'directive', next: '*' },
    // { blankLine: 'any', prev: 'directive', next: 'directive' },
  ],
  // '@stylistic/quote-props': [ 'error', 'as-needed', { // ERRORS -> switch to consistent(-as-needed) ?
  //   keywords: false, unnecessary: true, numbers: false,
  // }], // also in css | antfu: consistent-as-needed (no options)
  '@stylistic/semi': [ 'error', 'always', { // also in css (no options) | antfu: never (no options)
    omitLastInOneLineBlock: false,
  }],
  '@stylistic/space-infix-ops': [ 'error', { int32Hint: false }], // antfu: no options
  '@stylistic/spaced-comment': [ 'error', 'always', { exceptions: [ 'error' ], markers: []}], // antfu:
  // ['error', 'always', {
  //   block: {
  //     balanced: true,
  //     exceptions: ['*'],
  //     markers: ['!'],
  //   },
  //   line: {
  //     exceptions: ['/', '#'],
  //     markers: ['/'],
  //   },
  // }],
  '@stylistic/switch-colon-spacing': [ 'error', { after: true, before: false }], // css: no options
  '@stylistic/template-curly-spacing': [ 'error', 'never' ], // antfu: no never
  '@stylistic/type-annotation-spacing': [ 'error', { // antfu: empty options
    before: false,
    after: true,
    overrides: { arrow: { before: true, after: true }},
  }],
  '@stylistic/wrap-iife': [ 'error', 'inside', { // antfu: any (same options)
    functionPrototypeMethods: true,
  }],
  '@stylistic/yield-star-spacing': [ 'error', { // css: after (no options) | antfu: both (no options)
    before: true,
    after: true,
  }],

  // OFF
  // '@stylistic/array-bracket-newline': 'off',
  // '@stylistic/array-element-newline': 'off',
  // '@stylistic/function-call-spacing'
  // '@stylistic/implicit-arrow-linebreak': 'off',
  // '@stylistic/newline-per-chained-call'
  // '@stylistic/no-confusing-arrow'
  // '@stylistic/nonblock-statement-body-position'
  // '@stylistic/wrap-regex': 'off',

  /* JSX */

  // enable
  // '@stylistic/jsx-child-element-spacing'
  // '@stylistic/jsx-closing-bracket-location': 'error', // antfu
  // '@stylistic/jsx-closing-tag-location': 'error', // antfu
  // '@stylistic/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }], // antfu
  // '@stylistic/jsx-curly-newline': 'error', // antfu
  // '@stylistic/jsx-curly-spacing': ['error', 'never'], // antfu
  // '@stylistic/jsx-equals-spacing': 'error', // antfu
  // '@stylistic/jsx-first-prop-new-line': 'error', // antfu
  // '@stylistic/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }], // antfu
  // '@stylistic/jsx-indent-props': ['error', 2], // antfu
  // '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }], // antfu
  // '@stylistic/jsx-newline'
  // '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }], // antfu
  // '@stylistic/jsx-props-no-multi-spaces'
  // '@stylistic/jsx-quotes': 'error' // antfu
  // '@stylistic/jsx-self-closing-comp'
  // '@stylistic/jsx-sort-props'
  // '@stylistic/jsx-tag-spacing': [ // antfu
  //   'error',
  //   {
  //     afterOpening: 'never',
  //     beforeClosing: 'never',
  //     beforeSelfClosing: 'always',
  //     closingSlash: 'never',
  //   },
  // ],
  // '@stylistic/jsx-wrap-multilines': [ // antfu
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
};
