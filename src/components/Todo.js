import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.li`
	display: flex;
`;

const TodoText = styled.p``;

const Todo = ({ todos, setTodos, todo }) => {
	const completeTodoHandler = () => {
		setTodos(
			todos.map(item => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	const deleteTodoHandler = () => {
		setTodos(todos.filter(el => el.id !== todo.id));
	};

	return (
		<TodoWrapper>
			<button onClick={completeTodoHandler}>Completed</button>
			<TodoText>{todo.text}</TodoText>
			<button onClick={deleteTodoHandler}>Delete</button>
		</TodoWrapper>
	);
};

export default Todo;
