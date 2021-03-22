import React, { FunctionComponent } from 'react';
import { Type } from '../../types/types';

interface Props {
  types: Type[];
}

export const PokemonTypes: FunctionComponent<Props> = ({ types }) => {
  return (
    <div className="pokemon-types">
      {types.map((type) => (
        <div className={`pokemon-type ${type.type.name}`} key={type.type.name}>
          {type.type.name}
        </div>
      ))}
    </div>
  );
};
