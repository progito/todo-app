const render = () => {
  taskList.innerHTML = ""

  const filteredTodos = getFilteredTodos()

  filteredTodos.forEach((todo) => {
    
    const taskItem = document.createElement('li')
    taskItem.classList.add('taskItem')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed
    checkbox.onchange = () => toggleTodo(todo.id)
  
    const spanText = document.createElement('span')
    // spanText.style.flex = '1'
    // spanText.style.marginLeft = '12px'
    spanText.classList.add('taskText')
    spanText.textContent = todo.title
    
    if (todo.completed) {
      spanText.classList.add('completed')
    }

    const divButtons = document.createElement('div')
    divButtons.classList.add('taskActions')
    
    // Кнопка Редактирования задачи
    const taskEditButton = document.createElement('button')
    const taskEditIcon = document.createElement('i')
    // <i class="fa-regular fa-pen-to-square"></i>
    taskEditButton.classList.add('btnSquare')
    taskEditIcon.classList.add('fa-regular', 'fa-pen-to-square')
    taskEditButton.appendChild(taskEditIcon)
    
    taskEditButton.addEventListener('click', () => {
      editId = todo.id
      
      modalTaskInput.value = todo.title

      modalTitle.textContent = 'Редактирование задачи'

      modalCreateAction.textContent = 'Сохранить'

      setShowModal('flex')
    })

    // Кнопка Удаления задачи
    const taskRemoveButton = document.createElement('button')
    const taskRemoveIcon = document.createElement('i')
    // <i class="fa-solid fa-trash"></i>
    taskRemoveButton.classList.add('btnSquare', 'btnRemove')
    taskRemoveIcon.classList.add('fa-solid', 'fa-trash')
    taskRemoveButton.appendChild(taskRemoveIcon)

    taskRemoveButton.addEventListener('click', () => {
      deleteTodo(todo.id)
    })

    
    divButtons.appendChild(taskEditButton)
    divButtons.appendChild(taskRemoveButton)

    taskItem.appendChild(checkbox)
    taskItem.appendChild(spanText)
    taskItem.appendChild(divButtons)
    taskList.appendChild(taskItem)
    closeModal()
  })

  
}

// INIT
loadTodos()
render()