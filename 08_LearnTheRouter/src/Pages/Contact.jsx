import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom'
const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1 style={{marginBottom:"50px"}}> I'm Contact Page </h1>
        <button style={{padding:"10px",borderRadius:"1rem",backgroundColor:"pink",border:"none",marginRight:"50px"}} onClick={()=>navigate("contactinfo")}>Contact Info</button>
        <button style={{padding:"10px",borderRadius:"1rem",backgroundColor:"pink",border:"none",marginBottom:"20px"}} onClick={()=>navigate("contactform")}>Contact form</button>
        <Outlet/>
    </div>
  )
}

export default Contact