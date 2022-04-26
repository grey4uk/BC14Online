import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';

const store = createStore(
  counterReducer,
  composeWithDevTools()
);

export default store;
