import React from 'react';
import styled, { css } from 'styled-components';
import { ItemBox } from './ItemBox';
import IconCross from '../assets/icon-cross.svg';
import { ImageButton } from './ImageButton';
import IconCheck from '../assets/icon-check.svg';

const TodoWrapper = styled(ItemBox)`
	box-shadow: none;
	border-radius: 0;
	border-bottom: ${p => p.theme.todoBorder};
	transition: border-bottom var(--transition);

	&:first-child {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	&:hover > .btn-delete {
		display: inline-flex;
	}
`;

const CircleCheckbox = styled.button`
	width: 2rem;
	min-width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1.2rem;
	cursor: pointer;
	border: ${p => p.theme.todoBorder};
	outline: none;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: border 0.2s ease, transform 0.2s ease;

	&:hover {
		border: ${p => p.theme.circleBorderHover};
		transform: scale(1.1);

		${p =>
			p.completed &&
			css`
				border: none;
			`};
	}

	${p =>
		p.completed &&
		css`
			background: ${p => p.theme.circleBg};
			border: none;
		`};

	/* Check icon */
	> img {
		display: block;
		width: 0.725rem;
		height: 0.5rem;
	}
`;

const TodoText = styled.p`
	color: ${p => p.theme.uncompletedTodoText};
	margin-right: 1.2rem;

	${p =>
		p.completed &&
		css`
			text-decoration: line-through;
			color: ${p => p.theme.completedTodoText};
		`};
`;

const DeleteButton = styled(ImageButton)`
	width: 1.18rem;
	min-width: 1.18rem;
	height: 1.18rem;
	margin-left: auto;
	transition: transform var(--transition);

	@media (min-width: 768px) {
		width: 1.77rem;
		height: 1.77rem;
		display: none;
	}

	&:hover {
		transform: scale(1.2);
	}
`;

export const Todo = ({ todos, setTodos, todo }) => {
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
			<CircleCheckbox
				onClick={completeTodoHandler}
				completed={todo.completed}
			>
				{todo.completed && <img src={IconCheck} alt="Check mark" />}
			</CircleCheckbox>
			<TodoText completed={todo.completed}>{todo.text}</TodoText>
			<DeleteButton className="btn-delete" onClick={deleteTodoHandler}>
				<img src={IconCross} alt="Delete button" />
			</DeleteButton>
		</TodoWrapper>
	);
};

export default Todo;
