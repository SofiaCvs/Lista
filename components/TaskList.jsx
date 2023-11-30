import '/src/styles/TaskList.css'

export const TaskList = ( {children} ) => {
  return (
    <ul className="TaskList">
        {children}
      </ul>
  )
}
