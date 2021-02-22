import React, { useState } from 'react';
import styled from 'styled-components';
import { ItemBox } from './ItemBox';

const InputCircle = styled.div`
	width: 2rem;
	min-width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1.2rem;
	border: ${p =>
		p.isFocus ? p.theme.circleBorderHover : p.theme.todoBorder};
	transform: ${p => (p.isFocus ? 'scale(1.1)' : 'scale(1)')};
	background-color: transparent;
	transition: border 0.2s ease, transform 0.2s ease;

	@media (min-width: 768px) {
		width: 2.4rem;
		min-width: 2.4rem;
		height: 2.4rem;
		margin-right: 2.6rem;
	}
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

	&:focus .input-circle {
		outline: 2px dotted red;
	}
`;

const AddTodo = ({ inputText, setInputText, todos, setTodos }) => {
	const [isFocus, setIsFocus] = useState(false);

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

	const onInputFocusHandler = () => setIsFocus(true);

	const onInputBlurHandler = () => setIsFocus(false);

	return (
		<ItemBox>
			<InputCircle isFocus={isFocus} />
			<label className="sr-only" htmlFor="newTodo">
				Add new todo
			</label>
			<TodoInput
				id="newTodo"
				onFocus={onInputFocusHandler}
				onBlur={onInputBlurHandler}
				onKeyDown={submitTodoHandler}
				onChange={inputTextHandler}
				value={inputText}
				type="text"
				placeholder="Create a new todo..."
				autocomplete="off"
			/>
		</ItemBox>
	);
};

export default AddTodo;
