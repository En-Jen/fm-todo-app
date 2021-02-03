import React from 'react';
import styled from 'styled-components';
import IconSun from '../assets/icon-sun.svg';
import IconMoon from '../assets/icon-moon.svg';
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';

const ToggleButton = styled.button`
	width: 2rem;
	height: 2rem;
	background-color: transparent;
	cursor: pointer;
	border: none;
	outline: none;
	display: inline-flex;

	> img {
		width: 100%;
	}
`;

const ThemeToggler = ({ theme, setTheme }) => {
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

export default ThemeToggler;
