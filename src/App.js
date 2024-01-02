import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, {useState} from "react";
import AddItem from './MyComponents/AddItem';

function App() {
  const [todos,setTodos] = useState(
    [
    {
     sno:"1",
     title:"Eat",
     desc:"Eat food"
    },
    {
      sno:"2",
      title:"Drink",
      desc:"Drink Water"
     },
     {
      sno:"3",
      title:"Sleep",
      desc:"Sleep Well"
     }
  ]);

  const onDelete = (todo)=>{
    console.log("Delete  Pressed ",todo.sno);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title,desc)=>{
    let sno = todos[todos.length-1].sno+1;
    const newTodo=  
      {
        sno:'1',
        title:title,
        desc:desc,
      };
    setTodos([...Todos,newTodo]);
    console.log(Todos);
  }

  return (
    <>
    <Header/>
    <AddItem addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
