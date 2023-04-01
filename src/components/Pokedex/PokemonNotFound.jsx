import React from 'react'
import { Link } from 'react-router-dom';
import './styles/pokemonNotFound.css'

const PokemonNotFound = () => {
  return (
    <div className='pokeNotFound__container'>
      <h1 className='pokemonNotFound__title'>Pokemon no encontrado!</h1>
      <Link className='pokemonNotFound__link' to="/pokedex">Vuelve a la pokedex</Link>
    </div>
  );
}

export default PokemonNotFound