import React from 'react';

const FilterButtons = ({ setFilterOption }) => {
	const filterHandler = e => {
		setFilterOption(e.target.dataset.option);
	};

	return (
		<div>
			<button onClick={filterHandler} data-option="all">
				All
			</button>
			<button onClick={filterHandler} data-option="active">
				Active
			</button>
			<button onClick={filterHandler} data-option="completed">
				Completed
			</button>
		</div>
	);
};

export default FilterButtons;
