import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './Todolist.css';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editableIndex, setEditableIndex] = useState(-1);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, isEditing: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isEditing = true;
    setTasks(updatedTasks);
    setEditableIndex(index);
  };

  const saveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isEditing = false;
    setTasks(updatedTasks);
    setEditableIndex(-1);
  };

  return (
    <div className='todo1'>
        <header className="header">
        <img
          src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
          alt="Logo"
          className="logo"
        />
        <nav className="links">
          <Link to="/Second">Menu</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Feedback">Feedback</Link>
          <Link to="/Assignment">Assignment</Link>
          <Link to="/Certificate">Certificate</Link>
        </nav>
      </header>
    <div className="TodoApp">
      <h1 className='Todolist'>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className='list'>
        {tasks.map((task, index) => (
          <li key={index} className="task">
            {task.isEditing ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => {
                  const updatedTasks = [...tasks];
                  updatedTasks[index].text = e.target.value;
                  setTasks(updatedTasks);
                }}
                className="edit-input"
              />
            ) : (
              task.text
            )}
            {task.isEditing ? (
              <button className="save-button" onClick={() => saveTask(index)}>
                Save
              </button>
            ) : (
              <button className="edit-button" onClick={() => editTask(index)}>
                Edit
              </button>
            )}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Todolist;