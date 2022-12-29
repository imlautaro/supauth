<script setup lang="ts">
import { v4 as uuid } from 'uuid'

const id = uuid()

withDefaults(
	defineProps<{
		type?: string
		modelValue: string
		label: string
		icon?: string
		hint?: string
		error?: string
	}>(),
	{ type: 'text' }
)

defineEmits(['update:modelValue'])

const show = ref(false)
</script>

<template>
	<Stack gap="2" vertical>
		<label class="text-sm" :for="id">{{ label }}: </label>
		<div class="bg-gray-100 relative rounded-lg">
			<Icon
				v-if="icon"
				class="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-600 z-10"
				:name="icon"
			/>
			<input
				:id="id"
				class="bg-transparent px-4 py-3 relative rounded-lg w-full"
				:class="{ 'pl-14': icon, 'pr-14': type === 'password' }"
				:value="modelValue"
				@input="
					$emit(
						'update:modelValue',
						($event.target as HTMLInputElement).value
					)
				"
				:type="
					type === 'password' ? (show ? 'text' : 'password') : type
				"
				:placeholder="label"
			/>
			<div
				v-if="type === 'password'"
				@click.prevent="show = !show"
				class="flex p-2 -mx-2 absolute top-1/2 transform -translate-y-1/2 right-4 rounded-lg text-gray-400"
			>
				<Icon :name="show ? 'bxs:show' : 'bxs:hide'" />
			</div>
		</div>
		<span v-if="error" class="text-red-600 text-xs">{{ error }}</span>
		<span v-else-if="hint" class="text-gray-600 text-xs">{{ hint }}</span>
	</Stack>
</template>
