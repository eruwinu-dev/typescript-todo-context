import React from "react"
import useTodoContext from "../../lib/TodoState"
import TodoItem from "./TodoItem"

type Props = {}

const TodoList = (props: Props) => {
	const { todos } = useTodoContext()

	if (!todos.length) return <div>No todos.</div>

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			{todos.map((todo, index) => (
				<TodoItem key={index} todo={todo} />
			))}
		</div>
	)
}

export default TodoList

