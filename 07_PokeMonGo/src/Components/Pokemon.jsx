import React, { useEffect, useState } from 'react'
import Card from './Card';

const Pokemon = () => {

    const [api,setApi] = useState([]);
    const [urlArr,setUrlArr] = useState([]);
    const [loading,setLoading] = useState(true);
    const [err,setErr] = useState(null);
    const [search,setSearch] = useState("");
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100"

    const callApi = async ()=>{
        setLoading(true);
        try{
            let response = await fetch(url);
            let data = await response.json();
        }catch(error){
            console.log(error.message);
            setErr(error.message);
        }
        // console.log(data);
        // console.log(data.results);
        let urlArray = data.results.map((cur,ind)=>{
            return {name:cur.name,url:cur.url}
        })
        // console.log(urlArray);
            /*urlArray.forEach((ele) => {
            console.log(ele.name);
            console.log(ele.url);
        });*/
        setUrlArr(urlArray);
        setLoading(false);
    }

    const fetchData = async ()=>{
        // console.log(urlArr);
        // let dataArr = [];
       /* urlArr.forEach( async (cur,ind)=>{
            let response = await fetch(cur.url);
            let data = await response.json();
            // console.log(data);
            dataArr.push(data);
        })*/

        // for(let cur of urlArr){
        //     let response = await fetch(cur.url);
        //     let data = await response.json();
        //     dataArr.push(data);
        // }
        setLoading(true);
        try{
            const dataArr = await Promise.all(
                urlArr.map(async (cur) => {
                const response = await fetch(cur.url);
                return response.json();
                })
            );
            console.log(dataArr);
               setApi(dataArr);  
        }catch(error){
            setErr(error);
        } finally{
            setLoading(false);
        }


        // console.log(dataArr);
        // let response = await fetch()
  
    }
    
    useEffect(()=>{ 
        fetchData();
    },[urlArr])


    useEffect(()=>{ 
        callApi();
    },[])

if(loading){
    return <h1 style={{textAlign:"center",fontSize:"50px",color:"lightseagreen"}}>Loading.....</h1>
}
if(err){
    return <h1 className="flex justify-center items-center w-full h-screen text-5xl text-blue-800">Error In Fetching API... {err}</h1>
}


const finalSearch = api.filter((cur)=>{
    return cur.name.toLowerCase().includes(search.toLowerCase());
})

/*
useEffect(()=>{
    console.log(finalSearch);
},[search])
*/
  return (
   <>
    <h1 className="text-center text-blue-700 bg-yellow-500 text-5xl font-extrabold p-5">PokeMon Go </h1>
    <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} className='input' placeholder='Search Pokemon' />
    <div className='container'>
            {

            finalSearch.map((cur,ind)=>{
                return (

                <Card curId={cur.id} curImg={cur.sprites.other.dream_world.front_default} curName={cur.name}/>

                )
            })

        }  
    </div>

   </>
  )
}

export default Pokemon