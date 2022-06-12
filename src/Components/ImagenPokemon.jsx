import React from 'react'

const ImagenPokemon = ({img}) => {
  return (
    <div className="w-[125px] h-[125px]">
      <img src={img} alt="" />
    </div>
  )
}

export default ImagenPokemon