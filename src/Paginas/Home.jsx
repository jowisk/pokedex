import React from 'react'
import Header from '../Components/Header'
import PokemonList from '../Components/PokemonList'
import Search from '../Components/Search'
import { Link } from 'react-router-dom'

const Home = ({pokemonArray}) => {
  return (
      <>
        <div className="flex flex-col bg-[#E0E0E0] rounded-3xl py-[15px]">
        <Header />
        <Search />
        </div>

        <div>
            <PokemonList
                pokemonArray={pokemonArray}
            /> 
        </div>
      </>
  )
}

export default Home