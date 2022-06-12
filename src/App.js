import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Paginas/Home'
import Details from './Paginas/Details'

import ImagenBulbasaur from '../src/Images/bulbasaur.png'
import ImagenCharmander from '../src/Images/charmander.png'
import ImagenSquirtle from '../src/Images/squirtle.png'
import ImagenButterfree from '../src/Images/butterfree.png'
import ImagenPikachu from '../src/Images/pikachu.png'
import ImagenGastly from '../src/Images/gastly.png'
import ImagenDitto from '../src/Images/ditto.png'
import ImagenMew from '../src/Images/mew.png'
import ImagenAron from '../src/Images/aron.png'

function App() {

const pokemonArray = [
  {especie: 'planta', especieBorde: 'border-[#74CB48]', especieBackground: 'bg-[#74CB48]', name: 'Bulbasaur', img: ImagenBulbasaur, id: '1'},
  {especie: 'fuego', especieBorde: 'border-[#F57D31]', especieBackground: 'bg-[#F57D31]', name: 'Charmander', img: ImagenCharmander, id: '2'},
  {especie: 'agua', especieBorde: 'border-[#6493EB]', especieBackground: 'bg-[#6493EB]', name: 'Squirtle', img: ImagenSquirtle, id: '3'},
  {especie: 'bicho', especieBorde: 'border-[#A78723]', especieBackground: 'bg-[#A78723]', name: 'Butterfree', img: ImagenButterfree, id: '4'},
  {especie: 'electrico', especieBorde: 'border-[#F9CF30]', especieBackground: 'bg-[#F9CF30]', name: 'Pikachu', img: ImagenPikachu, id: '5'},
  {especie: 'fantasma', especieBorde: 'border-[#70559B]', especieBackground: 'bg-[#70559B]', name: 'Gastly', img: ImagenGastly, id: '6'},
  {especie: 'normal', especieBorde: 'border-[#AAA67F]', especieBackground: 'bg-[#AAA67F]', name: 'Ditto', img: ImagenDitto, id: '7'},
  {especie: 'psiquico', especieBorde: 'border-[#FB5584]', especieBackground: 'bg-[#FB5584]', name: 'Mew', img: ImagenMew, id: '8'},
  {especie: 'acero', especieBorde: 'border-[#B7B9D0]', especieBackground: 'bg-[#B7B9D0]', name: 'Aron', img: ImagenAron, id: '9'},
]



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home
              pokemonArray={pokemonArray}
            />}
          />

          <Route
            path='/details/:name'
            element={<Details
              pokemonArray={pokemonArray}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
