import React, { useState } from 'react'
import Form from './Form'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import Edit from './Edit';


const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);
  const createTodo = (todo) => {
    setTodoValue([...todoValue, {id: uuidv4(), task: todo, isEdit: false, isComplete: false}]);
    console.log(todoValue);
  };

  const toggleComplete = (id) => {
    setTodoValue(
      todoValue.map((todo)=> todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo)
    )
  }

  const deleteTodo = (id) => {
    //배열에서 id가 같지 않으면 
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  }

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo)=> todo.id === id ? {...todo, isEdit: !todo.isEdit} : todo)
    )
  }

  const completeTodo = (id) => {
    setTodoValue(
      todoValue.map((todo)=> todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo)
    )
  }

  const editTask = (task, id) => {
    setTodoValue(
      todoValue.map((todo)=> todo.id === id ? {...todo, task: task, isEdit: false} : todo)
    )
  }


  return (
    <div className='container'>
      <Form createTodo={createTodo}/>

      {
        [...todoValue].sort((a,b) => a.isComplete - b.isComplete).
        map((todo, idx) => {
          return todo.isEdit ? (
            <Edit key={idx} task={todo} editTask={editTask}/>
          ) : (
            <Todo key={idx} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} completeTodo={completeTodo} toggleComplete={toggleComplete}/>
          )
        })
      }
    </div>
  )
}

export default TodoList