import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
	display: flex;
`;

const TodosFilter = ({ todos, setTodos, setFilterOption }) => {
	const uncompletedTodos = todos.filter(todo => todo.completed === false);

	const filterHandler = e => {
		setFilterOption(e.target.dataset.option);
	};

	const clearCompletedHandler = () => {
		setTodos(todos.filter(todo => todo.completed === false));
	};

	return (
		<FilterWrapper>
			<p>{uncompletedTodos.length} items left</p>
			<button onClick={filterHandler} data-option="all">
				All
			</button>
			<button onClick={filterHandler} data-option="active">
				Active
			</button>
			<button onClick={filterHandler} data-option="completed">
				Completed
			</button>
			<button onClick={clearCompletedHandler}>Clear Completed</button>
		</FilterWrapper>
	);
};

export default TodosFilter;
