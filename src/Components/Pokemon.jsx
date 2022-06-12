import React from 'react'
import ImagenPokemon from './ImagenPokemon'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Pokemon = ({selectedPokemon}) => {
  return (
    <Link 
        to={`/details/${selectedPokemon.name}`}

    >
        <div className={`flex flex-col w-[200px] m-[15px] justify-between h-[200px] bg-white ${selectedPokemon.especieBorde} rounded-xl border-2`}>
            <div className="flex justify-end pr-[10px] pt-[5px]">
                <p>{selectedPokemon.id}</p>
            </div>
            <div className="flex items-center justify-center">
                <ImagenPokemon
                    img={selectedPokemon.img}
                />
            </div>
            <div className={`w-full h-[30px] flex items-center justify-center text-white ${selectedPokemon.especieBackground} rounded-b-[5px]`}>
                <h3 className="font-bold">{selectedPokemon.name}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Pokemon