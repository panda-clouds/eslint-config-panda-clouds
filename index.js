module.exports = {
	extends: 'eslint:recommended',
	globals: {
		Parse: 'readonly',
	},
	env: {
		'node': true,
		'jest/globals': true,
	},
	parserOptions: {
		ecmaVersion: 9,
		sourceType: 'module',
	},
	plugins: ['jest'],
	rules: {
		// jest Plugin
		'jest/consistent-test-it': 2,
		'jest/expect-expect': 2,
		'jest/lowercase-name': 2,
		'jest/no-alias-methods': 2,
		'jest/no-disabled-tests': process.env.NODE_ENV === 'production' ? 2 : 1,
		'jest/no-focused-tests': process.env.NODE_ENV === 'production' ? 2 : 1,
		'jest/no-hooks': 2,
		'jest/no-identical-title': 2,
		'jest/no-jasmine-globals': 2,
		'jest/no-jest-import': 2,
		'jest/no-large-snapshots': 2,
		'jest/no-test-callback': 0, // this doesn't allow done 
		'jest/no-test-prefixes': 0, // fit and xit are ok
		'jest/no-test-return-statement': 2,
		'jest/no-truthy-falsy': 2,
		'jest/prefer-expect-assertions': 2,
		'jest/prefer-spy-on': 2,
		'jest/prefer-strict-equal': 2,
		'jest/prefer-to-be-null': 2,
		'jest/prefer-to-be-undefined': 2,
		'jest/prefer-to-contain': 2,
		'jest/prefer-to-have-length': 2,
		'jest/prefer-inline-snapshots': 2,
		'jest/require-tothrow-message': 2,
		'jest/valid-describe': 0, // this doesn't allow paramters in test name 
		'jest/valid-expect-in-promise': 2,
		'jest/valid-expect': 2,
		'jest/prefer-todo': 2,
		'jest/prefer-called-with': 2,

		// Standard
		'indent': [2, 'tab', { SwitchCase: 1 }],
		'linebreak-style': [2, 'unix'],
		'no-trailing-spaces': 2,
		'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1, maxBOF: 1 }],
		'no-return-await': 2,
		'require-await': 2,
		'comma-dangle': [2, 'always-multiline'],
		'no-cond-assign': [2, 'always'],
		'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': 0,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': [2, 'both'],
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 2,
		'no-unreachable': 2,
		'use-isnan': 2,
		'valid-jsdoc': 2,
		'valid-typeof': 2,
		'no-unexpected-multiline': 2,
		'accessor-pairs': [
			2,
			{
				getWithoutSet: true,
				setWithoutGet: true,
			},
		],
		'block-scoped-var': 2,
		'complexity': 0,
		'consistent-return': 2,
		'curly': [2, 'all'],
		'default-case': 0,
		'dot-notation': 2,
		'dot-location': [2, 'property'],
		'eqeqeq': [2, 'smart'],
		'guard-for-in': 2,
		'no-alert': process.env.NODE_ENV === 'production' ? 2 : 1,
		'no-caller': 2,
		'no-div-regex': 2,
		'no-else-return': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-implicit-coercion': [
			2,
			{
				boolean: true,
				number: true,
				string: true,
			},
		],
		'no-implied-eval': 2,
		'no-invalid-this': 2,
		'no-iterator': 0, // Old tech, No one will do this
		'no-labels': 2,
		'no-lone-blocks': 0, // strange situation
		'no-loop-func': 2,
		'no-multi-spaces': [
			2,
			{
				exceptions: {
					Property: true,
					VariableDeclarator: true,
					ImportDeclaration: true,
				},
			},
		],
		'no-multi-str': 2,
		'no-native-reassign': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-new': 0,
		'no-octal-escape': 2,
		'no-octal': 0,
		'no-param-reassign': [2, { props: false }],
		'no-process-env': 0,
		'no-proto': 0,
		'no-redeclare': [2, { builtinGlobals: true }],
		'no-return-assign': [2, 'always'],
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-throw-literal': 2,
		'no-unused-expressions': 2,
		'no-useless-call': 0, // Old tech, No one will do this
		'no-void': 0,
		'no-warning-comments': process.env.NODE_ENV === 'production' ? [2, { terms: ['todo', 'fixme'], location: 'anywhere' }] : 0,
		'no-with': 2,
		'radix': 0,
		'vars-on-top': 2,
		'wrap-iife': 0,
		'yoda': [2, 'never', { exceptRange: true }],
		'strict': [2, 'global'],
		'init-declarations': 0,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': 0,
		'no-undef-init': 2,
		'no-undef': 1,
		'no-undefined': 2,
		'no-unused-vars': 2,
		'no-use-before-define': [2, 'nofunc'],
		'callback-return': 0,
		'handle-callback-err': 0,
		'no-mixed-requires': 0,
		'no-new-require': 0,
		'no-path-concat': 0,
		'no-process-exit': 0,
		'no-restricted-modules': 0,
		'no-sync': 0,
		'array-bracket-spacing': [2, 'never', {}],
		'brace-style': [2, '1tbs', {}],
		'camelcase': 0,
		'comma-spacing': [2, { after: true }],
		'comma-style': [2, 'last'],
		'computed-property-spacing': [2, 'never'],
		'consistent-this': [2, 'self'],
		'eol-last': 2,
		'func-names': 0,
		'func-style': 0,
		'id-length': 0,
		'key-spacing': [
			2,
			{
				afterColon: true,
			},
		],
		'lines-around-comment': [
			2,
			{
				beforeBlockComment: true,
				beforeLineComment: false,
				allowBlockStart: true,
			},
		],
		'max-nested-callbacks': 0,
		'new-cap': 0,
		'new-parens': 2,
		'newline-after-var': 0,
		'newline-per-chained-call': 0,
		'no-array-constructor': 2,
		'no-continue': 0,
		'no-inline-comments': 0,
		'no-lonely-if': 2,
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-nested-ternary': 2,
		'no-new-object': 2,
		'no-spaced-func': 2,
		'no-ternary': 0,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 0,
		'object-curly-spacing': [2, 'always', {}],
		'one-var': 0,
		'operator-assignment': [2, 'always'],
		'operator-linebreak': [2, 'before'],
		'padded-blocks': [2, 'never'],
		'padding-line-between-statements': [
			2,
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'if',
			},
			{
				blankLine: 'always',
				prev: 'if',
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'try',
			},
			{
				blankLine: 'always',
				prev: 'try',
				next: '*',
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive',
			},
		],
		'quote-props': [2, 'consistent-as-needed'],
		'quotes': [2, 'single', { avoidEscape: true }],
		'id-match': 0,
		'semi-spacing': [2, { after: true }],
		'semi': 2,
		'sort-vars': 0,
		'space-after-keywords': 0,
		'space-before-blocks': [2, 'always'],
		'space-before-function-paren': [
			2,
			{
				anonymous: 'never',
				asyncArrow: 'always',
				named: 'never',
			},
		],
		'space-in-parens': [2, 'never'],
		'space-infix-ops': [2, { int32Hint: true }],
		'space-unary-ops': 0,
		'spaced-comment': [2, 'always', {}],
		'wrap-regex': 0,
		'arrow-parens': [2, 'as-needed'],
		'arrow-spacing': [
			2,
			{
				before: true,
				after: true,
			},
		],
		'constructor-super': 2,
		'generator-star-spacing': 0,
		'no-class-assign': 0,
		'no-const-assign': 2,
		'no-this-before-super': 0,
		'no-var': 2,
		'object-shorthand': 0,
		'prefer-const': 2,
		'prefer-spread': 2,
		'prefer-reflect': 0,
		'require-yield': 0,
		'max-depth': 0,
		'max-len': 0,
		'max-params': 0,
		'max-statements': 0,
		'no-bitwise': 0,
		'no-plusplus': 0,
		'keyword-spacing': [
			2,
			{
				before: true,
				after: true,
			},
		],
	},
};
