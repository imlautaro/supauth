export default defineNuxtRouteMiddleware(() => {
	const appConfig = useAppConfig()
	const user = useSupabaseUser()
	if (user.value) {
		return navigateTo(appConfig.supauth.redirect || '/')
	}
})
