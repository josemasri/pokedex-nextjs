import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useContext } from 'react';
import { PokemonsContext } from '../../context/PokemonsContext';

interface Props {
  pokemonsPage?: boolean;
}

export const SearchInput: FunctionComponent<Props> = ({ pokemonsPage = false }) => {
  const { setSearchTerm, searchTerm } = useContext(PokemonsContext);

  return (
    <div className="flex search-container">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        type="text"
        placeholder="Search"
        className={`${pokemonsPage && 'seach-bar-pokemons'}`}
      />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
