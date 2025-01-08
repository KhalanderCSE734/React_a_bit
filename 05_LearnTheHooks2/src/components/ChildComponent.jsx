import React, { useContext } from 'react'
import { LoginContext } from '../App'
import { counterContext } from '../Context/context';
const ChildComponent = () => {
    const login = useContext(LoginContext);
    const value = useContext(counterContext);
    // console.log(login);
  return (
    <div>
        ChildComponent
        <h2>{value.count}</h2>
    </div>
  )
}

export default ChildComponent