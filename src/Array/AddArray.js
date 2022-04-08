import React, { useState } from 'react'

function AddArray() {
    const [emp, setemp] = useState([
        { name: 'Aarti', experience: '10+ Years' },
        { name: 'Mayank', experience: '5 Years' },
        { name: 'Sanvi', experience: '3 Years' },
    ])

    const addrow = () => {
        let newemp = { name: "Jhanvi", experience: "6 Years" }
        setemp([...emp, newemp])
    }

    const updaterow = () => {
        let index = 0
        let newemp = emp[index]
        newemp["name"] = "Naman";
        emp[index] = newemp
        setemp([...emp])
    }

    const deleterow = () => {
        let name = "Sanvi"
        setemp(emp.filter(emp => emp.name !== name))
    }

    return (
        <div>
            {emp.map((emp, index) =>
            (
                <div key={index}>
                    <h3>{emp.name}</h3>
                    <p>{emp.experience}</p>
                </div>
            ))}
            <button onClick={addrow}>Add</button>
            <button onClick={updaterow}>Update</button>
            <button onClick={deleterow}>Delete</button>
        </div>
    )
}

export default AddArray