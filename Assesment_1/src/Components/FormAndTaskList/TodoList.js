import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../../Redux/StateManage';
import { List, ListItem, ListItemText, IconButton, Paper, Typography, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState({});

  const handleToggle = (value) => {
    const newState = { ...checked, [value]: !checked[value] };
    setChecked(newState);
  };

  return (
    <Paper 
      sx={{ 
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 600,
        margin: 'auto',
        mt: 3,
        bgcolor: 'background.paper',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Your Todos
      </Typography>
      <List sx={{ width: '100%' }}>
        {todos.length === 0 ? (
          <Typography textAlign="center" color="textSecondary">
            No todos yet!
          </Typography>
        ) : (
          todos.map((todo) => (
            <ListItem 
              key={todo.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
                  <DeleteIcon />
                </IconButton>
              }
              divider
              sx={{
                padding: 1,
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <Checkbox
                checked={!!checked[todo.id]}
                onChange={() => handleToggle(todo.id)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <ListItemText
                primary={<Typography variant="subtitle1" style={{ fontWeight: 'bold', textDecoration: checked[todo.id] ? 'line-through' : 'none' }}>{todo.note}</Typography>}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="textPrimary">
                      Name: {todo.name}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="textPrimary">
                      Email: {todo.email}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="textPrimary">
                      Phone: {todo.phone}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))
        )}
      </List>
    </Paper>
  );
}

export default TodoList;
