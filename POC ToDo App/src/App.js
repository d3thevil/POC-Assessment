import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

function App() {
  // State for tasks, email, mobile, and error flags for email and mobile
  const [tasks, setTasks] = useState([]);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  // Function to validate email format
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));
  };

  // Function to validate mobile format
  const validateMobile = () => {
    const mobileRegex = /^[0-9]{10}$/;
    setMobileError(!mobileRegex.test(mobile));
  };

  // Function to add a new task
  const addTask = () => {
    // Checking the error and empty inputs before adding the task
    if (emailError || mobileError || email.trim() === '' || mobile.trim() === '') {
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(),
      email,
      mobile,
    };

    // Update tasks state with the new task and reset input fields
    setTasks([...tasks, newTask]);
    setEmail('');
    setMobile('');
  };

  // Function to delete a task by ID
  const deleteTask = (taskId) => {
    // Filter out the task with the provided ID
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Update tasks state with the filtered tasks
    setTasks(updatedTasks);
  };

  // Render the UI
  return (
    <div id="app-container">
      <h1>ToDo App</h1>
      <div className="input-container">
        {/* Input fields for email and mobile */}
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          error={emailError}
          helperText={emailError ? 'Invalid email format' : ''}
        />
        <TextField
          label="Mobile"
          variant="outlined"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          onBlur={validateMobile}
          error={mobileError}
          helperText={mobileError ? 'Invalid mobile number format' : ''}
        />
        {/* Button to add a new task */}
        <Button variant="contained" color="primary" onClick={addTask}>
          Add
        </Button>
      </div>
      {/* Display the list of tasks */}
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} className="list-item-container">
            {/* Display task details */}
            <div>
              <Typography variant="subtitle1">
                <strong>Email:</strong> {task.email}
              </Typography>
              <Typography variant="subtitle2">
                <strong>Mobile:</strong> {task.mobile}
              </Typography>
            </div>
            {/* Button to delete the task */}
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
