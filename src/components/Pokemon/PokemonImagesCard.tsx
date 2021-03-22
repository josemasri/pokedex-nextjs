import { FunctionComponent } from 'react';
import { Pokemon } from '../../types/types';

interface Props {
  pokemon: Pokemon;
  img: string;
  onError: () => void;
}

export const PokemonImagesCard: FunctionComponent<Props> = ({
  pokemon,
  img,
  onError,
}) => {
  return (
    <div className="pokemon-images-card">
      <img className="main-img" src={img} alt="" onError={onError} />
      <div className="sprites">
          <img src={pokemon?.sprites.front_default} alt=""/>
          <img src={pokemon?.sprites.back_default} alt=""/>
      </div>
    </div>
  );
};
