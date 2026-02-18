const setShowModal = (state) => modal.style.display = state;

const closeModal = () => {
  setShowModal('none')
  modalTaskInput.value = ""
  editId = null
}