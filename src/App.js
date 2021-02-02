import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import TodosFilter from './components/TodosFilter';

const initialTodos = [
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
];

const App = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState(initialTodos);
	const [filterOption, setFilterOption] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	// Run every time user adds another todo or selects a different filterOption
	useEffect(() => {
		filterHandler();
	}, [todos, filterOption]);

	const filterHandler = () => {
		switch (filterOption) {
			case 'active':
				setFilteredTodos(
					todos.filter(todo => todo.completed === false)
				);
				break;
			case 'completed':
				setFilteredTodos(todos.filter(todo => todo.completed === true));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	return (
		<div>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
			<TodosFilter
				todos={todos}
				setTodos={setTodos}
				setFilterOption={setFilterOption}
			/>
		</div>
	);
};

export default App;
