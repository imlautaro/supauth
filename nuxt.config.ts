import { colors } from '@unocss/preset-mini'

export default defineNuxtConfig({
	extends: ['oxecore'],
	modules: ['@nuxtjs/supabase'],
	srcDir: 'src',
	unocss: {
		theme: {
			colors: {
				supauth: colors!.sky,
			},
		},
	},
})
