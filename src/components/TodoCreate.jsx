import React from 'react'
import {useState} from "react"


function TodoCreate({create}) {

    const [newtodo,setnewtodo] = useState("");

    console.log("deneme");
  return (
        <div className ="todo-create">
            <input value={newtodo} onChange={function(e){setnewtodo(e.target.value)}} className="todo-input" type="text" placeholder="Todo giriniz"/>
            <div style={{width:"500px",display:"flex",justifyContent:"end"}}>
            <button onClick={function(e){create(newtodo); console.log("deneme")}} className="todo-button">Todo oluştur</button>
            </div>
        </div>
    )
}

export default TodoCreate