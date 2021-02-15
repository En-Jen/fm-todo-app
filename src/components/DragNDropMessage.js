import React from 'react';
import styled from 'styled-components';

const DragAndDropText = styled.div`
	width: 100%;
	margin-top: 4.3rem;

	& .text {
		color: ${p => p.theme.filterText};
		text-align: center;
		font-size: var(--font-size-secondary);
	}
`;

const DragNDropMessage = () => {
	return (
		<DragAndDropText>
			<p className="text">Drag and drop to reorder list</p>
		</DragAndDropText>
	);
};

export default DragNDropMessage;
