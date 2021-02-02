import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	const renderedTodos = filteredTodos.map(todo => {
		return <Todo todos={todos} setTodos={setTodos} todo={todo} />;
	});

	return (
		<div>
			<ul>{renderedTodos}</ul>
		</div>
	);
};

export default TodoList;
