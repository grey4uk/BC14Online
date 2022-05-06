import {
  createReducer,
  // createSlice,
} from '@reduxjs/toolkit';

// import types from './counter-types';
import actions from './counter-actions';

// const {
//   incrementType,
//   decrementType,
//   resetType,
//   initializeType,
// } = types;

const initialState = { count: 0 };

const { increment, decrement, init, reset } = actions;

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case incrementType:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case decrementType:
//       return { ...state, count: state.count - 1 };
//     case initializeType:
//       return { ...state, count: action.payload };
//     case resetType:
//       return initialState;

//     default:
//       return state;
//   }
// };

// const counterReducer = createReducer(initialState, {
//   [increment]: (state, action) => ({
//     ...state,
//     count: state.count + action.payload,
//   }),
//   [decrement]: (state, _) => ({
//     ...state,
//     count: state.count - 1,
//   }),
//   [init]: (state, action) => ({
//     ...state,
//     count: action.payload,
//   }),
//   [reset]: () => initialState,
// });

// const counterReducer = createSlice({
//   name: 'counter',
//   initialState: initialState,
//   reducers: {
//     increment: (state, action) => ({
//       ...state,
//       count: state.count + action.payload,
//     }),
//     decrement: (state, _) => ({
//       ...state,
//       count: state.count - 1,
//     }),
//     init: (state, action) => ({
//       ...state,
//       count: action.payload,
//     }),
//     reset: () => initialState,
//   },
//   extraReducers: {},
// });
// export const { increment, decrement, init, reset } =
//   counterReducer.actions;
// export default counterReducer.reducer;

const counterReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(increment, (state, action) => ({
        ...state,
        count: state.count + action.payload,
      }))
      .addCase(decrement, (state, _) => ({
        ...state,
        count: state.count - 1,
      }))
      .addCase(init, (state, action) => ({
        ...state,
        count: action.payload,
      }))
      .addCase(reset, () => initialState);
  }
);

export default counterReducer;
