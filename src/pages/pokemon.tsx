import { NextPage } from 'next';
import {
  SearchInput,
  BackBtn,
  PokemonInfoCard,
  PokemonImagesCard,
} from '../components';
import { useCompletePokemon } from '../hooks';

interface Props {
  name: string;
}

const Pokemon: NextPage<Props> = ({ name }) => {
  const { completePokemon, img, onError } = useCompletePokemon(name);

  return (
    <main>
      <BackBtn />
      <SearchInput pokemonsPage={true} />
      <div className="pokemon-section">
        <PokemonImagesCard
          img={img}
          onError={onError}
          pokemon={completePokemon}
        />
        <PokemonInfoCard pokemon={completePokemon} />
      </div>
    </main>
  );
};

Pokemon.getInitialProps = async (ctx): Promise<{ name: string }> => {
  const name = ctx.query.name as string;
  return { name };
};

export default Pokemon;
