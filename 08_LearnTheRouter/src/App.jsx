// import { useState } from 'react'
// import './App.css'
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import About from './Components/About';
// import Blogs from './Components/Blogs';
// import Contact from './Components/Contact';
// import Service from './Components/Service';
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
// import React from 'react';
// function App() {
//   const [count, setCount] = useState(0)
//   /**
//    * In Order to use 'Router' in React we need to install 'npm install react-router-dom'
//    */
//   const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<Home/>
//     },
//     {
//       path:'/blogs',
//       element:<Blogs/>
//     },
//     {
//       path:'/about',
//       element:<About/>
//     },
//     {
//       path:'/contact',
//       element:<Contact/>
//     },
//     {
//       path:'/service',
//       element:<Service/>
//     }
//   ])
//   return (
//     <>  
//      <h1 className='text-red-600 text-5xl text-center font-serif'>Learning Router</h1>
//       <Navbar/>
//     <RouterProvider router={router}/>
//     </>
//   )
// }

// export default App







// import { useState } from 'react'
// import './App.css'
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import About from './Components/About';
// import Blogs from './Components/Blogs';
// import Contact from './Components/Contact';
// import Service from './Components/Service';
// import { Routes, Route } from 'react-router-dom';
// import React from 'react';
// function App() {
//   const [count, setCount] = useState(0)
//   /**
//    * In Order to use 'Router' in React we need to install 'npm install react-router-dom'
//    */
//   return (
//     <>  
//      <h1 className='text-red-600 text-5xl text-center font-serif'>Learning Router</h1>
//       <Navbar/>
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/blogs" element={<Blogs/>} />
//           <Route path="/about" element={<About/>} />
//           <Route path="/service" element={<Service/>} />
//           <Route path="/contact" element={<Contact/>} />
//         </Routes>
//       </div>

//     </>
//   )
// }

// export default App



/************************************   React Routers 1st Method ****************************************/


import React from 'react';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import ContactForm from './Components/ContactForm'
import ContactInfo from './Components/ContactInfo';
import Name from './Components/Name';
import NotFound from './Components/NotFound';

function App() {
  const [count, setCount] = useState(0)
  /**
  // * In Order to use 'Router' in React we need to install 'npm install react-router-dom'  *
   */
  return (
    <>  
      <Navbar/>
     <h1 className='text-red-600 text-5xl text-center font-serif'>Learning Router</h1>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/about" element={<About/>} >
            <Route path=":name" element={<Name/>}/>
          </Route>
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} >
            <Route path="contactform" element={<ContactForm/>}/>
            <Route path="contactinfo" element={<ContactInfo/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App




/************************************   React Routers 2nd Method ****************************************/
/*
import React from 'react';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import ContactForm from './Components/ContactForm'
import ContactInfo from './Components/ContactInfo';
import NotFound from './Components/NotFound';

const App = ()=>{
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      pathe:"about",
      element:<About/>
    },
    {
      path:"blogs",
      element:<Blogs/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"service",
      element:<Service/>
    }
  ]);
  return(
    <>
      <h1 className="text-center">React Router Using CreateBrowerRouter</h1>
      {/* <Navbar/> }
      <RouterProvider router={router}/>
    </>
  )
}

export default App;


*/