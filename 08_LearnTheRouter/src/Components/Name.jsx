import React from 'react';
import {useParams} from 'react-router-dom';


const Name = ()=>{
    const {name} = useParams();
    console.log(name);
    return (
        <>
        {
            !name ? <h1> Your Name Will Be Displayed Here</h1>: name
        }
        </>
    )
}

export default Name;