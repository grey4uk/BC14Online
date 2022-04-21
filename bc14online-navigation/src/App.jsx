import { Route, Redirect, Switch } from 'react-router-dom';
import 'assets/rootColors.css';
import ClickerPage from 'pages/ClickerPage';
import StartPage from 'pages/StartPage';
import CounterPage from 'pages/CounterPage';
import FormPage from 'pages/FormPage';
import PokemonsPage from 'pages/PokemonsPage';
import PageNotFound from 'pages/PageNotFound';
import AppBar from 'components/AppBar/AppBar';

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
        <AppBar />
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
          <Route path='/clicker'>
            <ClickerPage />
          </Route>
          <Route path='/counter'>
            <CounterPage />
          </Route>
          <Route path='/form'>
            <FormPage />
          </Route>
          <Route path='/pokemons'>
            <PokemonsPage />
          </Route>
          <Route path='/pagenotfound'>
            <PageNotFound />
          </Route>
          <Redirect to='/pagenotfound' />
        </Switch>
      </div>
    </>
  );
};

export default App;
