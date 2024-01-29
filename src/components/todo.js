import React, {useState} from 'react';

function Todo({todo, id, deleteTodo}) {
    const [text, setText] = useState(todo)
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <li className="todoBlock">
            <input type="checkbox" onChange={()=>{setIsCompleted(!isCompleted)}} value={isCompleted}/>
            <input type="text" style={isCompleted ? {textDecoration: "line-through"} : {}} value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>{deleteTodo(id)}}>DELETE</button>
        </li>
    );
}

export default Todo;