import React from 'react';

function EditTextComp({name}) {
  return (
    <div className='edittext'>
    <input type="text" placeholder={name}/>
    </div>
  )
}

export default EditTextComp;