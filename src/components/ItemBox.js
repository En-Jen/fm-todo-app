import styled from 'styled-components';

// Box containing input, each Todo item, & TodosFilter
export const ItemBox = styled.div`
	width: 100%;
	max-width: 54rem;
	background-color: ${p => p.theme.todoBg};
	border-radius: 5px;
	height: 4.8rem;
	box-shadow: ${p => p.theme.boxShadow};
	display: flex;
	align-items: center;
	padding: 2rem;

	@media (min-width: 768px) {
		height: 6.4rem;
	}
`;
