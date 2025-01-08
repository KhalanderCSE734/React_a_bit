import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import ConditionalRendering from './components/ConditionalRendering';
import CR2 from './components/CR2';
import Form from './components/Form';


const App = () => {

// Json placeholder API

//C:\Users\mohammed khalander\Videos\Screen Recordings

  //Use State Hook
  const [count,setCount] = useState(0);
  const [decreaseCount,setDecreaseCount] = useState(0);
  const [details,setDetails] = useState({
    name:"Mohammed Khalander",
    sem:2,
    College:"B.M.S.C.E",
    City:"Bengalore",
    switch:true
  });
  const increase = ()=>{
    setCount((prev)=>{
      return prev+1;
    })
  }
  
  const decrease = ()=>{
    setCount((prev)=>{
      return prev-1;
    })
  }
  
  const change = ()=>{
    setDetails((prev)=>{
      return {...prev,name:"Shailesh",switch:false}
    })
  }
  const change2 = ()=>{
    setDetails((prev)=>{
      return {...prev,name:"Mohammed Khalander",switch:true}
    })
  }  



  const increaseTwice = ()=>{
    setDecreaseCount((prev)=>{
      return prev+2;
    })
  }
  const decreaseTwice = ()=>{
    setDecreaseCount((prev)=>{
      return prev-2;
    })
  }





/*  useEffect(()=>{
    // setCount(prev => prev+1);      // This will cause infinite loop and I got it 

    //Because this will be called whenever this app component is rendered and whenever the state of anything get's changed
    // So this runs everytime because I'm changing the count variable everytime
  })    */

  // const change = (evt)=>{
    // console.log(evt.target);
    // console.log(evt.target.previousElementSibling);
    // console.log(evt.target.previousElementSibling.innerText);
  // }


  //Use Effect Hook

 /* useEffect(()=>{
    alert("Hello");
  })  */

 /* useEffect(()=>{
    alert("Only render");
  },[]);  */

 /* useEffect(()=>{
    alert("Count Was changed");
  },[count]);  */



  // useEffect(()=>{
  //   alert("Details was changed");
  // },[details]);



    // All the useEffect will render for first time for sure



  /* Case 1
  // If we use 'useEffect' without any dependency It will run every single time whenever any part of the UI get's cahnged
  useEffect(()=>{
    alert("Runs on Every Render");
  })  */

      /* Case 2
    //If we use useEffect with empty array as dependencies It will only run on first render, That's it not after that
    useEffect(()=>{
      alert("Runs Only on first render");
    },[])  */

    /*Case 3
  // If we use 'useEffect' with dependencies passed through array, for first time it'll render for sure, and it will even render whenever andy updates int the UI
    useEffect(()=>{
      alert("I'll Change every Single time whenever any UI get's updated");
    },[count,details])  */


    /* Case 4
    The return statement inside the 'useEffect'
    useEffect(()=>{
      let a = setTimeout(()=>{
        alert("I'm running after 2s inside TIMEOUT");
      },2000)
      return ()=>{
        clearTimeout(a);
      }
    })    */


    /*  useEffect(()=>{
        let a = setTimeout(()=>{
          alert("I'm running after 2s inside TIMEOUT");
          // setCount(p => p+1);
        },1000)
        return ()=>{
          clearTimeout(a);
        }
      }) */

  //UseRef Hook

  const a = useRef(0)
  // console.log(a);
  // console.log(a.current);
  /*
  useEffect(()=>{
    console.log(a);
    console.log(a.current);
    // a = a + 1;     This won't work we need to use 'a.current'
    a.current = a.current + 1;
  })
    */


  // The main thing in 'useRef' is, if we change 'state' in 'useState' hook the component gets re-rendered but if we change the useRef it won't make the component to render again
  //Example is as follows


  /*
  useEffect(()=>{
    // setCount(p => p+1)   If we do this it will cause infinite loop 
    // And the following won't because it won't render our component again
    console.log(a);
    console.log(a.current);
    a.current = a.current + 1;    // This will only execute when any other component renders (meaning when any of the UI state is changed)
  })

  */

  // We can even use 'useRef' hook to access dom elements


  const btnRef = useRef();

  // console.log(btnRef);
  // console.log(btnRef.current);
  /*useEffect(()=>{
    console.log(btnRef.current);
  },[])*/

  // useEffect(()=>{
  //   console.log(btnRef.current);
  // })



  return (
    <>
    <div className="Hook">
      <h1 className='head'>Learning Hooks</h1>
      <div>
        <h1 className='cn'>count: {count}</h1>
        <h1 className='cnt'>Double count: {decreaseCount}</h1>        
      </div>

      <div>
        <button onClick={increase}>Increase Count</button>
        <button onClick={decrease}>Decrease Count</button>
      </div>
      <div>
        <button onClick={increaseTwice}>Increase Count 2</button>
        <button onClick={decreaseTwice}>Decrease Count 2</button>
      </div>
    

    <p>My name is {details.name} I'm in {details.sem} sem I'm studying in {details.College}, {details.City} </p>
        
        <button onClick={()=>{details.switch?change():change2()}} ref={btnRef}>Change Details</button>


    {/* <ConditionalRendering /> */}

    <CR2 />
    {/* <Form /> */}



    </div>
    </>
  ) 
}

export default App