<script setup lang="ts">
definePageMeta({
	layout: 'supauth',
})

useHead({
	title: 'Confirmation Required',
})
</script>

<template>
	<SaAlert type="info">
		We send you an email with a link to confirm your account
	</SaAlert>
</template>
