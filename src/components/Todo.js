import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
	display: flex;
`;

const TodoLi = styled.li`
	list-style: none;
`;

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
			<TodoLi>{todo.text}</TodoLi>
			<button onClick={deleteTodoHandler}>Delete</button>
		</TodoWrapper>
	);
};

export default Todo;
