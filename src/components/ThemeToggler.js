import React from 'react';
import styled from 'styled-components';
import IconSun from '../assets/icon-sun.svg';
import IconMoon from '../assets/icon-moon.svg';
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';
import { ImageButton } from './ImageButton';

export const ToggleButton = styled(ImageButton)`
	width: 2rem;
	height: 2rem;

	@media (min-width: 768px) {
		width: 2.6rem;
		height: 2.6rem;
	}
`;

export const ThemeToggler = ({ theme, setTheme }) => {
	const themeToggleHandler = () => {
		setTheme(theme.id === 'light' ? DarkTheme : LightTheme);
	};

	return (
		<ToggleButton onClick={themeToggleHandler}>
			{theme.id === 'dark' ? (
				<img src={IconSun} alt="Theme switcher icon" />
			) : (
				<img src={IconMoon} alt="Theme switcher icon" />
			)}
		</ToggleButton>
	);
};
