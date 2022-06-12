import React from 'react'
import { Link } from 'react-router-dom'

import imagenBulbasaur from '../Images/bulbasaur.png'
import Arrow from '../Images/arrow.png'
import Type from './Type'


const DetailCard = ({pokemonArray}) => {

  return (
    <div className="w-full h-full border-[3px] border-[#74CB48] bg-[#74CB48]">
        <img src={pokemonArray.img} className="absolute top-[10%] m-auto left-0 right-0 w-[250px] h-[250px]"/>
        <div className="bg-[#74CB48] w-full h-[33%] p-[20px] flex flex-col justify-between">
            <div className=" flex justify-between">
                <div className=" flex items-center">
                    <Link to='/'>
                        <img src={Arrow} className="w-[40px] h-[40px] mr-[20px]"alt="Go back"/>
                    </Link>

                    <p className="font-bold text-[25px]">hola</p>
                </div>

                <div className="flex items-center">
                    <p>hola</p>
                </div>
            </div>
            <div className="text-end">
                →
            </div>
        </div>

        <div className="w-full h-[67%]">
            <div className="bg-white w-full h-full rounded-[5px] flex flex-col">
                <div className="pt-[50px] flex bg-slate-400 w-full justify-center">
                    <button className="mr-[15px] h-[25px] bg-slate-700">Type 1</button>
                    <button className="ml-[15px] h-[25px] bg-slate-700">Type 2</button>
                </div>

                <div>
                    <div className="flex justify-center mt-[20px]">
                        <h3>About</h3>
                    </div>

                    <div className="flex justify-around mt-[25px]">
                        <div>
                            <p>component</p>
                        </div>

                        <div>
                            <p>component</p>
                        </div>

                        <div>
                            <p>component</p>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <p className="text-center">COMPONENTE TEXTO <br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quod itaque officia quam.</p>
                    </div>

                    <div className="flex flex-col mt-[20px]">
                        <p className="text-center font-bold">Base Stats</p>

                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailCard