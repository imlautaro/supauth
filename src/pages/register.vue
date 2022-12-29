<script setup lang="ts">
definePageMeta({
	layout: 'supauth',
	middleware: 'unauthenticated',
})

useHead({
	title: 'Register',
})

const { credentials, register, pending, errors } = useSupauth()
</script>

<template>
	<Stack gap="6" justify="center" vertical>
		<h1 class="font-medium text-2xl text-center">Register</h1>
		<SaProviders />
		<Stack @submit.prevent="register" component="form" gap="6" vertical>
			<SaAlert v-if="errors.general" type="error">
				{{ errors.general }}
			</SaAlert>
			<SaTextField
				v-model="credentials.email"
				:error="errors.email"
				icon="bx:envelope"
				label="Email"
				type="email"
			/>
			<SaTextField
				v-model="credentials.password"
				:error="errors.password"
				icon="bx:lock-alt"
				label="Password"
				type="password"
				hint="It must be at least 6 characters"
			/>
			<Stack gap="2" vertical>
				<SaPrimaryButton
					icon="bx:log-in"
					:pending="pending"
					type="submit"
				>
					Register
				</SaPrimaryButton>
				<span class="text-center text-sm">
					Already have an account?
					<SaLink to="/login"> Login </SaLink>
				</span>
			</Stack>
		</Stack>
		<SaLegalAdvice />
	</Stack>
</template>
