import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { AiTwotoneEdit } from "react-icons/ai";


function Todo() {



  return (<div style={{width:"500px",display:"flex",justifyContent:"space-between",textAlign:"start", margin:"20px",border:"1px solid lightgrey",boxSizing:"border-box",padding:"15px"}}>
     <div>Todo</div>
     <div><AiTwotoneEdit /><CiCircleRemove /></div>

    
    
    </div>
    
  )
}

export default Todo