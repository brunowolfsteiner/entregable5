import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setTrainerGlobal} from '../store/slices/trainer.slice'
import './styles/Home.css'


const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerGlobal(e.target.name.value.trim()));
    e.target.name.value = '';
    navigate('/pokedex');
  };

  return (
    <div className='home__container'>
      <img className='home__img' src="./pokedex.png" alt="" />
      <h1 className='home__title'>¡Hola entrenador!</h1>
      <p className='home__paragraph'>Para poder comenzar, dame tu nombre</p>
      <form className='home__form' onSubmit={handleSubmit}>
        <input className='home__input' id='name' type="text" placeholder='Tu nombre...' />
        <button className='home__btn'>Comenzar</button>
      </form>
      
    <div class="shadow"></div>
    <div class="pokeball">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="middle"></div>
    </div>

  </div>
  );
};

export default Home;