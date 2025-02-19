import React from 'react'
import { useState } from 'react';

const ConditionalRendering = () => {
 

    
  //Conditional Rendering 

  // const [showBtn,setShowBtn] = useState(true);
  const [showBtn,setShowBtn] = useState(false);
  return (
    <>
        {/* {showBtn?<button>I'm visible</button>:""} */}
    {/* Another way to do the above is the following */}
    {/* {showBtn && <button>I'm visible Here</button>} */}
    <div>
      <button onClick={()=>{setShowBtn(pre => !pre)}}>Show Side Button</button>
      {showBtn&&<button> I came </button>}
    </div> 
    </>
  )
}

export default ConditionalRendering