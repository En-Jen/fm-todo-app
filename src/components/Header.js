import React from 'react';
import ThemeToggler from './ThemeToggler';

const Header = ({ theme, setTheme }) => {
	return (
		<header>
			<div>
				<h1>Todo</h1>
				<ThemeToggler theme={theme} setTheme={setTheme} />
			</div>
		</header>
	);
};

export default Header;
