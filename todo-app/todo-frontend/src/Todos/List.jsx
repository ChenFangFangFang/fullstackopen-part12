/* eslint-disable react/prop-types */
import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map(todo => (
        <React.Fragment key={todo._id}>
          <Todo 
            todo={todo} 
            onDelete={deleteTodo} 
            onComplete={completeTodo} 
          />
          <hr />
        </React.Fragment>
      ))}
    </>
  )
}

export default TodoList