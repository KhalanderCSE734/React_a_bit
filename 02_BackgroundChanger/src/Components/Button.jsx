import React from 'react'

const Button = ({color,btn,Scolor}) => {
  return (
    <>
        <button className={btn} style={{color:Scolor}}>{color}</button>
    </>
  )
}

export default Button