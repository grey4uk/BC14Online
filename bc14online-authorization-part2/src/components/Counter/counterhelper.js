import actions from 'redux/counter/counter-actions';

const incrementFunc = (dispatch) => {
  for (let i = 0; i < 3; i++) {
    dispatch(actions.increment(i));
  }
};

const initFunc = (dispatch) => dispatch(actions.init(2));

const functionsActions = { incrementFunc, initFunc };

export default functionsActions;
