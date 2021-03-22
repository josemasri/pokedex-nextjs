import '../styles/styles.scss';
import { Layout } from '../components';
import { PokemonsProvider } from '../context/PokemonsContext';
import { UserProvider } from '../context/UserContext';
import { LayoutProvider } from '../context/LayoutContext';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <UserProvider>
        <PokemonsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PokemonsProvider>
      </UserProvider>
    </LayoutProvider>
  );
}

export default MyApp;
