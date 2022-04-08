import React from 'react'

function Eventex() {
    const simpleClick =()=>{
        console.log("simple click event");
    }
  return (
    <div>
    
    <button onClick={simpleClick}>Click</button>
     </div>
  )
}

export default Eventex