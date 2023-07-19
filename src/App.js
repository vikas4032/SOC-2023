import "./App.css";
import Header from "./Mycomponents/header"
import {Footer} from "./Mycomponents/Footer"
import {Todos} from "./Mycomponents/Todos"
import {Addtodo} from "./Mycomponents/addtodo"
import React, { useState } from 'react'



function App() {
  const onDelete = (todo)=> {
    console.log("I am deleted",todo);
    if(todo.length==0){
      console.log("sab saaf")
    }
    settodos(todos.filter((e)=>{
      return e!==todo;
    }));

  }

  const [todos,settodos] = useState([
    {sno: 1,
    title: "go to the market",
    desc: "you need to go to market to get new clothes"},
    {
      sno: 2,
      title: "go to school",
      desc : "you should go to school to get education"
    },
    {
      sno:3,
      title: "square off",
      desc : "its 3:30, square off all intraday postions"
    }
  ])
  return (
    <>
      <Header title={"My Todos List"} searchbar = {true}/>
      <Addtodo addtodo = {adddtodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <h1>viki</h1>
      <Footer/>
    </>
  );
}

export default App;
