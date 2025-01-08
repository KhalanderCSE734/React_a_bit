import React,{ useCallback, useState } from 'react'
import CallBackComponent from './CallBackComponent'


const UseCallBack = () => {
    // console.log("Learning 'useCallback' Hook");
    const [count,setCount] = useState(0);
    const [char,setChar] = useState("Hey There");

    const getChar = ()=>{
      return "Hai Guys";
    }

    
    
  return (
    <>
        <CallBackComponent adjective={char} getChar={getChar}/>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
  )
}

export default UseCallBack