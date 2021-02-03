import React, { useState, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodosFilter from './components/TodosFilter';
import Main from './components/Main';
import DarkTheme from './themes/dark';

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		font-size: 62.5%; //1rem = 10px

		--font-size-primary: 1.2rem;
		--font-size-secondary: 1.4rem;

		@media (min-width: 768px) {
			--font-size-primary: 1.8rem
		}
	}

	body {
		font-family: 'Josefin Sans', sans-serif;
		width: 100vw;
		background-color: ${p => p.theme.bodyBg};
		color: ${p => p.theme.uncompletedTodoText};
	}
`;

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
	const [theme, setTheme] = useState(DarkTheme);

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
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header theme={theme} setTheme={setTheme} />
			<Main>
				<AddTodo
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
			</Main>
		</ThemeProvider>
	);
};

export default App;
