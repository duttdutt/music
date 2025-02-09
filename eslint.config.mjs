// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
	type: 'app',
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	typescript: true,
	vue: true,
})
