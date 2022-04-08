import React from 'react'

function For()
 {
    const printNumbers0to5=()=>
    {
        const row=['Aarti','Sanvi','Jhanvi'];
        for(var i=0; i<row.length; i++)
        {
             return row;   
        }
       // return row;
    }
    return (
    <div>
    {
       printNumbers0to5()
    }
    </div>
  )
}

export default For