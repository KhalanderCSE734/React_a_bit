/*import { useState } from 'react';
import './style.css';



function App() {
  const [color,setColor] = useState("white");

  return (
    <>
     <div className="container" style={{backgroundColor:`${color}`}}>
        <div className="options">
          <button className="btn" style={{color:"red"}} onClick={()=>{setColor("red")}} >Red</button>
          <button className="btn" style={{color:"lightseagreen",width:"150px"}} onClick={()=>{setColor("lightseagreen")}} >Light Sea Green</button>
          <button className="btn" style={{color:"Blue"}} onClick={()=>{setColor("blue")}} >Blue</button>
          <button className="btn" style={{color:"pink"}} onClick={()=>{setColor("pink")}} >Pink</button>
          <button className="btn" style={{color:"Yellow"}} onClick={()=>{setColor("yellow")}} >Yellow</button>
          <button className="btn" style={{color:"magenta"}} onClick={()=>{setColor("magenta")}} >Magenta</button>
          <button className="btn" style={{color:"brown"}} onClick={()=>{setColor("brown")}} >Brown</button>
        </div>
    </div>
    </>
  )
}

export default App  */









import { useState } from 'react';
import './style.css';
import Button from './Components/Button'



function App() {
  const [color,setColor] = useState("white");
  
 /* In JavaScript, 'Event Delegation' is a technique where you add an event listener to a parent element and handle events from its children using properties like .target or .closest. React simplifies this process but retains the same principles.

React allows you to handle child events through the parent by passing the event object (SyntheticEvent in React). */


  const changeColor = (event)=>{
    // console.log(event);    // This will give synthetic event (SyntheticBaseEvent) explore it in console
    // console.log(event.target);
    if(event.target.classList.contains("btn")){
      // console.log(event.target);
      // console.log(event.target.innerText);
      // console.log((event.target.innerText).split(' ').join('').toLowerCase());
      setColor((event.target.innerText).split(' ').join('').toLowerCase());
    }
  }

  return (
    <>
     <div className="container" style={{backgroundColor:`${color}`}}>
        <div className="options" onClick={changeColor}>
          <button className="btn" style={{color:"red"}} >Red</button>
          <button className="btn" style={{color:"lightseagreen",width:"150px"}}  >Light Sea Green</button>
          <button className="btn" style={{color:"Blue"}}  >Blue</button>
          <button className="btn" style={{color:"pink"}} >Pink</button>
          <button className="btn" style={{color:"Yellow"}} >Yellow</button>
          <button className="btn" style={{color:"magenta"}}  >Magenta</button>
          <button className="btn" style={{color:"brown"}} >Brown</button>
          <Button color="Olive" btn="btn" Scolor="olive"/>
        </div>
    </div>
    </>
  )
}

export default App
