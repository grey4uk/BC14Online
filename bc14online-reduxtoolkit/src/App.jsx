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
  const [token, setToken] = useState('true');
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
            <Route
              path='/clicker'
              element={<LazyClickerPage />}
            />

            <Route path='/' element={<LazyStartPage />} />

            <Route
              path='/counter'
              element={<LazyCounterPage token={token} />}
            />

            <Route
              path='/form'
              element={<LazyFormPage />}
            />

            <Route
              path='/pokemons'
              element={<LazyPokemonsPage />}>
              <Route
                path={`/pokemons/:pokemonName/*`}
                element={<LazyPokemonListItem />}>
                <Route
                  path='/pokemons/:pokemonName/*/info'
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

// import { Route, Redirect, Switch } from 'react-router-dom';
// import 'assets/rootColors.css';
// import ClickerPage from 'pages/ClickerPage';
// import StartPage from 'pages/StartPage';
// import CounterPage from 'pages/CounterPage';
// import FormPage from 'pages/FormPage';
// import PokemonsPage from 'pages/PokemonsPage';
// import PageNotFound from 'pages/PageNotFound';
// import AppBar from 'components/AppBar/AppBar';

// const App = () => {
//   return (
//     <>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column',
//         }}>
//         <AppBar />
//         <Switch>
//           <Route path='/' exact>
//             <StartPage />
//           </Route>
//           <Route path='/clicker'>
//             <ClickerPage />
//           </Route>
//           <Route path='/counter'>
//             <CounterPage />
//           </Route>
//           <Route path='/form'>
//             <FormPage />
//           </Route>
//           <Route path='/pokemons'>
//             <PokemonsPage />
//           </Route>
//           <Route path='/pagenotfound'>
//             <PageNotFound />
//           </Route>
//           <Redirect to='/pagenotfound' />
//         </Switch>
//       </div>
//     </>
//   );
// };

// export default App;
