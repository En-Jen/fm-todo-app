import styled from 'styled-components';

export const CircleCheckbox = styled.button`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1.2rem;
	cursor: pointer;
	border: ${p => p.theme.todoBorder};
	background-color: transparent;
`;
