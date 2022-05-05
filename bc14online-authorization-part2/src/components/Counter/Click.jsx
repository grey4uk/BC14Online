import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/counter/counter-actions';
import counterselectors from 'redux/counter/counter-selectors';

const Click = () => {
  const dispatch = useDispatch();
  const click = useSelector(counterselectors.clickSelector);
  const { clickPress } = actions;
  return (
    <>
      <p>{click}</p>
      <button
        type='button'
        onClick={() => dispatch(clickPress())}>
        click
      </button>
    </>
  );
};

export default Click;
