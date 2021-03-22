import React, { FunctionComponent, useState } from 'react';
import { addZeros } from '../../helpers/addZeros';
import { useCompletePokemon } from '../../hooks';
import { Loading } from '../Loading/Loading';
import { PokemonTypes } from '../';

interface Props {
  pokemon: {
    name: string;
    url: string;
  };
}

export const Card: FunctionComponent<Props> = ({ pokemon }) => {
  const { completePokemon, img, onError } = useCompletePokemon(pokemon.name);

  if (!completePokemon) {
    return <Loading />;
  }

  return (
    <div className="card">
      <h3 className="pokemon-name">{completePokemon?.name}</h3>

      <h4 className="pokemon-id">{addZeros(completePokemon?.id, 3)}</h4>
      <img className="pokemon-img" src={img} onError={onError} alt="" />
      <PokemonTypes types={completePokemon.types} />
    </div>
  );
};
