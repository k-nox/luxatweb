import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		links: [
			{
				url: '/about',
				text: 'about'
			},
			{
				url: 'https://www.linkedin.com/in/lux-barker',
				text: 'linkedin'
			},
			{
				url: 'https://github.com/k-nox',
				text: 'github'
			}
		]
	};
};
