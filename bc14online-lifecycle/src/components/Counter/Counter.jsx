import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Counter.module.css';

import Button from 'components/Button';

class Counter extends Component {
  //   state = { step: 0 };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     step: this.props.step,
  //     isActive: false,
  //     date: '0',
  //   };
  // }

  state = {
    step: this.props.step,
    isActive: !!this.props.step,
    date: '0',
  };

  static propTypes = {
    step: PropTypes.number,
    toggle: PropTypes.func,
  };

  static defaultProps = { step: 0 };

  increment = () => {
    for (let i = 0; i < 3; i++) {
      console.log('this.state.step :>> ', this.state.step);
      this.setState((prevState) => {
        const { step, isActive } = prevState;
        console.log('step', step);
        return {
          step: step + 1,
          isActive: isActive ? isActive : true,
        };
      });
    }
  };
  decrement = () => {
    const { step } = this.state;
    if (step === 1) {
      this.setState((state) => ({
        isActive: false,
        step: state.step - 1,
      }));
      return;
    }
    this.setState((state) => ({
      step: state.step - 1,
    }));
  };

  setDate = (date) => this.setState({ date: date });

  render() {
    const { step, isActive, date } = this.state;
    const { increment, decrement, setDate } = this;
    const { toggle, title } = this.props;
    console.log('date :>> ', date);
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
  }
}

export default Counter;
