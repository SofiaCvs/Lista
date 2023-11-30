
import React, { useState } from 'react';
import './styles/App.css'
import { TaskList } from "./components/TaskList";
import { AddTaskForm } from "./components/AddTaskForm";
import { FilterOptions } from "./components/FilterOptions";
import { TaskItem } from "./components/TaskItem";
import { TaskNewButton } from "./components/TaskNewButton";
import { TaskCounter } from "./components/TasksCounter";

const tasks = [
  { text: 'Water', completed: true },
  { text: 'Fruit', completed: false },
  { text: 'Vegetables', completed: true },
  { text: 'Legumes', completed: false },
  { text: 'Grains', completed: false },
];

function App() {
  const [task, setTask] = React.useState(tasks);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan: ' + searchValue);

  const searchedTasks = tasks.filter((task) => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  });
  console.log('Has buscado: ' + searchValue);
  
  const completedTasks = task.filter(
    task => !!task.completed).length;
  const totalTasks = task.length;
  const taskComplete = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };
  const taskDelete = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };
  return (
    <>
      <div className='App'>
        <TaskNewButton>
          <AddTaskForm>
            <TaskList>
              {task.map(task => (
                <TaskItem
                  key={task.text}
                  text={task.text}
                  completed={task.completed}
                />
              ))}
            </TaskList>
            <FilterOptions searchValue={searchValue}
              setSearchValue={setSearchValue}></FilterOptions>

          </AddTaskForm>
        </TaskNewButton>
      </div>
      <div>
        <TaskCounter completed={completedTasks}
          total={totalTasks} />
      </div>
    </>
  );
}

export default App