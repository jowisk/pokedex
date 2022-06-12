import React from 'react'
import Pokemon from './Pokemon'

const PokemonList = ({pokemonArray}) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center py-[30px]">
      {pokemonArray.map((selectedPokemon => 
        <Pokemon
          selectedPokemon={selectedPokemon}
        />
        ))}
    </div>
  )
}

export default PokemonList