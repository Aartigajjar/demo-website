import React from 'react'

function Switch() {
    function SwitchCase(props){
        switch(props.value)
        {
            case 'Admin':
                return 'You Are A Admin';
            case 'Manager':
                return 'You Are A Manager';
            default:
                return 'You Are A User';
        }
    }
  return (
    <div>
    <h1>SWITCH EXAMPLE</h1>
    <SwitchCase value={'Admin'}/>
    </div>
  )
}

export default Switch