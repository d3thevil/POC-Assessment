import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  form: {
    note: '',
    name: '',
    email: '',
    phone: '',
  },
};

export const StateManage = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: function(state) {
      const noteExists = state.todos.some(todo => todo.note === state.form.note);
      if (noteExists) {
        return;
      }
      
      const newTodo = {
        id: Date.now(), 
        note: state.form.note,
        name: state.form.name,
        email: state.form.email,
        phone: state.form.phone,
      };
      state.todos.push(newTodo);
      state.form.note = '';
      state.form.name = '';
      state.form.email = '';
      state.form.phone = '';
    },
    
    updateFormField: function(state, action) {
      const fieldName = action.payload.field;
      const fieldValue = action.payload.value;
      state.form[fieldName] = fieldValue;
    },
    deleteTodo: function(state, action) {
      state.todos = state.todos.filter(function(todo) {
        return todo.id !== action.payload;
      });
    },
  },
});
export const { addTodo, updateFormField, deleteTodo } = StateManage.actions;
export default StateManage.reducer;
