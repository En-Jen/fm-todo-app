import React from 'react';
import styled, { css } from 'styled-components';
import { TodoInput } from './AddTodo';
import { CircleCheckbox } from './CircleCheckbox';

const TodoWrapper = styled(TodoInput)`
	box-shadow: none;
	border-radius: 0;

	&:not(:last-child) {
		border-bottom: ${p => p.theme.todoBorder};
	}

	&:first-child {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	&:last-child {
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
	}
`;

const TodoText = styled.p`
	color: ${p => p.theme.uncompletedTodoText};

	${p =>
		p.completed &&
		css`
			text-decoration: line-through;
			color: ${p => p.theme.completedTodoText};
		`};
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
		<TodoWrapper as="li">
			<CircleCheckbox onClick={completeTodoHandler} />
			<TodoText completed={todo.completed}>{todo.text}</TodoText>
			<button onClick={deleteTodoHandler}>Delete</button>
		</TodoWrapper>
	);
};

export default Todo;
