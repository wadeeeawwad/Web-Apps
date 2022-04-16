import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({todo,DeleteTodo,toggleComplete}) {
    const handleDeleteTodo=()=>{
        DeleteTodo(todo.id)
    }
    const oncheckHandler=()=>{
        toggleComplete(todo.id)
    }
  return (
    <ListItem style={{display:"flex"}}>
      <Checkbox
      checked={todo.completed}
       onClick={oncheckHandler}/>

      <Typography   variant="body1"   style={{
        textDecoration: todo.completed ? "line-through" : null
      }}
    >{todo.task}</Typography>
      <IconButton onClick={handleDeleteTodo}>
      <CloseIcon/>
      </IconButton>
    </ListItem>
  );
}

export default Todo;
