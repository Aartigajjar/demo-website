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

function SelectInput() {
  return (
    <div className="div-container" style={{textAlign:"center"}}>
    <br/>
        Fruit Name&nbsp;
        <select value="banana">
        {options.map((option)=>(
            <option value={option.value}>{option.label}</option>
        ))}
        </select>
    </div>
  )
}

export default SelectInput

  