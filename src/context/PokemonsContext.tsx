import { createContext, Dispatch, SetStateAction } from 'react';
import { usePokemons } from '../hooks';
import { SimplePokemon } from '../types/types';

interface PokemonsContextInterface {
  pokemons: SimplePokemon[];
  displayPokemons: SimplePokemon[];
  searchTerm: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  setPokemons?: Dispatch<SetStateAction<SimplePokemon[]>>;
  setDisplayPokemons?: Dispatch<SetStateAction<SimplePokemon[]>>;
  loadMore?: () => void;
}

export const PokemonsContext = createContext<PokemonsContextInterface>({
  displayPokemons: [],
  pokemons: [],
  searchTerm: '',
});

export const PokemonsProvider = ({ children }) => {
  const {
    displayPokemons,
    pokemons,
    searchTerm,
    setDisplayPokemons,
    setPokemons,
    setSearchTerm,
    loadMore,
  } = usePokemons();

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        setPokemons,
        displayPokemons,
        setDisplayPokemons,
        searchTerm,
        setSearchTerm,
        loadMore,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
