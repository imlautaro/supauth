<script setup lang="ts">
defineProps<{ icon?: string }>()
</script>

<template>
	<Stack
		class="border duration-200 font-medium px-4 py-3 rounded-lg shadow-sm hover:bg-black/5"
		component="button"
		items="center"
	>
		<Icon v-if="icon" :name="icon" />
		<span class="flex-1 w-full">
			<slot />
		</span>
	</Stack>
</template>
