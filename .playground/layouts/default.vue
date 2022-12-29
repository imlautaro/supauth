<template>
	<div>
		<nav class="border-b py-4">
			<Container class="flex items-center justify-between">
				<NuxtLink class="font-bold text-2xl" to="/">Logotype</NuxtLink>
				<Stack gap="2">
					<NuxtLink to="/protected"> Protected </NuxtLink>
					<NuxtLink to="/login"> Login </NuxtLink>
					<NuxtLink to="/register"> Register </NuxtLink>
				</Stack>
			</Container>
		</nav>
		<Container class="py-24" max="md">
			<slot />
		</Container>
	</div>
</template>
