import React, { useState } from "react";
import AppTodoComp from "./AppTodoComp";
import './AppToDo.css';
import {FaTimesCircle} from 'react-icons/fa'

const Apptodo = () => {
    const [inputlist, setinputlist] = useState('');
    const [items, setitems] = useState([]);

    const itemevent = (event) => {
        setinputlist(event.target.value);

    }

        const deleteItems =(id)=>{
            setitems(
                (olditems)=>{
                    return olditems.filter((arrElement,index)=>{
                        return index !=id;
                    })
                }
            )
        }
    

    const ListOfItems = () => {
        setitems((olditems) => {
            return [...olditems, inputlist];
        })
        //setinputlist("");
    }


    return (
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" value={inputlist} name="name" placeholder="Add a Items" onChange={itemevent} />
                 <button onClick={ListOfItems}>+</button>
                
                <ol>
                    {
                        items.map((data,key)=>{
                           return (
                                <li  key={key}><FaTimesCircle className="fa-times" id={key} onClick={e=>deleteItems(key)} />{data}</li>
                            )
                        })
                    }
                </ol>

            </div>
        </div>
    )
}
export default Apptodo;