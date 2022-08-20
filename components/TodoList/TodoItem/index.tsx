import React, { FormEvent, MouseEvent } from "react"
import useTodoContext from "../../../lib/TodoState"

import { TodoType } from "../../../types/todo"
import EditTodo from "../../EditTodo"

type Props = {
	todo: TodoType
}

const TodoItem = ({ todo }: Props) => {
	const { toggleTodo, deleteTodo, selectedTodoId, selectTodo } = useTodoContext()

	const toggleTodoHandler = (event: FormEvent<HTMLInputElement>): void => {
		toggleTodo(todo.id)
	}

	const deleteTodoHandler = (event: MouseEvent): void => {
		deleteTodo(todo.id)
	}

	const selectTodoHandler = (event: MouseEvent): void => {
		selectTodo(todo.id)
	}

	if (selectedTodoId === todo.id) return <EditTodo />

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				paddingTop: "0.5rem",
				paddingBottom: "0.5rem",
				paddingRight: "0.5rem",
			}}
		>
			<div
				style={{
					flex: 2,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<input type="checkbox" checked={todo.completed} onChange={toggleTodoHandler} />
				<span style={{ textDecoration: todo.completed ? "line-through" : "none", marginLeft: "0.25rem" }}>
					{todo.title}
				</span>
			</div>
			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-end",
				}}
			>
				<button style={{ marginRight: "0.5rem" }} type="button" onClick={selectTodoHandler}>
					Edit
				</button>
				<button type="button" onClick={deleteTodoHandler}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default TodoItem

