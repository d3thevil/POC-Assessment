import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/Routing/HomePage';
import TodoTaskView from './Components/Routing/TodoTaskView';
import { Button, Box, Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Button component={Link} to="/" color="primary" variant="contained" sx={{ mr: 2 }}>
          Home
        </Button>
        <Button component={Link} to="/todo-task-view" color="secondary" variant="contained">
          View Tasks
        </Button>
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-task-view" element={<TodoTaskView />} />
      </Routes>
    </Container>
  );
}

export default App;
