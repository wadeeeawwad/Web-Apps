import React from "react";
import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Typography } from "@material-ui/core";

const App = () => {

  const [todos, setTodos] = useState([]);

  const Local_Storage_Key = "react-todo-list-todos";

useEffect(()=>{
  const storageTodo = JSON.parse(localStorage.getItem(Local_Storage_Key)) 
  if(storageTodo)
  setTodos(storageTodo)
},[])

useEffect(()=>{
  localStorage.setItem(Local_Storage_Key,JSON.stringify(todos))

},[todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const DeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
 
  const DeleteAll = () => {
    setTodos([]);
  };


  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <Typography style={{padding:12}} variant="h1">React ToDo App</Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} DeleteTodo={DeleteTodo} DeleteAll={DeleteAll} />
    </div>
  );
};
export default App;
