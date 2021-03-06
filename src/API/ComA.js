import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ComA() {
    const[num,setNum]=useState();
    const[name,setName]=useState();
    const[moves,setMoves]=useState();

    useEffect(()=>{
        async function getdata(){
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res.data);
        setName(res.data.name)
        setMoves(res.data.moves.length)
    }
    getdata();
})

  return (
    <div>
        
        <h1>You Choose <span style={{color:"red"}}> {num} value</span> </h1>
        <h1>My name is <span style={{color:"red"}}> {name}</span></h1>
        <h1>I have<span style={{color:"red"}}> {moves} Moves</span></h1>

        <select value={num} onChange={(event)=>{
            setNum(event.target.value)
        }}>
            <option>1</option>
            <option>25</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>

    </div>
  )
}

export default ComA