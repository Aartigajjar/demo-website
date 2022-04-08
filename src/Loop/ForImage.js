import React, { useState } from 'react'
import image from '../Pic/1.jpg'


function ForImage() {
  // const [row, setRow] = useState(['1.jpg', '2.jpg', '3.jpg']);
  const image=['1.jpg','2.jpg','3.jpg']
  // for (var i = 0; i < 3; i++) {
  //   return setRow(row);
  // }

  return (
    <div>
    { items.map((item,index) => 
      (<div key={index}> Hello World {item} </div>) )}
      <img src={row} />
    </div>
  )
}

export default ForImage