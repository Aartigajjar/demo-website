import React, { useState } from 'react'

function ArrayEx() {

    const [query, setQuery] = useState("")
    const student = [
        {
            'id': 1,
            'name': 'Aarti',
            'email': 'aartigajjar@gmail.com'
        },
        {
            'id': 2,
            'name': 'Jhanvi',
            'email': 'Jhanvi@gmail.com'
        },
        {
            'id': 3,
            'name': 'Sanvi',
            'email': 'sanci@gmail.com'
        },
    ];

    const studentNew = [];


    const [list, setList] = useState(student);



    return (
        <div className='container'>
            <br />
            <div>
                <input placeholder="Enter Name/E-mail" onChange={event => setQuery(event.target.value)} />
                <button>Search</button>
            </div>
            <br />

            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {
                        student.forEach((data, index) => {
                            studentNew.push(<tr key={index}>
                                <td >{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                            </tr>)
                        })
                    }

                    {studentNew}


                </tbody>
            </table>
        </div>
    )
}

export default ArrayEx;