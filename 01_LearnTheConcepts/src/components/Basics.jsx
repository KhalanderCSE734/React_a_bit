/*
/*                                                          Initial Learnings * /

import React from 'react';
import { useState } from 'react';
import './style.css';
import Card from './Card';
const Basics = ()=>{
    const [count,setCount] = useState(0);
    const increaseOne = ()=>{
        setCount(count+1);
    }
    const decreaseeOne = ()=>{
        setCount(count-1);
    }
    const increaseTwice = ()=>{
        setCount((pre)=>{
            return pre+2;
        });
    }
    const decreaseTwice = ()=>{
        setCount(pre=> pre-2);
    }
    return(
        <>
            <h1>Counter: {count} </h1>
            <button onClick={increaseOne} className="m-10">Click To Increase by 1</button>
            <button onClick={decreaseeOne}>Click To decrement by 1</button>
            <br />
            <br /> 
            <button onClick={()=>{increaseTwice()}} className="mr-10">Click To Increase by 2</button>
            <button onClick={()=>{decreaseTwice()}} className="mb-10">Click To decrement by 2</button>     
        </>
    )
}

export default Basics;  */





/*                                                Learning to Handle Props                       

import React from 'react';
import Card from './Card';

const Basics = ()=>{

    return(
        <>
            <Card />
        </>
    )
}

export default Basics;

*/


/*                                                Passing props   


import React from 'react';
import Card from './Card';

const Basics = ()=>{
    let desc = {
        image:"cat.png",
        role:"Web Dev"
    }
    let insta = [10,"3k","1k"];
    return(
        <>
            <Card name="Cat" desc={desc} insta={insta}/>
        </>
    )
}

export default Basics;

*/


/*                                           Handling multiple cards  */

import React from 'react';
import Card from './Card';

const Basics = ()=>{
    let desc = {
        image:"cat.png",
        role:"Web Dev"
    }
    let insta = [10,"3k","1k"];
    return(
        <>
         <div className="container grid grid-cols-2 grid-rows-2 gap-x-3 px-20">
            <Card name="Cat" desc={desc} insta={insta}/>
            <Card name="Elephant" desc={{image:"elephant.png",role:"App Dev"}} insta={[20,"4k","2k"]}/>
            <Card name="Dog" desc={{image:"dog.png",role:"Cyber-Security"}} insta={[30,"2k","1k"]}/>
            <Card name="Lion" desc={{image:"Lion.png",role:"BlockChain"}} insta={[50,"8k","1k"]}/>
            <Card />        
         </div>
        </>
    )
}

export default Basics;


