import React from "react"
import AddTodo from "../components/AddTodo"
import TodoList from "../components/TodoList"

type Props = {}

const Home = (props: Props) => {
	return (
		<main
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<section
				style={{
					width: "35%",
					padding: "1rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "0.5rem",
					border: "1px solid red",
				}}
			>
				<h3>My Todo List</h3>
				<AddTodo />
				<TodoList />
			</section>
		</main>
	)
}

export default Home

