import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1> I'm About Page </h1>
        <p>Enter Your Name On Search Bar</p>
        <Outlet/>   {/** WhereEver We use Nested Routes it is necessary to use Outlet */}
    </div>
  )
}

export default About