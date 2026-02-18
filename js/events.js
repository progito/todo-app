addButton.addEventListener('click', () => {
  modalTitle.textContent = 'Создание задачи'
  modalCreateAction.textContent = 'Создать'
  setShowModal('flex')
})

modalCancelAction.addEventListener('click', () => {
  closeModal()
})

modalCreateAction.addEventListener('click' , () => {
  const titleTask = modalTaskInput.value.trim()

  if (!titleTask) return

  if (editId) {
    updateTodo(editId, titleTask)
  } else {
    createTodo(titleTask)
  }

  closeModal()

})

searchInput.oninput = (e) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    searchQuery = e.target.value.toLowerCase()
    console.log(searchQuery)
    render()
  }, 500)
}

filterSelect.onchange = (e) => {
  filter = e.target.value
  render()
}

themeToggle.addEventListener('click', () => {
  darkTheme = !darkTheme;

  document.body.classList.toggle('dark')

  themeToggle.innerHTML = darkTheme 
    ? `<i class="fa-regular fa-sun"></i>`
    : `<i class="fa-regular fa-moon"></i>`
})