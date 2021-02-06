import React from 'react';
import styled from 'styled-components';
import { ItemBox } from './ItemBox';

const InputCircle = styled.div`
	width: 2rem;
	min-width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1.2rem;
	border: ${p => p.theme.todoBorder};
	outline: none;
	background-color: transparent;
`;

const TodoInput = styled.input`
	width: 90%;
	background-color: ${p => p.theme.todoBg};
	border: none;
	outline: none;
	font-family: inherit;
	font-size: var(--font-size-primary);
	color: ${p => p.theme.newTodoTypingText};
	caret-color: ${p => p.theme.activeFilterText};
	transition: background-color var(--transition);

	&::placeholder {
		color: ${p => p.theme.newTodoPlaceholderText};
	}
`;

const AddTodo = ({ inputText, setInputText, todos, setTodos }) => {
	const inputTextHandler = e => {
		setInputText(e.target.value);
	};

	const submitTodoHandler = e => {
		if (e.key === 'Enter') {
			e.preventDefault();

			setTodos([
				...todos,
				{ text: inputText, completed: false, id: Math.random() * 1000 },
			]);
			setInputText('');
		}
	};

	return (
		<ItemBox>
			<InputCircle />
			<TodoInput
				onKeyDown={submitTodoHandler}
				onChange={inputTextHandler}
				value={inputText}
				type="text"
				placeholder="Create a new todo..."
			/>
		</ItemBox>
	);
};

export default AddTodo;
