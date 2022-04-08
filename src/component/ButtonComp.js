import React from 'react';

function ButtonComp({ name, colorName }) {
    return (
        <div className='buttonname'>
            <button name='button' style={{ backgroundColor: colorName }}>{name}</button>
        </div>
    )
}

export default ButtonComp;