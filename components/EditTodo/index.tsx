import React, { useState, FormEvent, MouseEvent } from "react"
import useTodoContext from "../../lib/TodoState"
import { TodoType } from "../../types/todo"

type Props = {}

const EditTodo = (props: Props) => {
	const { editTodo, selectTodo, selectedTodoId, todos } = useTodoContext()

	const selectedTodo = todos.find((todo) => todo.id === selectedTodoId)

	const [title, setTitle] = useState(selectedTodo?.title)

	const changeTitleHandler = (event: FormEvent<HTMLInputElement>): void => {
		event.preventDefault()
		setTitle(event.currentTarget.value)
	}

	const editTodoHandler = (event: MouseEvent): void => {
		if (!title) return
		editTodo(title)
		setTitle("")
	}

	const deSelectTodoHandler = (event: MouseEvent): void => {
		selectTodo(null)
	}

	if (!selectedTodo) return <></>

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
					flex: 5,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					padding: "0.5rem",
				}}
			>
				<input
					type="text"
					style={{ width: "100%", marginRight: "0.5rem" }}
					placeholder="Todo"
					value={title}
					onChange={changeTitleHandler}
				/>
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
				<button type="button" style={{ marginRight: "0.5rem" }} onClick={editTodoHandler}>
					Save
				</button>

				<button type="button" onClick={deSelectTodoHandler}>
					Cancel
				</button>
			</div>
		</div>
	)
}

export default EditTodo

