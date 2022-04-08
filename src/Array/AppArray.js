import React from 'react';

function AppArray() {
    const MyArray=['Aarti','Sanvi','Jhanvi','Naman'];
  return (
    <div>
    <h1>Example of Array Loop</h1>
    {MyArray.map(name=>
        (<li>{name}</li>))}
    </div>
  )
}

export default AppArray;