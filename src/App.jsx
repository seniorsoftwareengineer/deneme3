import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from"./components/TodoCreate"
import TodoList from"./components/TodoList"
import axios from 'axios'
function App() {

  const [Todos,setTodos]=useState([]);

  const createTodo = async function(newTodo){
    
      const request={
        content:newTodo
      }
        
      

      const result = await axios.post("http://localhost:2000/api/todos",request);
      Todos.push(result.data);
      setTodos(Todos);
 
      console.log(newTodo);

  }

  return (
  <div className='app'>
    <div style={{width:"100%",height:"100%", display:"flex", flexDirection:"column" ,justifyContent:"center",alignItems:"center"}}>
    <TodoCreate create={createTodo}/>
    <div style={{width:"100%", display:"flex",justifyContent:"center",boxSizing:"border-box",marginTop:"10px"}} ><TodoList/></div>
    </div>
  </div>)
}

export default App
