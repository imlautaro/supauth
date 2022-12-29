<script setup lang="ts">
definePageMeta({
	middleware: 'authenticated',
})

useHead({
	title: 'Protected',
})
</script>

<template>
	<div>
		<h1 class="font-medium text-4xl">Protected</h1>
	</div>
</template>
