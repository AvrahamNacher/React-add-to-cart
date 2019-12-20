import React, { useState } from 'react'


export default function Counter(props) {
    const [ count, setcount] = useState(+props.children);  // + before 'string' casts it to 'number'
    const [todo, setTodo] = useState( {
        id: 1, 
        title: "My Todo"
    }
    )

    const changeTodo = (event) => {
        // save previous info in todo, and just update the title
        setTodo( { ... todo , title: event.target.value})
    }
    return (
        <div>
            {props.children}
            <h1>You pressed {count} times</h1>
            <button onClick={() => setcount(count+1)}>Click to Increment</button>
            {todo.title}

             {/* Update Title details with text typed into the input */}
            <input type="text" onChange={changeTodo} />


        </div>
    )
}