import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'assets/rootColors.css';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

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
const LazyTodos = lazy(() =>
  import('pages/TodosPage' /* webpackChunkName: "Todos" */)
);
const LazyAuth = lazy(() =>
  import(
    'pages/Authorization' /* webpackChunkName: "Authorization" */
  )
);
const LazyPageInfo = lazy(() =>
  import('pages/PageInfo' /* webpackChunkName: "Info" */)
);

const App = () => {
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
          <>
            <LazyAppBar />
            <Routes>
              <Route path='/' element={<LazyStartPage />} />
              <Route
                path='auth'
                element={
                  <PublicRoute restricted>
                    <LazyAuth />
                  </PublicRoute>
                }
              />

              <Route
                path='clicker'
                element={
                  <PrivateRoute>
                    <LazyClickerPage />
                  </PrivateRoute>
                }
              />

              <Route
                path='counter'
                element={
                  <PrivateRoute>
                    <LazyCounterPage />
                  </PrivateRoute>
                }
              />

              <Route
                path='form'
                element={
                  <PrivateRoute>
                    <LazyFormPage />
                  </PrivateRoute>
                }
              />
              <Route
                path='todos'
                element={
                  <PrivateRoute>
                    <LazyTodos />
                  </PrivateRoute>
                }
              />

              <Route
                path='pokemons'
                element={
                  <PrivateRoute>
                    <LazyPokemonsPage />
                  </PrivateRoute>
                }>
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
                element={
                  <PublicRoute>
                    <LazyPageNotFound />
                  </PublicRoute>
                }
              />
              <Route
                path='error'
                element={
                  <PrivateRoute>
                    <LazyPageInfo />
                  </PrivateRoute>
                }
              />
            </Routes>
          </>
        </Suspense>
      </div>
    </>
  );
};

export default App;
