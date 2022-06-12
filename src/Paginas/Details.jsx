import React from 'react'
import DetailCard from '../Components/DetailCard'
import imagenBulbasaur from '../Images/bulbasaur.png'


const Details = ({pokemonArray}) => {

  pokemonArray.find(id => pokemonArray.id === '1')

  return (
    <div className="h-screen w-full">
        <DetailCard
          pokemonArray={pokemonArray}
        />
      
    </div>
  )
}

export default Details;

