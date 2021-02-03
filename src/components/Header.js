import React from 'react';
import styled from 'styled-components';
import ThemeToggler from './ThemeToggler';

const StyledHeader = styled.header`
	height: 20rem;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${p => p.theme.bgImgMobile};

	@media (min-width: 768px) {
		height: 30rem;
		background-image: ${p => p.theme.bgImgDesktop};
	}
`;

const Heading = styled.h1`
	color: #fff;
	text-transform: uppercase;
	font-size: 4rem;
	font-weight: 700;
	letter-spacing: 1.5rem;
`;

const Header = ({ theme, setTheme }) => {
	return (
		<StyledHeader>
			<div>
				<Heading>Todo</Heading>
				<ThemeToggler theme={theme} setTheme={setTheme} />
			</div>
		</StyledHeader>
	);
};

export default Header;
