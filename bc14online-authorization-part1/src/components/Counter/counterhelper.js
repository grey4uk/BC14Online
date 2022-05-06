import actions from 'redux/counter/counter-actions';

const incrementFunc = (dispatch) => {
  for (let i = 0; i < 3; i++) {
    // console.log('this.state.step :>> ', step);
    // setStep((prevStep) => {
    //   // console.log('step>>>', step);
    //   // console.log('prevStep>>>', prevStep);
    //   // console.log('--------------------------');
    //   return prevStep + 1;
    // });
    dispatch(actions.increment(i));
  }
};

const initFunc = (dispatch) => dispatch(actions.init(2));

const functionsActions = { incrementFunc, initFunc };

export default functionsActions;
