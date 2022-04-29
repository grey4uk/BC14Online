import { useState, useEffect, useCallback } from 'react';
import {
  // connect,
  useDispatch,
  useSelector,
} from 'react-redux';
import PropTypes from 'prop-types';

import s from './Counter.module.css';

import Button from 'components/Button';
import {
  //  useLocalStorage,
  useMethods,
} from 'hooks';
// import Constants from 'assets/constants';
import actions from 'redux/counter/counter-actions';
import functionsActions from './counterhelper';
import counterselectors from 'redux/counter/counter-selectors';

const Counter = (props) => {
  // const [local, setLocal] = useLocalStorage();
  const { counterSeletor } = counterselectors;

  const count = useSelector((state) =>
    counterSeletor(state)
  );

  const { consoleWrite } = useMethods();

  const dispatch = useDispatch();

  const { token } = props;

  const [isActive, setIsActive] = useState(!!count);

  const { decrement, reset } = actions;

  const incrementAction = useCallback(() => {
    functionsActions.incrementFunc(dispatch);
  }, [dispatch]);

  const initAction = useCallback(() => {
    functionsActions.initFunc(dispatch);
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('keypress', incrementAction);
    // consoleWrite();
    initAction();
    return () =>
      window.removeEventListener(
        'keypress',
        incrementAction
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incrementAction, initAction]);

  useEffect(() => {
    setIsActive(!!count);
  }, [count]);

  const decrementAction = () => {
    if (count === 1) {
      setIsActive(false);
    }
    dispatch(decrement());
  };

  const resetAction = () => dispatch(reset());

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <span style={{ fontSize: '56px' }}>{count}</span>
        <div>
          <Button
            onClick={incrementAction}
            title='increment'
            isActive={token}
          />
          <Button
            onClick={decrementAction}
            title='decrement'
            isActive={isActive}
          />
          <Button onClick={resetAction} title='reset' />
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({ count: state.count });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (value) =>
//       dispatch(actions.increment(value)),
//     decrement: () => dispatch(actions.decrement()),
//     init: (value) => dispatch(actions.init(value)),
//     reset: () => dispatch(actions.reset()),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);

export default Counter;

Counter.propTypes = {
  step: PropTypes.number,
  toggle: PropTypes.func,
};

Counter.defaultProps = { step: 0 };
