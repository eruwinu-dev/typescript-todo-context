export interface TodoType {
	id: number
	title: string
	completed: boolean
}

export type TodoContextType = {
	todos: TodoType[]
	selectedTodoId: number | null
	selectTodo: (id: number | null) => void
	addTodo: (title: string) => void
	toggleTodo: (id: number) => void
	editTodo: (title: string) => void
	deleteTodo: (id: number) => void
}

