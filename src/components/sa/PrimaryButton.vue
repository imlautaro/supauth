<script setup lang="ts">
defineProps<{ icon?: string; pending?: boolean }>()
</script>

<template>
	<Stack
		class="bg-supauth-700 duration-200 font-medium px-4 py-3 rounded-lg shadow-sm text-white hover:bg-supauth-800"
		component="button"
		gap="2"
		items="center"
		justify="center"
	>
		<Icon v-if="pending" class="animate-spin" name="bx:loader" />
		<template v-else>
			<Icon v-if="icon" :name="icon" />
			<span>
				<slot />
			</span>
		</template>
	</Stack>
</template>
