import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Todo from './Todo';

const TodoListContainer = styled.div`
	margin-top: 2rem;
	width: 100%;
	max-width: 54rem;
`;

const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const getItemStyle = draggableStyle => ({
	// some basic styles to make the items look a bit nicer
	userSelect: 'none',
	...draggableStyle,
});

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	const onDragEnd = result => {
		const { destination, source, reason } = result;

		if (!destination || reason === 'CANCEL') {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const updatedTodos = reorder(
			todos,
			result.source.index,
			result.destination.index
		);

		setTodos(updatedTodos);
	};

	const renderedTodos = filteredTodos.map((todo, index) => {
		return (
			<Draggable
				key={todo.id}
				draggableId={`todo-${todo.id}`}
				index={index}
			>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						style={getItemStyle(
							snapshot.isDragging,
							provided.draggableProps.style
						)}
					>
						<Todo
							todos={todos}
							setTodos={setTodos}
							todo={todo}
							key={todo.id}
						/>
					</div>
				)}
			</Draggable>
		);
	});

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable">
				{provided => (
					<TodoListContainer
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<ul>{renderedTodos}</ul>
						{provided.placeholder}
					</TodoListContainer>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default TodoList;
