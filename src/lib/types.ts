export type Theme = 'dark' | 'light';
export type ThemeChoice = Theme | 'system';

type DropdownAnchor = {
	type: 'anchor';
	href: string;
};

type DropdownButton = {
	type: 'button';
	onSelect: () => void;
};

export type DropdownItem = {
	text: string;
} & (DropdownButton | DropdownAnchor);
