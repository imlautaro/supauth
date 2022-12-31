import { Provider } from '@supabase/gotrue-js'

export default defineAppConfig({
	supauth: {
		providers: false,
		redirect: '/',
		legalAdvice: false,
		confirm: false,
	},
})

declare module '@nuxt/schema' {
	interface AppConfigInput {
		supauth?: {
			providers?: boolean | Provider[]
			redirect?: string
			legalAdvice?: boolean | { terms: string; privacy: string }
			confirm?: boolean
		}
	}
}
