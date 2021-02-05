import React from 'react';
import styled from 'styled-components';

export const InputBox = styled.div`
	width: 100%;
	max-width: 54rem;
	background-color: ${p => p.theme.todoBg};
	border-radius: 5px;
	height: 4.8rem;
	box-shadow: ${p => p.theme.boxShadow};
	display: flex;
	align-items: center;
	padding: 2rem;

	@media (min-width: 768px) {
		height: 6.4rem;
	}
`;

const InputCircle = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1.2rem;
	border: ${p => p.theme.todoBorder};
	outline: none;
	background-color: transparent;
`;

const TodoInput = styled.input`
	width: 100%;
	background-color: ${p => p.theme.todoBg};
	border: none;
	outline: none;
	font-family: inherit;
	font-size: var(--font-size-primary);
	color: ${p => p.theme.newTodoTypingText};
	caret-color: ${p => p.theme.activeFilterText};

	&::placeholder {
		color: ${p => p.theme.newTodoPlaceholderText};
	}
`;

export const AddTodo = ({ inputText, setInputText, todos, setTodos }) => {
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
		<InputBox>
			<InputCircle />
			<TodoInput
				onKeyDown={submitTodoHandler}
				onChange={inputTextHandler}
				value={inputText}
				type="text"
				placeholder="Create a new todo..."
			/>
		</InputBox>
	);
};
