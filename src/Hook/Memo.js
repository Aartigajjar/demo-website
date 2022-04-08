import React, { useState } from 'react'

const expensiveCalculation = (num) => {
    console.log(num);
    for (let i = 0; i < 0; i++) {
        num += 1;
    }
    return num;
}

function Memo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation=expensiveCalculation(count);

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };
    

    const increment = () => {
        setCount((c) => c + 1)
    };

    return (
        <div>
        <div>
        <h1>MY TODOS</h1>
        {todos.map((todo,index)=>
            {
                return<p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
            </div>

        <hr/>

            <div>
                count : {count}
                <button onClick={increment}>+</button>
                <h1>Expensive Calculation</h1>
                {calculation}
            </div>
        </div>
    )
}

export default Memo