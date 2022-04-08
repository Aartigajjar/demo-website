import React from 'react'

const options=[
    {
        label:"Apple",
        value:"apple",
    },
    {
        label:"Mango",
        value:"mango",
    },
    {
        label:"Banana",
        value:"banana",
    },
    {
        label:"Pinaple",
        value:"pinaple",
    },
];

function Example() {
  return (
    <div>
        <select>
        {options.map((option)=>(
            <option value={option.value}>{option.label}</option>
        ))}
        </select>
    </div>
  )
}

export default Example

  