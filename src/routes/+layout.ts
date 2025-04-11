import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		links: [
			{
				href: '/about',
				text: 'about'
			},
			{
				href: '/projects',
				text: 'projects'
			},
			{
				href: 'https://blog.luxatweb.dev',
				text: 'posts'
			},
			{
				href: 'https://www.linkedin.com/in/lux-barker',
				text: 'linkedin'
			},
			{
				href: 'https://github.com/k-nox',
				text: 'github'
			}
		]
	};
};
