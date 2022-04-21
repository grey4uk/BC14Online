import { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './Counter.module.css';

import Button from 'components/Button';
import { useLocalStorage, useMethods } from 'hooks';
import Constants from 'assets/constants';

// class Counter extends Component {
//   //   state = { step: 0 };
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     step: this.props.step,
//   //     isActive: false,
//   //     date: '0',
//   //   };
//   // }

//   state = {
//     step: this.props.step,
//     isActive: !!this.props.step,
//     date: '0',
//   };

//   static propTypes = {
//     step: PropTypes.number,
//     toggle: PropTypes.func,
//   };

//   static defaultProps = { step: 0 };

//   increment = () => {
//     for (let i = 0; i < 3; i++) {
//       console.log('this.state.step :>> ', this.state.step);
//       this.setState((prevState) => {
//         const { step, isActive } = prevState;
//         console.log('step', step);
//         return {
//           step: step + 1,
//           isActive: isActive ? isActive : true,
//         };
//       });
//     }
//   };
//   decrement = () => {
//     const { step } = this.state;
//     if (step === 1) {
//       this.setState((state) => ({
//         isActive: false,
//         step: state.step - 1,
//       }));
//       return;
//     }
//     this.setState((state) => ({
//       step: state.step - 1,
//     }));
//   };

//   setDate = (date) => this.setState({ date: date });

//   render() {
//     const { step, isActive, date } = this.state;
//     const { increment, decrement, setDate } = this;
//     const { toggle, title } = this.props;
//     console.log('date :>> ', date);
//     return (
//       <div className={s.container}>
//         <Button
//           onClick={toggle}
//           title={title}
//           className={s.hide}
//         />
//         <div className={s.wrapper}>
//           <span style={{ fontSize: '56px' }}>{step}</span>
//           <div>
//             <Button
//               onClick={increment}
//               title='increment'
//               setDate={setDate}
//             />
//             <Button
//               onClick={decrement}
//               title='decrement'
//               isActive={isActive}
//               setDate={setDate}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

const Counter = (props) => {
  // state = {
  //   step: this.props.step,
  //   isActive: !!this.props.step,
  //   date: '0',
  // };

  const [local, setLocal] = useLocalStorage();

  const { consoleWrite } = useMethods();

  const { title, toggle } = props;
  const [step, setStep] = useState(props.step);
  const [isActive, setIsActive] = useState(!!props.step);
  const [date, setDate] = useState(0);

  useEffect(() => {
    window.addEventListener('keypress', increment);
    consoleWrite();
    return () =>
      window.removeEventListener('keypress', increment);
  }, []);

  useEffect(() => {
    const {
      keys: { STEP },
    } = Constants;
    setLocal({ [STEP]: step });
  }, [step]);

  const increment = () => {
    for (let i = 0; i < 3; i++) {
      // console.log('this.state.step :>> ', step);
      setStep((prevStep) => {
        // console.log('step>>>', step);
        // console.log('prevStep>>>', prevStep);
        // console.log('--------------------------');
        return prevStep + 1;
      });
    }
  };
  const decrement = () => {
    if (step === 1) {
      setIsActive(false);
    }
    setStep(step - 1);
  };

  console.log('date :>> ', date);
  console.log(
    ' LOCAL STORAGE:>> ',
    local ? local[Constants.keys.STEP] : 'null'
  );

  return (
    <div className={s.container}>
      <Button
        onClick={toggle}
        title={title}
        className={s.hide}
      />
      <div className={s.wrapper}>
        <span style={{ fontSize: '56px' }}>{step}</span>
        <div>
          <Button
            onClick={increment}
            title='increment'
            setDate={setDate}
          />
          <Button
            onClick={decrement}
            title='decrement'
            isActive={isActive}
            setDate={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  step: PropTypes.number,
  toggle: PropTypes.func,
};

Counter.defaultProps = { step: 0 };
