<script setup lang="ts">
const {
	supauth: { legalAdvice },
} = useAppConfig()
</script>

<template>
	<hr v-if="legalAdvice" />
	<span v-if="legalAdvice" class="text-center text-sm">
		By continuing you accept our
		<SaLink :to="legalAdvice.terms"> terms and conditions </SaLink>
		and our
		<SaLink :to="legalAdvice.privacy"> privacy policy </SaLink>
	</span>
</template>
