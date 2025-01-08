import React,{useState,useEffect} from 'react'

const Pokemon = () => {

        //          Basic React Fetching API


    /*
    //const[api,SetApi] = useState([]);


    const url = "https://pokeapi.co/api/v2/pokemon";
  
    const fetchData = async()=>{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        console.log(data.results);
        SetApi(data.results);
    }

    useEffect(()=>{
        fetchData();
    },[])
*/



                    //         Fetching particular pokemon


    /*
    const [img,setImg] = useState("");
    const [name,setName] = useState("");
     const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    const fetchPokemon = async ()=>{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        // console.log(data.sprites);
        // console.log(data.sprites.other);
        // console.log(data.sprites.other.dream_world);
        console.log(data.sprites.other.dream_world.front_default);
        console.log(data.name);
        setImg(data.sprites.other.dream_world.front_default);
        setName(data.name);
    }
    
    useEffect(()=>{
        fetchPokemon();
    },[])

*/




                  //         Handling Error and Loading

        const [load,setLoad] = useState(true);
        const [error,setError] = useState(null);
        const [img,setImg] = useState("");
        const [name,setName] = useState("");
        const [detail,setDetail] = useState({});
         const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
    
        const fetchPokemon = async ()=>{
            try{
                let response = await fetch(url);
                let data = await response.json();
                console.log(data);
                // console.log(data.sprites);
                // console.log(data.sprites.other);
                // console.log(data.sprites.other.dream_world);
                console.log(data.sprites.other.dream_world.front_default);
                console.log(data.name);
                setImg(data.sprites.other.dream_world.front_default);
                setName(data.name);
                setDetail(data);
                setLoad(false);
            }
            catch(error){
                    console.log("Error Occurred.......",error);
                    setError(error);
                    setLoad(false);
            }

        }
        
        useEffect(()=>{
            fetchPokemon();
        },[])

        
        if(load){
            return(
                <>
                        <h1>Loading.........</h1>
                </>
            )
        }
        if(error){
            return(
                <>
                    <h1>
                        Error {error.message}
                    </h1>
                </>
            )
        }



  return (
    <div>
        {/* {api.map((data,ind)=>{
            return(
                <div key={data.name}>
                    <h1>{data.name}</h1>
                    <h3> {data.url}</h3>            
                </div>    
            )
        })} */}


        <div className='container'>
            <img src={img} alt="Pikachu" className='' />
            <h1><strong>{name}</strong></h1>
            <div> 
                <h2>Height: {detail.height}</h2>
                <h2>Weight: {detail.weight}</h2>
                <h2>Speed: {detail.stats[5].base_stat}</h2>        
            </div>

        </div>


    </div>
  )
}

export default Pokemon