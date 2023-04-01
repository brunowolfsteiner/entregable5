import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/pokeCard.css";

const Pokecard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate({});
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };

  return (
    <article className="pokeCard__container" onClick={handleClick}>
      <header className={`card-poke__header ${pokemon?.types[0].type.name}`}>
        <img
          className="card-poke__img"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <article className={`card-poke`}>
        <section className="card-poke__body">
          <h3 className="card-poke__name">{pokemon?.name}</h3>
    
          <ul className="card-poke__types-container">
            {pokemon?.types.map((type) => (
              <li
                key={type.slot}
                className={`card-poke__type ${type.type.name}`}
              >{`${type.type.name} `}</li>
            ))}
          </ul>
  
          <p className="card-poke__type-label">Type</p>
          <hr />
        </section>
      </article>
      <footer className="poke-footer">
        <ul className="card-poke__stats-container">
          {pokemon?.stats.map((stat) => (
            <li key={stat.stat.name} className="card-poke__stat">
              <span className="card-poke__stat-label">{stat.stat.name}</span>
              <br />
              <span className="card-poke__stat-number">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default Pokecard;
