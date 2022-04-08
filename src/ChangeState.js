import React, { useState } from 'react'

function ChangeState() {
    debugger
    const [name, setname] = useState(false);
    const handleClick = () => {
        setname(
            name  ? false : true
        )
    }
    return (
        <div>
            <br />
            <center>
                <button type='button' onClick={handleClick}>{name?'hide':'show'}</button>
                {
                    name ? <h1>Aarti</h1> : null
                }
            </center>
        </div>
    )
}

export default ChangeState