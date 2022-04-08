import React from 'react'

function FORech() {
    const students = [
        {
          'id': 1, 
          'name': 'Hardik', 
          'email': 'haridik@gmail.com'
        },
        {
          'id': 2, 
          'name': 'Paresh', 
          'email': 'paresh@gmail.com'
        },
        {
          'id': 2, 
          'name': 'Karan', 
          'email': 'karan@gmail.com'
        },
    ];

return (
<div className="container">
  <h1>React Map Loop Example</h1>

  <table className="table table-bordered">
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
      </tr>

      {students.map((student, index) => (
        <tr data-index={index}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
        </tr>
      ))}

  </table>

</div>
);
}



export default FORech