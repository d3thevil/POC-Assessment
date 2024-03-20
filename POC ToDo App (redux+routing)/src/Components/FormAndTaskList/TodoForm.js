import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateFormField } from '../../Redux/StateManage';
import { Button, Box, TextField } from '@mui/material';

function TodoForm() {
  const formState = useSelector((state) => state.todos.form);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    note: '',
    name: '',
    email: '',
    phone: '',
  });

  function handleInputChange(event) {
    dispatch(updateFormField({
      field: event.target.name,
      value: event.target.value,
    }));
    setErrors({ ...errors, [event.target.name]: '' });
  }

  function validateForm() {
    let isValid = true;
    let newErrors = {};
    const isNoteDuplicate = todos.some(todo => todo.note === formState.note);
    if (isNoteDuplicate) {
      newErrors.note = 'This note has already been submitted.';
      isValid = false;
    }
    const isNameDuplicate = todos.some(todo => todo.name === formState.name);
    if (isNameDuplicate) {
      newErrors.name = 'This name has already been used.';
      isValid = false;
    }
    const isEmailDuplicate = todos.some(todo => todo.email === formState.email);
    if (isEmailDuplicate) {
      newErrors.email = 'This email has already been used.';
      isValid = false;
    }
    const isPhoneDuplicate = todos.some(todo => todo.phone === formState.phone);
    if (isPhoneDuplicate) {
      newErrors.phone = 'This phone number has already been used.';
      isValid = false;
    }

    if (formState.note.length < 5) {
      newErrors.note = 'Note must be at least 5 characters long.';
      isValid = false;
    } else if (formState.note.length > 254) {
      newErrors.note = 'Note must be less than 255 characters.';
      isValid = false;
    }

    if (!formState.name || formState.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formState.phone.replace(/[\s()-]/g, ''))) {
      newErrors.phone = 'Invalid phone number. Must be 10 digits.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      dispatch(addTodo());
    }
  }
  
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        maxWidth: 'sm',
        width: '100%',
        '& > :not(style)': { m: 1, width: '75%' },
      }}
    >
      <h1>ToDo App</h1>
      <TextField
        name="note"
        label="Note"
        value={formState.note}
        onChange={handleInputChange}
        error={!!errors.note}
        helperText={errors.note}
        margin="normal"
        multiline={true}
        rows={4}
        sx={{ width: '100%', fontSize: '1rem' }}
      />
      <TextField
        name="name"
        label="Name"
        value={formState.name}
        onChange={handleInputChange}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        value={formState.email}
        onChange={handleInputChange}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        name="phone"
        label="Phone"
        value={formState.phone}
        onChange={handleInputChange}
        error={!!errors.phone}
        helperText={errors.phone}
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  ); 
}

export default TodoForm;
