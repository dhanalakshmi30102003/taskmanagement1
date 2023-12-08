import React, { useState } from 'react';
import './App.css';
import TodoList from './ToDoList';
TodoList

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', deadline: '' });

  const addTask = () => {
    if (newTask.name && newTask.deadline) {
      setTasks([...tasks, { ...newTask, status: 'pending' }]);
      setNewTask({ name: '', deadline: '' });
    } else {
      alert('Please enter both task and deadline.');
    }
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = updatedTasks[index].status === 'completed' ? 'pending' : 'completed';
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="topic">
      <h1>Manage Your Task</h1>
      </div>
      <TodoList tasks={tasks} onToggleStatus={toggleTaskStatus} />
      <div className='form'>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          placeholder="Enter task"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        </div>
        <div className='dead'>
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="datetime-local"
          id="deadline"
          value={newTask.deadline}
          onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
        />
        </div>
        <div className='add'>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default App;
