import React from 'react';
import IconSun from '../assets/icon-sun.svg';
import IconMoon from '../assets/icon-moon.svg';

const ThemeToggler = ({ theme, setTheme }) => {
	console.log(theme);

	const themeToggleHandler = () => {
		if (theme.mode === 'dark') {
			setTheme({ ...theme, mode: 'light' });
		} else {
			setTheme({ ...theme, mode: 'dark' });
		}
	};

	return (
		<button onClick={themeToggleHandler}>
			{theme.mode === 'dark' ? (
				<img src={IconSun} alt="Theme switcher icon" />
			) : (
				<img src={IconMoon} alt="Theme switcher icon" />
			)}
		</button>
	);
};

export default ThemeToggler;
