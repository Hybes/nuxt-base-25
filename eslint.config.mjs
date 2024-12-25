import withNuxt from './.nuxt/eslint.config.mjs'
export default withNuxt({
	ignores: ['lib/**/*', 'components/ui/**/*', '.nuxt/**/*'],

	rules: {
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'vue/no-use-v-if-with-v-for': 'off',
		'vue/no-v-html': 'off'
	},
	files: ['**/*.js', '**/*.jsx', '**/*.vue', '**/*.ts', '**/*.tsx']
})
