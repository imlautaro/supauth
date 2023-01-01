export default defineAppConfig({
	docus: {
		title: 'Supauth',
		description: `Don't worry about login screens anymore when creating your next green-stack project!`,
		image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
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
