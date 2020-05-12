import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/MainReducer'
import ToDoList from './components/ToDoList'
import Form from './components/Form'

function App() {

  const [state, dispatch ] = useReducer(reducer, initialState)
  
  const onInputChange = e => {
    dispatch({type: 'SET_TODO_INPUT', payload: e.target.value})
  }

  const onTodoSubmit = e => {
    e.preventDefault()

    const newTodo = {
      item: state.todoInput,
      completed: false,
      id: Date.now()
    }

    dispatch({type: 'SET_NEW_TODO', payload: newTodo})
  }

  const onToggle = e => {
    dispatch({type: 'TOGGLE_COMPLETED', payload: e.target.id})
  }

  const onClearSubmit = e => {
    e.preventDefault()
    dispatch({type: 'CLEAR'})
  }

  return (
    <div className="App">
      <Form onInputChange={onInputChange} onTodoSubmit={onTodoSubmit} inputValue={state.todoInput} onClearSubmit={onClearSubmit}/>
      <ToDoList onToggle={onToggle} todoList={state.todo}/>
    </div>
  );
}

export default App;
