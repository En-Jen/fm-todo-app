import React from 'react';
import styled from 'styled-components';
import FilterButtons from './FilterButtons';
import useViewport from '../hooks/useViewport';

const FilterWrapper = styled.div`
	display: flex;
`;

const TodosFilter = ({ todos, setTodos, setFilterOption }) => {
	const uncompletedTodos = todos.filter(todo => todo.completed === false);

	const { width } = useViewport();
	const breakpoint = 768;

	const clearCompletedHandler = () => {
		setTodos(todos.filter(todo => todo.completed === false));
	};

	return (
		<>
			<FilterWrapper>
				<p>{uncompletedTodos.length} items left</p>
				{width >= breakpoint && (
					<FilterButtons setFilterOption={setFilterOption} />
				)}
				<button onClick={clearCompletedHandler}>Clear Completed</button>
			</FilterWrapper>
			{width < breakpoint && (
				<FilterButtons setFilterOption={setFilterOption} />
			)}
		</>
	);
};

export default TodosFilter;
