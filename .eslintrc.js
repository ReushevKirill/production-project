module.exports = {
	env: {
		browser: true,
		es2021: true,
	},

	extends: [
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:i18next/recommended',
	],

	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	plugins: [
		// prettier-ignore
		'react',
		'prettier',
		'i18next',
	],

	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-indent': [2, 4],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'i18next/no-literal-string': ['error', { markupOnly: true }],
		indent: [2, 4],

		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'off',
				// printWidth: 120,
				// singleQuote: true,
				// semi: false,
				// jsxSingleQuote: true,
			},
		],
	},
}
