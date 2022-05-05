import { createAction } from '@reduxjs/toolkit';

import types from './counter-types';

const {
  incrementType,
  decrementType,
  resetType,
  initializeType,
} = types;

const increment = createAction(incrementType);
const decrement = createAction(decrementType);
const reset = createAction(resetType);
const init = createAction(initializeType);
// const increment = (value) => ({
//   type: incrementType,
//   payload: value,
// });
// const decrement = () => ({ type: decrementType });
// const reset = () => ({ type: resetType });
// const init = (value) => ({
//   type: initializeType,
//   payload: value,
// });

const actions = { increment, decrement, init, reset };

export default actions;
