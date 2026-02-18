const saveTodos = () => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(todos)
  )
}

const loadTodos = () => {
  const data = localStorage.getItem(STORAGE_KEY)

  if (data) {
    todos = JSON.parse(data)
  }
}