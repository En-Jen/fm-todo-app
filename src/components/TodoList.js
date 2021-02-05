import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoListContainer = styled.div`
	margin-top: 2rem;
	width: 100%;
	max-width: 54rem;
`;

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	const renderedTodos = filteredTodos.map(todo => {
		return (
			<Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
		);
	});

	return (
		<TodoListContainer>
			<ul>{renderedTodos}</ul>
		</TodoListContainer>
	);
};

export default TodoList;
