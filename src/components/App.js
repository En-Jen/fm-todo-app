import React, { useState } from 'react';
import Form from './Form';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([
		{
			text: 'Complete online JavaScript course',
			completed: true,
			id: 1,
		},
		{
			text: 'Jog around the park 3x',
			completed: false,
			id: 2,
		},
		{
			text: '10 minutes meditation',
			completed: false,
			id: 3,
		},
		{
			text: 'Read for 1 hour',
			completed: false,
			id: 4,
		},
		{
			text: 'Pick up groceries',
			completed: false,
			id: 5,
		},
		{
			text: 'Complete Todo App on Frontend Mentor',
			completed: false,
			id: 6,
		},
	]);

	return (
		<div>
			<Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
		</div>
	);
};

export default App;
