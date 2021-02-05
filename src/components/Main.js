import styled from 'styled-components';

const Main = styled.main`
	font-size: var(--font-size-primary);
	margin-top: -11rem;
	padding: 2.4rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		margin-top: -16rem;
	}
`;

export default Main;
