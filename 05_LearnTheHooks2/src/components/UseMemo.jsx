import React,{ useMemo, useState } from 'react';


let nums = new Array(30_000_000);
nums.fill(0);
// console.log(nums);
nums = nums.map((_,ind)=>{
    return {
        index:ind,
        isMagical:ind===29_000_000
    }
 })
//  console.log(nums);

const UseMemo = ()=>{
    const [number,setNumber] = useState(nums);
    const [count,setCount] = useState(0);
    /*
    const magical = number.find((item)=>{
        return item.isMagical===true;
    })      //So the above computations is very large and whenver a component re-renders it will execute all the time, so to avoid that, we use 'useMemo'
    // console.log(magical);
    */
    const magical = useMemo(()=>{ 
        return number.find((item)=>{
            return item.isMagical===true;
        })
    },[number]);      //So by using 'useMemo' hook, we'll be able to do the rendering only once, this complex computation doesn't render again and again and one more argument is dependency array

    // Whenever we use components in our 'React' Those components also re-render when the state get changed, so we can use 'Memo' over there, so that that componenet will re-render only when the 'props' get changed
    
    return(
        <>
            <h1>Magical Number is {magical.index}  {magical.isMagical.toString()}</h1>
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount(prev=>prev+1)
                if(count==20){
                    setNumber(new Array(10_000_000).fill(0).map((_,ind)=>{
                        return {
                            index:ind,
                            isMagical:ind===9_000_000
                        }
                    }))
                }
            }}>Increase</button>
        </>
    )
}


export default UseMemo;