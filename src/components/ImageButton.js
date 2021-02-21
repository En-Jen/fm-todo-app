import styled from 'styled-components'

// Button with sun/moon and cross
export const ImageButton = styled.button`
    background-color: transparent;
	cursor: pointer;
	border: none;
	/* outline: none; */
	display: inline-flex;

	> img {
		display: block;
		width: 100%;
	}
`;