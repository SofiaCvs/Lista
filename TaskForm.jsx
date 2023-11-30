import './TaskForm.css'

function TaskForm() {
  return (<form >
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

export { TaskForm };