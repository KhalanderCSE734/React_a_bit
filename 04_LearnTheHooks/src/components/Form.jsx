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

/**

import {React,useState,useRef} from 'react'

const Form = () => {
    // const [name, setName] = useState("Anything");
    const [detail, setDetail] = useState({});
    const input1 = useRef("");
    const input2 = useRef("");
    const changeValue = (evt)=>{
      // console.log(evt);
      const name = evt.target.name;
      const value = evt.target.value;
      setDetail((prev)=>{
        return {...prev,[name]:value};
      })
    }
    const focus = ()=>{
        // console.log(input);
        // console.log(input.current);
        input1.current.focus();
    }
  return (
    <div className='flex flex-col items-center justify-evenly gap-2'>
        {/** 'ref' attribute in input tag is to handle dom }
        <input type="text" name="name" value={detail.name} onChange={changeValue} ref={input1}  placeholder='Enter Name Here'/>
        <button onClick={focus} className="w-1/2">Click to focus</button>
        <input type="text" name="college" value={detail.college} onChange={changeValue} ref={input2}  placeholder='Enter College here'/>
        <button onClick={()=>{input2.current.focus()} } className="w-1/2">Click to focus</button>
    </div>
  )
}

export default Form

 */