import { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  render() {
    const {
      onClick = () => {},
      title,
      type = 'button',
      isActive = true,
      setDate = () => {},
    } = this.props;

    return (
      <button
        disabled={!isActive}
        type={type}
        onClick={() => {
          setDate(Date.now());
          onClick();
        }}
        className={isActive ? s.active : s.unactive}>
        {title}
      </button>
    );
  }
}

export default Button;
