import React from 'react'
import ChildComponent from './ChildComponent'
import { counterContext } from '../Context/context'
import { useContext } from 'react'
const MainComponent = () => {
  const value = useContext(counterContext);
  return (
    <div>
        MainComponent
        <button onClick={()=>{value.setCount(prev=>prev+1)}}>Change Count</button>
        <ChildComponent />
    </div>
  )
}

export default MainComponent