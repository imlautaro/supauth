<script setup lang="ts">
const props = withDefaults(
	defineProps<{ type: 'warning' | 'error' | 'success' | 'info' }>(),
	{ type: 'warning' }
)
const icon = computed(() => {
	switch (props.type) {
		case 'error':
			return 'bx:x-circle'
		case 'info':
			return 'bx:info-circle'
		case 'success':
			return 'bx:check-circle'
		case 'warning':
		default:
			return 'bx:error'
	}
})
</script>

<template>
	<Stack
		class="p-6 rounded-xl"
		:class="`alert-${type}`"
		items="center"
		gap="4"
	>
		<Icon :name="icon" />
		<p class="flex-1">
			<slot />
		</p>
	</Stack>
</template>

<style>
.alert-warning {
	@apply bg-yellow-600/10 text-yellow-700;
}
.alert-error {
	@apply bg-red-600/10 text-red-700;
}
.alert-success {
	@apply bg-green-600/10 text-green-700;
}
.alert-info {
	@apply bg-sky-600/10 text-sky-700;
}
</style>
