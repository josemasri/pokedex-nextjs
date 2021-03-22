import { FunctionComponent } from 'react';
import { Pokemon } from '../../types/types';
import { Loading } from '../Loading/Loading';
import { PokemonTypes } from '../Main/PokemonTypes';
import { PokemonProperty } from './PokemonProperty';

interface Props {
  pokemon: Pokemon;
}

export const PokemonInfoCard: FunctionComponent<Props> = ({ pokemon }) => {
  if (!pokemon) {
    return <Loading />;
  }

  const { name, types, id, height, weight, sprites } = pokemon;

  return (
    <div className="pokemon-info-card">
      <h2 className="pokemon-name">{name}</h2>
      <PokemonTypes types={types} />

      <PokemonProperty name="Pokedex Number" value={id} />
      <PokemonProperty name="Height" value={height} />
      <PokemonProperty name="Weight" value={weight} />
      <div className="property">
        <h4 className="property-title">Shiny</h4>
        <div className="sprites">
          <img src={sprites.front_shiny} alt="" />
          <img src={sprites.back_shiny} alt="" />
        </div>
      </div>
    </div>
  );
};
