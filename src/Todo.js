import React from 'react'
import './Todo.css'

function Todo({AddItem}) {
    const [state, setState] = React.useState({
        AddItem: ""
      })
      function handleChange(evt) {
        setState({ AddItem: evt.target.value });
      }

    return (
    <div class="card">
    <div class="card-body">
    <div className='background'>
            <div id="myDIV" class="header">
                <h2>ToDo List</h2>
            </div>
            <div>
            </div>
            <div class="head">
                <input type="text" onChange={handleChange} id="myInput" class="texthead" placeholder="Add a Items" />
                <button  class="addBtn" >+</button>
            </div>

            <ul id="myUL">
                <li><button  class="addBt"><b>×</b></button>Buy Apple</li>
                <li><button  class="addBt"><b>×</b></button>Buy Orange</li>
                <li><button  class="addBt"><b>×</b></button>Buy Mango</li>
                <li><button  class="addBt"><b>×</b></button>Buy Banana</li>
            </ul>
        </div>
    </div>
  </div>
        
    )
}

export default Todo