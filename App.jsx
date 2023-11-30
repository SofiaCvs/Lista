import { useState } from 'react'
import ReactDOM from "react-dom/client";
import './App.css'
import { TaskForm } from "/src/TaskForm.jsx";
import { TaskItem } from "/src/TaskItem.jsx";
import { TaskList } from '/src/TaskList.jsx'
import { NewButton } from '/src/TaskNewButton.jsx'

const tasks = [
  { text: 'Water', completed: true },
  { text: 'Fruit', completed: false },
  { text: 'Vegetables', completed: true },
  { text: 'Legumes', completed: false },
  { text: 'Grains', completed: false },
];

function App() {
  // const [count, setCount] = useState(0);
  const [task, setTask] = useState(tasks);

  return (
    <>
      <div className='App'>
      <h1>Vite + React</h1>
      <TaskList>
        {task.map(task => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </TaskList>
      <TaskForm />
      <NewButton>
      </NewButton>
      </div>


    </>
  )
}

export default App
