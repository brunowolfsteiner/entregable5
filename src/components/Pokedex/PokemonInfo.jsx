import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PokemonNotFound from "./PokemonNotFound";
import "./styles/pokemonInfo.css";
import PokeLoading from "./PokeLoading";
import Header from "./../../pages/Header";

const PokemonInfo = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState();
  const [handleError, setHandleError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err);
        setHandleError(true);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  console.log(pokemon);

  if (handleError) {
    return <PokemonNotFound />;
  }
  if (isLoading) {
    return <PokeLoading />;
  }

  return (
    <div className="pokeid">
      <Header />
      <div className="pokeid__box">
        <div className="pokeid__container">
          <img
            className="pokeid__img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt="pokemon-img"
          />
          <div className={`pokeid__bg ${pokemon?.types[0].type.name}`}></div>
        </div>
        <div className="pokeid__data">
          <h2 className="pokeid__id"># {pokemon?.id}</h2>
          <h1 className="pokeid__name">{pokemon?.name}</h1>
        </div>
        <ul className="pokeid__stats">
          <li className="pokeid__weight">
            <span className="peso">Peso</span>
            <br />
            <span className="pokeid__peso">{pokemon?.weight}</span>
          </li>
          <li className="pokeid__height">
            <span className="peso">Altura</span>
            <br />
            <span className="pokeid__peso">{pokemon?.height}</span>
          </li>
        </ul>
        <div className="pokeid__tyab">
          <div className="pokeid__types">
            <h3 className="pokeid__text">Tipo</h3>
            {pokemon?.types.map((type) => (
              <div key={type.slot} className={`pokeid__type ${type.type.name}`}>
                {type.type.name}
              </div>
            ))}
          </div>
          <div className="pokeid__habilities">
            <h3 className="pokeid__text">Habilidades</h3>
            {pokemon?.abilities.map((abilitie) => (
              <div key={abilitie.slot} className={`pokeid__abilitie`}>
                {abilitie.ability.name}
              </div>
            ))}
          </div>
        </div>
        <div className="pokemon__container-stats">
          <h2 className="pokeid__h2">Stats</h2>
          <div className="progress__stats">
            <span>HP </span>
            <span>{pokemon?.stats[0].base_stat}/150</span>
          </div>
          <div className="progress">
            <div
              className="progress__fill"
              style={{ width: `${pokemon?.stats[0].base_stat / 1.5}%` }}
            ></div>
          </div>
          <div className="progress__stats">
            <span>Ataque </span>
            <span>{pokemon?.stats[1].base_stat}/150</span>
          </div>
          <div className="progress">
            <div
              className="progress__fill"
              style={{ width: `${pokemon?.stats[1].base_stat / 1.5}%` }}
            ></div>
          </div>
          <div className="progress__stats">
            <span>Defensa </span>
            <span>{pokemon?.stats[2].base_stat}/150</span>
          </div>
          <div className="progress">
            <div
              className="progress__fill"
              style={{ width: `${pokemon?.stats[2].base_stat / 1.5}%` }}
            ></div>
          </div>
          <div className="progress__stats">
            <span>Velocidad </span>
            <span>{pokemon?.stats[5].base_stat}/150</span>
          </div>
          <div className="progress">
            <div
              className="progress__fill"
              style={{ width: `${pokemon?.stats[5].base_stat / 1.5}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="pokeid__moves">
        <h2 className="pokeid__h2">Movements</h2>
        {pokemon?.moves.map((move) => (
          <div key={move.move.url} className={"pokeid__move"}>
            {move.move.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonInfo;
