import { useContext } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Card } from '../';
import { PokemonsContext } from '../../context/PokemonsContext';

export const PokemonsGrid = () => {
  const { displayPokemons, loadMore } = useContext(PokemonsContext);
  return (
    <InfiniteScroll
      dataLength={displayPokemons.length} //This is important field to render the next data
      next={loadMore}
      hasMore={true}
      loader={
        <button className="load-more" onClick={loadMore}>
          Load More...
        </button>
      }
    >
      <div className="pokemons-grid">
        {displayPokemons.map((pokemon) => (
          <Link key={pokemon.name} href={`/pokemon?name=${pokemon.name}`}>
            <a>
              <Card pokemon={pokemon} />
            </a>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};
