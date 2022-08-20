import React, { createContext, ReactNode, useContext, useState } from "react"
import { TodoContextType, TodoType } from "../types/todo"

type Props = {
	children?: ReactNode
}

const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider = ({ children }: Props) => {
	const [todos, setTodos] = useState<TodoType[]>([])
	const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null)

	const addTodo = (title: string) => {
		const newTodo: TodoType = {
			id: Math.floor(Math.random() * 10e4),
			title,
			completed: false,
		}
		setTodos((todos) => [...todos, newTodo])
	}

	const selectTodo = (id: number | null) => {
		setSelectedTodoId(id)
	}

	const toggleTodo = (id: number) => {
		const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		setTodos(newTodos)
	}

	const editTodo = (title: string) => {
		const newTodos = todos.map((todo) => (todo.id === selectedTodoId ? { ...todo, title } : todo))
		setTodos(newTodos)
		selectTodo(null)
	}

	const deleteTodo = (id: number) => {
		const newTodos = todos.filter((todo) => todo.id !== id)
		setTodos(newTodos)
	}

	const value: TodoContextType = {
		todos,
		selectedTodoId,
		selectTodo,
		addTodo,
		toggleTodo,
		editTodo,
		deleteTodo,
	}

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

const useTodoContext = () => useContext(TodoContext) as TodoContextType

export default useTodoContext

