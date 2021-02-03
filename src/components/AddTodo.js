import React from 'react';

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
		<form>
			<input
				onKeyDown={submitTodoHandler}
				onChange={inputTextHandler}
				value={inputText}
				type="text"
			/>
		</form>
	);
};

export default AddTodo;
