<script setup lang="ts">
const {
	supauth: { providers },
} = useAppConfig()

const { loginWith } = useSupauth()
</script>

<template>
	<Stack v-if="providers.length" gap="4" vertical>
		<SaSecondaryButton
			v-if="providers.includes('google')"
			@click="loginWith('google')"
			icon="logos:google-icon"
		>
			Continue with Google
		</SaSecondaryButton>
		<SaSecondaryButton
			v-if="providers.includes('github')"
			@click="loginWith('github')"
			icon="logos:github-icon"
		>
			Continue with GitHub
		</SaSecondaryButton>
	</Stack>
	<span v-if="providers.length" class="mx-auto text-gray-600">or</span>
</template>
