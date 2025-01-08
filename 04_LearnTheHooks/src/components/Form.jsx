import {React,useState,useRef} from 'react'

const Form = () => {
    // const [name, setName] = useState("Anything");
    const [name, setName] = useState("");
    const input = useRef("");
    const changeValue = (evt)=>{
      // console.log(evt);
        setName(evt.target.value);
    }
    const focus = ()=>{
        // console.log(input);
        // console.log(input.current);
        input.current.focus();
    }
  return (
    <div>
        {/** 'ref' attribute in input tag is to handle dom */}
        <input type="text" value={name} onChange={changeValue} ref={input}  placeholder='Enter details here'/>
        <button onClick={focus}>Click to focus</button>
    </div>
  )
}

export default Form