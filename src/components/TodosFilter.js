import React from 'react';
import styled from 'styled-components';
import { FilterButtons, FilterButton } from './FilterButtons';
import useViewport from '../hooks/useViewport';
import { TodoInput } from './AddTodo';

const FilterWrapper = styled(TodoInput)`
	border-radius: 0;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	justify-content: space-between;
	margin-bottom: 2rem;

	> p {
		color: ${p => p.theme.filterText};
	}

	> button {
		color: ${p => p.theme.filterText};
		border: none;
		background-color: transparent;
		cursor: pointer;
		outline: none;
		font-family: 'Josefin Sans', sans-serif;
		font-size: var(--font-size-primary);
		transition: color var(--transition);
	}

	> button:hover {
		color: ${p => p.theme.filterTextHover};
	}
`;

const TodosFilter = ({ todos, setTodos, filterOption, setFilterOption }) => {
	const uncompletedTodos = todos.filter(todo => todo.completed === false);

	const { width } = useViewport();
	const breakpoint = 768;

	const clearCompletedHandler = () => {
		setTodos(todos.filter(todo => todo.completed === false));
	};

	return (
		<>
			<FilterWrapper as="div">
				<p>{uncompletedTodos.length} items left</p>
				{width >= breakpoint && (
					<FilterButtons
						filterOption={filterOption}
						setFilterOption={setFilterOption}
					/>
				)}
				<button onClick={clearCompletedHandler}>Clear Completed</button>
			</FilterWrapper>
			{width < breakpoint && (
				<FilterButtons
					filterOption={filterOption}
					setFilterOption={setFilterOption}
				/>
			)}
		</>
	);
};

export default TodosFilter;
