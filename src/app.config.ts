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
			providers?: boolean | ('google' | 'github')[]
			redirect?: string
			legalAdvice?: boolean | { terms: string; privacy: string }
			confirm?: boolean
		}
	}
}
