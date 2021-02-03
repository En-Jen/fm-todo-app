import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
	margin-top: -11rem;
`;

const TodoInput = styled.input`
	background-color: ${p => p.theme.todoBg};
	border-radius: 5px;
	width: 100%;
	max-width: 54rem;
	height: 4.8rem;
	border: none;
	font-family: inherit;
	font-size: var(--font-size-primary);
	color: ${p => p.theme.newTodoTypingText};
	caret-color: ${p => p.theme.activeFilterText};

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
		<InputBox>
			<div>
				<TodoInput
					onKeyDown={submitTodoHandler}
					onChange={inputTextHandler}
					value={inputText}
					type="text"
					placeholder="Create a new todo..."
				/>
			</div>
		</InputBox>
	);
};

export default AddTodo;
