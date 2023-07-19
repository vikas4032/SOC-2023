import React from 'react'
import {Todoitem} from "./Todoitem"
export const Todos = (prop) => {
  let i = 0
  return (
    <div className = "container">
      <h3 className = "my-3">
        Todos List
      </h3>
      {prop.todos.length==0 ? "No todos to display":
      prop.todos.map((todo)=>{
        return <Todoitem todo = {todo} key = {todo.sno} onDelete = {prop.onDelete}/>
      })
        }

      
      
    </div>
  )
}
