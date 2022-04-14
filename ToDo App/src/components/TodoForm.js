import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button,TextField } from '@material-ui/core';
import { List } from '@material-ui/core';
function TodoForm({addTodo}) {
    const [todo,setTodo]=useState({
        task:"",
        id:"",
        completed:false

    })
    const onChangeHandller=(e)=>{
        setTodo({...todo,task:e.target.value})
    }
    const submitAddtodoHandller=(e)=>{
        e.preventDefault();
        addTodo({...todo,id: uuidv4()})
        setTodo({...todo,task:""})
    }
  return (
    
    <form className='todo-form' onSubmit={submitAddtodoHandller}>
    <TextField type="text" label="Task" onChange={onChangeHandller} value={todo.task}/>
    <button type="submit">submit</button>
    
    
    
    
    </form>  )
}

export default TodoForm