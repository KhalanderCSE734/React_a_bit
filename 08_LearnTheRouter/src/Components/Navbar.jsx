// import React from 'react'
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   return (
//     <>
//         <nav>
//             <div>LOGO</div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/blogs">Blogs</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact Us</Link></li>
//                 <li><Link to="/service">Service</Link></li>
//             </ul>    
//         </nav> 
//     </>
//   )
// }

// export default Navbar



/*

import React from 'react'
import { Link,NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
        <nav>
            <div>LOGO</div>
            <ul>
                {/* <li><Link to="/"> Home </Link>  </li>
                <li><Link to="blogs"> Blogs  </Link> </li>
                <li><Link to="/about"> About  </Link> </li>
                <li><Link to="/contact">  Contact Us </Link> </li>
                <li><Link to="/service">   Service </Link> </li> /}



                  {/* With the help of 'NavLink' tag we get the property of '.active' class through which we can add some special styling  }



                <li><NavLink to="/"> Home </NavLink>  </li>
                <li><NavLink to="blogs"> Blogs  </NavLink> </li>
                <li><NavLink to="/about"> About  </NavLink> </li>
                <li><NavLink to="/contact">  Contact Us </NavLink> </li>
                <li><NavLink to="/service">   Service </NavLink> </li> 
            </ul>    
        </nav> 
    </>
  )
}

export default Navbar


*/




import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

    const navigate = useNavigate();

    // the 'useNavigate' hook is used to  Navigate to whichever page we want 
    const go = ()=>{
      navigate('/contact');
    }

  return (
    <>
        <nav>
            <div onClick={()=>navigate("/")}>LOGO</div>
            <ul>
                {/* <li><Link to="/"> Home </Link>  </li>
                <li><Link to="blogs"> Blogs  </Link> </li>
                <li><Link to="/about"> About  </Link> </li>
                <li><Link to="/contact">  Contact Us </Link> </li>
                <li><Link to="/service">   Service </Link> </li>*/}
                


                  {/* With the help of 'NavLink' tag we get the property of '.active' class through which we can add some special styling  */}


                  
                <li><NavLink to="/"> Home </NavLink>  </li>
                <li><NavLink to="/blogs"> Blogs  </NavLink> </li>
                <li><NavLink to="/about"> About  </NavLink> </li>
                <li><NavLink to="/contact">  Contact Us </NavLink> </li>
                <li><NavLink to="/service">   Service </NavLink> </li> 
            </ul>    

            <button className="btn" onClick={go}>Go Somewhere</button>
        </nav> 
    </>
  )
}

export default Navbar
