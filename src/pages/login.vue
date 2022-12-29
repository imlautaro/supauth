<script setup lang="ts">
definePageMeta({
	layout: 'supauth',
	middleware: 'unauthenticated',
})

useHead({
	title: 'Login',
})

const { credentials, login, pending, errors } = useSupauth()
</script>

<template>
	<Stack gap="6" justify="center" vertical>
		<h1 class="font-medium text-2xl text-center">Login</h1>
		<SaProviders />
		<Stack @submit.prevent="login" component="form" gap="6" vertical>
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
			/>
			<Stack gap="2" vertical>
				<SaPrimaryButton
					icon="bx:log-in"
					:pending="pending"
					type="submit"
				>
					Login
				</SaPrimaryButton>
				<span class="text-center text-sm">
					Don't have an account?
					<SaLink to="/register"> Register </SaLink>
				</span>
			</Stack>
		</Stack>
		<SaLegalAdvice />
	</Stack>
</template>
