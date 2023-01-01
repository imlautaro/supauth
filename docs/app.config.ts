export default defineAppConfig({
	docus: {
		title: 'Supauth',
		description: `Don't worry about login screens anymore when creating your next green-stack project!`,
		image: 'https://repository-images.githubusercontent.com/583316951/024e824a-46ee-49b6-8d6a-0c03d8be10fd',
		socials: {
			github: 'imlautaro/supauth',
		},
		aside: {
			level: 0,
			exclude: [],
		},
		header: {
			logo: true,
			showLinkIcon: true,
			exclude: [],
		},
		footer: {
			iconLinks: [
				{
					href: 'https://nuxt.com',
					icon: 'IconNuxtLabs',
				},
			],
		},
	},
})
