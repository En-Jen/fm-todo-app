import React from 'react';
import styled from 'styled-components';
import { ThemeToggler } from './ThemeToggler';

const StyledHeader = styled.header`
	height: 20rem;
	padding: 2.4rem;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${p => p.theme.bgImgMobile};
	display: flex;
	justify-content: center;
	transition: background-image var(--transition);

	@media (min-width: 768px) {
		height: 30rem;
		background-image: ${p => p.theme.bgImgDesktop};
	}
`;

const HeaderWrapper = styled.div`
	width: 100%;
	height: 40px;
	max-width: 54rem;
	margin-top: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 768px) {
		margin-top: 5rem;
	}
`;

const Heading = styled.h1`
	color: #fff;
	text-transform: uppercase;
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: 1.5rem;

	@media (min-width: 768px) {
		font-size: 4rem;
	}
`;

const Header = ({ theme, setTheme }) => {
	return (
		<StyledHeader>
			<HeaderWrapper>
				<Heading>Todo</Heading>
				<ThemeToggler theme={theme} setTheme={setTheme} />
			</HeaderWrapper>
		</StyledHeader>
	);
};

export default Header;
