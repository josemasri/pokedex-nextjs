import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { getPokemons } from '../api/pokemons';
import { PokemonsGrid, SearchInput } from '../components';
import { PokemonsContext } from '../context/PokemonsContext';
import { SimplePokemon } from '../types/types';

interface Props {
  data: SimplePokemon[];
  pokemos: SimplePokemon[];
  setPokemoms: Dispatch<SetStateAction<SimplePokemon[]>>;
}

export default function Home({ data }) {
  const { setPokemons } = useContext(PokemonsContext);

  useEffect(() => {
    setPokemons(data);
  }, []);

  return (
    <main>
      <SearchInput />
      <PokemonsGrid />
    </main>
  );
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await getPokemons();
    return { data: res.data.results };
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};
