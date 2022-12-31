<script setup lang="ts">
import { Provider } from '@supabase/gotrue-js'

const {
	supauth: { providers: _providers },
} = useAppConfig()

const { loginWith } = useSupauth()

const providers = computed(() => {
	if (!_providers) return []
	return [
		{
			id: 'apple',
			name: 'Apple',
			icon: 'logos:apple',
		},
		{
			id: 'azure',
			name: 'Azure',
			icon: 'logos:azure-icon',
		},
		{
			id: 'bitbucket',
			name: 'Bitbucket',
			icon: 'logos:bitbucket',
		},
		{
			id: 'discord',
			name: 'Discord',
			icon: 'logos:discord-icon',
		},
		{
			id: 'facebook',
			name: 'Facebook',
			icon: 'logos:facebook',
		},
		{
			id: 'github',
			name: 'GitHub',
			icon: 'logos:github-icon',
		},
		{
			id: 'gitlab',
			name: 'GitLab',
			icon: 'logos:gitlab',
		},
		{
			id: 'google',
			name: 'Google',
			icon: 'logos:google-icon',
		},
		{
			id: 'keycloak',
			name: 'KeyCloak',
			icon: 'bxs:user-check', // TODO: add official isotype
		},
		{
			id: 'linkedin',
			name: 'LinkedIn',
			icon: 'logos:linkedin-icon',
		},
		{
			id: 'notion',
			name: 'Notion',
			icon: 'cib:notion',
		},
		{
			id: 'slack',
			name: 'Slack',
			icon: 'logos:slack-icon',
		},
		{
			id: 'spotify',
			name: 'Spotify',
			icon: 'logos:spotify-icon',
		},
		{
			id: 'twitch',
			name: 'Twitch',
			icon: 'logos:twitch',
		},
		{
			id: 'twitter',
			name: 'Twitter',
			icon: 'logos:twitter',
		},
		{
			id: 'workos',
			name: 'WorkOS',
			icon: 'bxs:user-check', // TODO: add official isotype
		},
	].filter(p => (_providers as string[]).includes(p.id))
})

const vertical = computed(
	() => providers.value.length > 4 || providers.value.length < 3
)
</script>

<template>
	<Stack v-if="providers.length" gap="4" :vertical="vertical">
		<Stack
			v-for="provider in providers"
			@click="loginWith(provider.id as Provider)"
			class="border duration-200 font-medium px-4 py-3 rounded-lg shadow-sm hover:bg-black/5"
			component="button"
			items="center"
			:class="{ 'flex-1 justify-center w-full': !vertical }"
		>
			<Icon :name="provider.icon" />
			<span v-if="vertical" class="flex-1 w-full">
				Continue with {{ provider.name }}
			</span>
		</Stack>
	</Stack>
	<span v-if="providers.length" class="mx-auto text-gray-600"> or </span>
</template>
