
/*
import React from 'react';

const Card = ()=>{
    return(
        <>
            <div className="h-[250px] w-[350px] rounded bg-white m-auto flex flex-col items-center pt-[10px] mb-10">
                <img src="cat.png" alt="cat" className="h-40 w-40 rounded-full"/>
                <h1 className='text-black text-[30px]'>I'm Cat</h1>
                <h1 className='text-black text-4xl'>Web-devloper</h1>
            </div>

        </>
    )
}

export default Card;

*/



/*

import React from 'react';

const Card = (props)=>{

    console.log(props);
    return(
        <>
            <div className="h-[300px] w-[350px] rounded bg-green-400 m-auto flex flex-col items-center justify-evenly pt-[10px] mb-10">
                <img src="cat.png" alt="cat" className="h-40 w-40 rounded-full"/>
            <h1 className='text-black text-[30px]'>I'm Cat</h1>
            <h1 className='text-black text-4xl'>Web-devloper</h1>
            <div className='flex w-full bg-lime-300 items-center justify-evenly text-orange-500 rounded-lg'>
                <p>Post: 0</p>
                <p>Followers: 0</p>
                <p>Following: 0</p>
            </div>
            </div>

        </>
    )
}

export default Card;


*/




/*


import React from 'react';

const Card = ({name,desc,insta})=>{

    // console.log(name,desc,insta);
    return(
        <>
            <div className="h-[300px] w-[350px] rounded bg-green-400 m-auto flex flex-col items-center justify-evenly pt-[10px] mb-10">
                <img src={desc.image} alt="cat" className="h-40 w-40 rounded-full"/>
            <h1 className='text-black text-[30px]'>I'm {name}</h1>
            <h1 className='text-black text-4xl'>{desc.role}</h1>
            <div className='flex w-full bg-blue-800 items-center justify-evenly text-orange-700 rounded-lg'>
                <p>Post: {insta[0]}</p>
                <p>Followers: {insta[1]}</p>
                <p>Following: {insta[2]}</p>
            </div>
            </div>

        </>
    )
}

export default Card;



*/



const Card = ({name="Animal",desc={image:"empty.png",role:"developer"},insta=[0,0,0]})=>{

    // console.log(name,desc,insta);
    return(
        <>
       
            <div className="h-[330px] w-[300px] rounded bg-green-400 m-auto flex flex-col items-center justify-evenly pt-[10px] mb-10">
                <img src={desc.image} alt="Animal" className="h-36 w-36 rounded-full"/>
            <h1 className='text-black text-[30px]'>I'm {name}</h1>
            <h1 className='text-black text-4xl'>{desc.role}</h1>
            <div className='flex w-full bg-blue-800 items-center justify-evenly text-orange-700 rounded-lg h-[50px]'>
                <p>Post: {insta[0]}</p>
                <p>Followers: {insta[1]}</p>
                <p>Following: {insta[2]}</p>
            </div>
            </div>
    
            

        </>
    )
}

export default Card;
