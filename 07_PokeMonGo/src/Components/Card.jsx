import React from 'react'

const Card = ({curId,curImg,curName}) => {
  return (
    <div className='single' key = {curId} >
        <img src={curImg || "/pokemon.png"} alt={curName} />
        <h1>{curName} {curId}</h1>
    </div>
  )
}

export default Card 