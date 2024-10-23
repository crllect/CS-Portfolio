const config = {
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'avoid',
	requirePragma: false,
	insertPragma: false,
	proseWrap: 'always',
	overrides: [
		{
			files: '**/*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};

export default config;
