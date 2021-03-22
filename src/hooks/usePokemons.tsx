import { useEffect, useState } from 'react';
import { SimplePokemon } from '../types/types';

export const usePokemons = () => {
  const [length, setLength] = useState(20);
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
  const [displayPokemons, setDisplayPokemons] = useState<SimplePokemon[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [destroy, setDestroy] = useState(false);

  const loadMore = () => {
    setLength(length + 20);
  };

  useEffect(() => {

    const newPokemons = pokemons
      .filter(
        (pokemon) =>
          pokemon.name.includes(searchTerm) ||
          pokemon.url.split('/')[6].includes(searchTerm)
      )
      .slice(0, length - 1);

    setDisplayPokemons(newPokemons);
  }, [pokemons, searchTerm, length]);

  useEffect(() => {
    const newPokemons = pokemons
      .filter(
        (pokemon) =>
          pokemon.name.includes(searchTerm) ||
          pokemon.url.split('/')[6].includes(searchTerm)
      )
      .slice(0, length - 1);

    setDisplayPokemons(newPokemons);
  }, [pokemons, searchTerm, length]);

  return {
    pokemons,
    setPokemons,
    displayPokemons,
    setDisplayPokemons,
    searchTerm,
    setSearchTerm,
    loadMore,
  };
};
