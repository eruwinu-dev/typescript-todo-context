import React, { FormEvent, MouseEvent, useState } from "react"
import useTodoContext from "../../lib/TodoState"

type Props = {}

const AddTodo = (props: Props) => {
	const { addTodo } = useTodoContext()
	const [title, setTitle] = useState("")

	const changeTitleHandler = (event: FormEvent<HTMLInputElement>): void => {
		event.preventDefault()
		setTitle(event.currentTarget.value)
	}

	const addTodoHandler = (event: MouseEvent): void => {
		if (!title) return
		addTodo(title)
		setTitle("")
	}

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				width: "100%",
				paddingTop: "0.5rem",
				paddingBottom: "0.5rem",
				paddingRight: "0.5rem",
			}}
		>
			<input
				style={{ flex: 5, marginRight: "0.5rem" }}
				type="text"
				placeholder="Add Todo"
				value={title}
				onChange={changeTitleHandler}
			/>
			<button style={{ flex: 1 }} type="button" onClick={addTodoHandler}>
				Add
			</button>
		</div>
	)
}

export default AddTodo

