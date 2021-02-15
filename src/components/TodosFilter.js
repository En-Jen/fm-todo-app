import React from 'react';
import styled from 'styled-components';
import { FilterButtons } from './FilterButtons';
import useViewport from '../hooks/useViewport';
import { ItemBox } from './ItemBox';

const FilterWrapper = styled(ItemBox)`
	border-radius: 0;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	justify-content: space-between;
	margin-bottom: 1.8rem;

	@media (min-width: 768px) {
		font-size: var(--font-size-secondary);
		height: 5.2rem;
	}

	.items-left {
		color: ${p => p.theme.filterText};
	}

	.btn-clear-completed {
		color: ${p => p.theme.filterText};
		border: none;
		background-color: transparent;
		cursor: pointer;
		outline: none;
		font-family: 'Josefin Sans', sans-serif;
		font-size: var(--font-size-primary);
		transition: color var(--transition);

		@media (min-width: 768px) {
			font-size: var(--font-size-secondary);
		}
	}

	.btn-clear-completed:hover {
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
			<FilterWrapper>
				<p className="items-left">
					{uncompletedTodos.length}{' '}
					{uncompletedTodos.length > 1 ? 'items' : 'item'} left
				</p>
				{width >= breakpoint && (
					<FilterButtons
						filterOption={filterOption}
						setFilterOption={setFilterOption}
					/>
				)}
				<button
					className="btn-clear-completed"
					onClick={clearCompletedHandler}
				>
					Clear Completed
				</button>
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
