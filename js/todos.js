// let defaultTodos = [
//   {
//     id: 1,
//     title: 'Hello world',
//     completed: false
//   },
//   {
//     id: 2,
//     title: 'Hello Alex',
//     completed: true
//   },
//   {
//     id: 3,
//     title: 'ABCD',
//     completed: false
//   }
// ]
let todos = []

let editId = null

let searchQuery = ''

let filter = 'all'

let debounceTimer = null;

let darkTheme = false

/**
 * Todo
 * id
 * title
 * completed: false
 */

// [{}, {}, {}, .. ]

const createTodo = (title) => {
  const newTodo = {
    id: Date.now(),
    title,
    completed: false
  }

  todos.push(newTodo)

  saveTodos()

  render()
}

const updateTodo = (id, newTitle) => {
  const todoFound = todos.find(todo => todo.id === id)
  if (todoFound) {
    todoFound.title = newTitle
  }

  saveTodos()

  render()
}

const deleteTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id)

  saveTodos()

  render()
}

const toggleTodo = (id) => {
  const todoFound = todos.find(todo => todo.id === id)
  if (todoFound) {
    todoFound.completed = !todoFound.completed
  }

  saveTodos()

  render()
}

const getFilteredTodos = () => {
  let result = [...todos]

  if (filter === 'active') {
    result = result.filter(todo => !todo.completed)
  }

  if (filter === 'completed') {
    result = result.filter(todo => todo.completed)
  }

  if (searchQuery) {
    result = result.filter(todo => todo.title.toLowerCase().includes(searchQuery))
  }
  return result
}

// createTodo('купить продукты')
// updateTodo(todos[0].id, 'оплатить парковку')
// console.log(todos)