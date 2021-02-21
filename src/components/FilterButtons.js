import React from 'react';
import styled, { css } from 'styled-components';
import { ItemBox } from './ItemBox';

const FilterButtonWrapper = styled(ItemBox)`
	justify-content: center;

	@media (min-width: 768px) {
		width: auto;
		height: auto;
		box-shadow: none;
		border-radius: 0;
		padding: 0;
	}
`;

const FilterButton = styled.button`
	font-size: var(--font-size-secondary);
	color: ${p => p.theme.filterText};
	border: none;
	background-color: transparent;
	cursor: pointer;
	transition: color var(--transition);

	${p =>
		p.filterOption === p.filterType &&
		css`
			color: ${p => p.theme.activeFilterText};
		`};

	&:nth-child(2) {
		margin-left: 2rem;
		margin-right: 2rem;
	}

	&:hover {
		color: ${p => p.theme.filterTextHover};
	}
`;

const FilterButtons = ({ filterOption, setFilterOption }) => {
	const filterHandler = e => {
		setFilterOption(e.target.dataset.option);
	};

	return (
		<FilterButtonWrapper>
			<FilterButton
				filterOption={filterOption}
				onClick={filterHandler}
				data-option="all"
				filterType="all"
			>
				All
			</FilterButton>
			<FilterButton
				filterOption={filterOption}
				onClick={filterHandler}
				data-option="active"
				filterType="active"
			>
				Active
			</FilterButton>
			<FilterButton
				filterOption={filterOption}
				onClick={filterHandler}
				data-option="completed"
				filterType="completed"
			>
				Completed
			</FilterButton>
		</FilterButtonWrapper>
	);
};

export default FilterButtons;