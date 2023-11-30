import '/src/styles/TaskItem.css';


function TaskItem({ text, completed, onCompleted, onDelete }) {
  const handleToggleComplete = () => {
    onCompleted();
  };

  return (
    <li className={`TaskItem ${completed ? 'completed' : ''}`}>
      <span className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`} onClick={handleToggleComplete}>V</span>
      <p className={`TaskItem-p ${completed ? 'TaskItem-p--complete' : ''}`}>{text}</p>
      <span className="Icon Icon-delete" onClick={onDelete}>X</span>
    </li>
  );
}

export { TaskItem };
