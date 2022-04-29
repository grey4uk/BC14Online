import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'assets/rootColors.css';

const LazyStartPage = lazy(() =>
  import(
    'pages/StartPage' /* webpackChunkName: "StartPage" */
  )
);

const LazyAppBar = lazy(() =>
  import(
    'components/AppBar/AppBar' /* webpackChunkName: "AppBar" */
  )
);

const LazyClickerPage = lazy(() =>
  import(
    'pages/ClickerPage' /* webpackChunkName: "ClickerPage" */
  )
);
const LazyCounterPage = lazy(() =>
  import(
    'pages/CounterPage' /* webpackChunkName: "CounterPage" */
  )
);
const LazyFormPage = lazy(() =>
  import(
    'pages/FormPage' /* webpackChunkName: "FormPage" */
  )
);
const LazyPokemonsPage = lazy(() =>
  import(
    'pages/PokemonsPage' /* webpackChunkName: "PokemonsPage" */
  )
);
const LazyPageNotFound = lazy(
  () =>
    import(
      'pages/PageNotFound'
    ) /* webpackChunkName: "PageNotFound" */
);

const LazyPokemonListItem = lazy(() =>
  import(
    'components/PokemonsList/PokemonListItem' /* webpackChunkName: "PokemonListItem" */
  )
);

const App = () => {
  const [token] = useState('true');
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyAppBar />
          <Routes>
            <Route path='/' element={<LazyStartPage />} />
            <Route
              path='clicker'
              element={<LazyClickerPage />}
            />

            <Route
              path='counter'
              element={<LazyCounterPage token={token} />}
            />

            <Route path='form' element={<LazyFormPage />} />

            <Route
              path='pokemons'
              element={<LazyPokemonsPage />}>
              <Route
                path={`:pokemonName/*`}
                element={<LazyPokemonListItem />}>
                <Route
                  path='info'
                  element={<h2>POKEMON INFO</h2>}
                />
              </Route>
            </Route>
            <Route
              path='*'
              element={<LazyPageNotFound />}
            />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
