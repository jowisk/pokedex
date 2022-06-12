import React from 'react'
import imagenPokebola from '../Images/pokebola.png'
import Sort from './Sort'

const Header = () => {
  return (
    <div className="flex flex-row items-center px-[30px] py-[30px]">
        <div className="w-full flex flex-row items-center">
            <img
                className="w-[50px] pr-[20px]" 
                src={imagenPokebola}
            />
            <h1 className="font-bold text-4xl">Pokédex</h1>
        </div>

        <div className="flex justify-end">
            <Sort />
        </div>   
    </div>
  )
}

export default Header