import { Provider } from '@supabase/gotrue-js'
import { validate } from 'email-validator'

export default () => {
	const supaAuth = useSupabaseAuthClient().auth

	const {
		supauth: { redirect, confirm },
	} = useAppConfig()

	const credentials = reactive({
		email: '',
		password: '',
	})

	const errors = reactive({
		email: '',
		password: '',
		general: '',
	})

	const pending = ref(false)

	watch(
		computed(() => credentials.password),
		() => {
			errors.password = ''
		}
	)

	watch(
		computed(() => credentials.email),
		() => {
			errors.email = ''
		}
	)

	watch(credentials, () => {
		errors.general = ''
	})

	const loginWith = async (provider: Provider) => {
		const { error } = await supaAuth.signInWithOAuth({ provider })
		if (error) {
			errors.general = error.message
		}
	}

	const login = async () => {
		if (!credentials.email || !credentials.password) {
			// show error
			errors.general = 'Please fill in all fields'

			return
		}

		pending.value = true

		// do login
		const { error } = await supaAuth.signInWithPassword(credentials)

		pending.value = false

		if (error) {
			// show error
			switch (error.message) {
				case 'Invalid login credentials':
					errors.general = 'Invalid email or password'
					break
				default:
					errors.general = 'An error has occurred'
			}
		} else {
			return navigateTo(redirect)
		}
	}

	const register = async () => {
		// validate email
		if (!validate(credentials.email)) {
			// show error
			errors.email = 'Invalid email'

			return
		}

		// validate password
		if (credentials.password.length < 6) {
			// show error
			errors.password = 'The password must be at least 6 characters'

			return
		}

		pending.value = true

		// do register
		const { error } = await supaAuth.signUp(credentials)

		pending.value = false

		if (error) {
			// show error
			switch (error.message) {
				default:
					errors.general = 'An error has occurred'
			}
		} else {
			return navigateTo(confirm ? '/confirm' : redirect)
		}
	}

	return { credentials, loginWith, login, register, pending, errors }
}
