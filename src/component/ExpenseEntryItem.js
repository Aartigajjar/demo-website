import React, { useState } from 'react'
import './ExpenseEntryItem.css'
function ExpenseEntryItem({ Item, Amount, SpendTime, Category }) {
  
  const [value, setValue] = useState({
    item: '',
    amount: '',
    spendTime: '',
    category: ''
  })
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  

  }
  return (
    <div className='EntryItem d-flex m-5 p-4 flex-column   '>
      <div>
        <h1 style={{ textAlign: 'center' }}><b>Form</b></h1>
        <label className='text-center '>Item:</label>
        <input type="text" name='item' value={value.item} onChange={handleChange} className="form-control" placeholder={Item}></input>
      </div>
      <div>
        <label className='text-left'>Amount:</label>
        <input type="text" name='amount' value={value.amount} onChange={handleChange} className="form-control" placeholder={Amount}></input>
      </div>
      <div>
        <label className='text-left'>SpendTime:</label>
        <input type="text" name='spendTime' value={value.spendTime} onChange={handleChange} className="form-control" placeholder={SpendTime}></input>
      </div>
      <div>
        <label className='text-left'>Category:</label>
        <input type="text" name='category' className="form-control" onChange={handleChange} value={value.category} placeholder={Category}></input><br />
        <button type="button" className="btn btn-primary">Submit</button>
      </div><br/>
      
<div class="container mt-3">
<h2>Form Details</h2>          
<table class="table table-striped">
  <thead>
    <tr>
      <th>Item</th>
      <th>Amount</th>
      <th>SpendTime</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{value.item}</td>
      <td>{value.amount}</td>
      <td>{value.spendTime}</td>
      <td>{value.category}</td>
    </tr>
    </tbody>
</table>
</div>
    </div>

  )
}

export default ExpenseEntryItem