import React from 'react';
import IconSun from '../assets/icon-sun.svg';
import IconMoon from '../assets/icon-moon.svg';
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';

const ThemeToggler = ({ theme, setTheme }) => {
	const themeToggleHandler = () => {
		setTheme(theme.id === 'light' ? DarkTheme : LightTheme);
	};

	return (
		<button onClick={themeToggleHandler}>
			{theme.id === 'dark' ? (
				<img src={IconSun} alt="Theme switcher icon" />
			) : (
				<img src={IconMoon} alt="Theme switcher icon" />
			)}
		</button>
	);
};

export default ThemeToggler;
