import React from 'react'
import Todo from './Todo'

function TodoList({todos,DeleteAll,DeleteTodo,toggleComplete}) {
    const DeleteAllHandller=()=>{
        DeleteAll()
    }
  

  return (
      
    
    <ul>
{todos.map(todo=>(
    <Todo key={todo.id} todo={todo} DeleteTodo={DeleteTodo} toggleComplete={toggleComplete}/>
)

    
)}   
<button onClick={DeleteAllHandller}>DeleteAll</button>

</ul>

    
  )
}

export default TodoList