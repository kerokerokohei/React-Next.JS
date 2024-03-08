import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {   //{}はjsx記法：{}内はJsのように関数などを記述可能
  return todos.map((todo) => <Todo todo = {todo} key = {todo.id} toggleTodo={toggleTodo}/>);};

export default TodoList;