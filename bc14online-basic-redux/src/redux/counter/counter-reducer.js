import types from './counter-types';

const {
  incrementType,
  decrementType,
  resetType,
  initializeType,
} = types;

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementType:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case decrementType:
      return { ...state, count: state.count - 1 };
    case initializeType:
      return { ...state, count: action.payload };
    case resetType:
      return initialState;

    default:
      return state;
  }
};

export default counterReducer;
