import React from 'react'

function Foreach() {
    const MyArray=['Aarti','Jhanvi','Sanu','Charmi'];
  return (
    <div class="container" style={{background:'red',color:'#fff'}}>
     <h2>For Each Loop Example</h2>
     {MyArray.map(name=>(<li>{name}</li>))}
    </div>
  )
}

export default Foreach