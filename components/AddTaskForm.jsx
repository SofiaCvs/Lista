import '/src/styles/TaskForm.css'

export const AddTaskForm = () => {
  return (
    <form >
    <label>Añade un nueva tarea</label>
    <textarea placeholder='Nueva tarea'
    />
    <div className='TaskForm-buttonContainer'>
      <button type='submit' className='TaskForm-button TaskForm-button--cancel'>
        Cancelar
      </button>
      <button type='submit' className='TaskForm-button TaskForm-button--add'>
        Añadir
      </button></div>
  </form>);

}
