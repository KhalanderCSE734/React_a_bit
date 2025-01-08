import React,{useState,useEffect} from 'react'
import './Basic.css'
const Basic = () => {
    // const [count, setCount] = useState(0)
  /*useEffect(()=>{
    let setInter = setInterval(()=>{
      setCount((prev)=>prev+1);
  },1000)
  return ()=>{
    return clearInterval(setInter)
  }
  },[]);*/

  const[api,setApi] = useState([]);
  const[load,setLoad] = useState(true);
  const[error,setError] = useState(false);
  // const url = "https://jsonplaceholder.typicode.com/posts";
  const url = "https://jsonplaceholder.typicode.com/posts";
  const getData = async ()=>{
    try{    
        let response = await fetch(url);
         let data = await response.json();
        console.log(data);
        setApi(data);
        setLoad(false);
    }
    catch(error){
        console.log("Error.......",error);
        setLoad(false);
        setError(true);
    }
  }
  // getData();
  useEffect(()=>{
    getData();
  },[])

 if(load){
  return <h1 className='text-9xl text-green-700 mt-44'> Loading The Data ......... </h1>
 }
 if(error){
  return(
    <h1 className='text-9xl text-red-600 mt-44'>
      OOppps Error Occured
    </h1>
  )
 }
  return (
    <div>
        <h1 className="text-center text-7xl text-orange-600">Learning API</h1>
      {/* <h1>{count}</h1> */}
      { api ? api.map((data)=>{
              return(
                <h1 key={data.id}>
                  {data.title}
                </h1>
              )
      }):<h1>Loading..........</h1>
      }
    </div>
  )
}

export default Basic