import { useEffect, useState } from 'react';
import { getPokemon } from '../api';
import { Pokemon } from '../types/types';

export const useCompletePokemon = (name: string | number) => {
  const [completePokemon, setCompletePokemon] = useState<Pokemon>();
  const [img, setImg] = useState<string>();

  useEffect(() => {
    getPokemon(name)
      .then((res) => {
        setCompletePokemon(res.data);
        setImg(
          `https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`
        );
      })
      .catch((error) => console.error(error));
  }, []);

  const onError = () => {
    setImg(completePokemon.sprites.front_default);
  };

  return {
    completePokemon,
    img,
    onError,
  };
};
