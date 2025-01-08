import { createContext, useState, useRef, useEffect } from 'react'
import './App.css'
import MainComponent from './components/MainComponent'
import { counterContext } from './Context/context';
import UseMemo from './components/UseMemo';
import UseCallBack from './components/UseCallBack';

  // 'CreateContext' Hook in React
  /**
   * Creat Context hook is used to 
   *        In order to use variable in all other components without passing props
   */
  
  export const LoginContext = createContext();


function App() {



    /*  const [count1,setCount1] = useState(0);
      const changeCount = ()=>{
        setCount1(prev => prev+1);
      }
      const count = useRef(0);

      useEffect(()=>{
        // setCount(prev=> prev + 1);
        //If we do this it will re-render the component every time, instead we can do it with 'useRef'
          count.current = count.current+1;
          // console.log(count.current);
      })
  */

    //  const [count,setCount] = useState(0);

    // useMemo HOOK




  return (
    <>
      {/* <h1>Hello</h1> */}


      {/* <LoginContext.Provider value={'My Name is Name'}>
          <MainComponent />
      </LoginContext.Provider> */}



      {/* <h1>{count}</h1>
      <button onClick={()=>{changeCount()}} >Click </button> */}


      {/* <h1>{count1}</h1>
      <p>useState</p>
      <h1>{count.current}</h1>
      <p>useRef</p>
      <button onClick={()=>{changeCount()}} >Click </button> */}


          {/* useContext hook */}
        {/* <counterContext.Provider value={{count,setCount}}>
          <MainComponent/>
          <h1>Count</h1>
          <h1>{count}</h1>
          <button onClick={()=>{setCount(prev=>prev+1)}}> Click to Increase </button>
        </counterContext.Provider> */}

          {/* useMemo Hook */}

          {/* <UseMemo/> */}


          {/* <UseCallBack/> */}


    </>
  )
}

export default App
