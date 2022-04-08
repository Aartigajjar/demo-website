import React, { useEffect, useRef, useState } from 'react'

function RefComp() {
    const[inputValue, setInputValue]=useState("");
    const count=useRef(0);
    
    useEffect(()=>{
        count.current=count.current+1;
    }
    )

  return (
    <center>
    <br/>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <h1>Rendered Count:{count.current}</h1>
    </center>
  )
}

export default RefComp