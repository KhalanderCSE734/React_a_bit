import React from 'react'
import { useState } from 'react'
const CR2 = () => {
    const [todo, setTodo] = useState([
    {
        title:"todo1",
        desc:"DSA"
    },
    {
        title:"todo2",
        desc:"Java"
    },
    {
        title:"todo3",
        desc:"DBMS"
    }
])

console.log(todo);

  return (
    <>
       <div>
            {/* {todo}                  I can't directly access it like this */}

            {todo.map((todo,ind)=>{
                return (
                <div key={ind+1} className='todo'> 
                    <p>{todo.title}</p>    
                    <p>{todo.desc}</p>    
                </div>
                )
            })}
        </div> 
    </>
  )
}

export default CR2