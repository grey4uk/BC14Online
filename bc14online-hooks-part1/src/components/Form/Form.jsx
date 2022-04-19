import { Component } from 'react';
import shortid from 'shortid';

import Button from 'components/Button';

const initialState = {
  username: '',
  email: '',
  gender: '',
  terms: false,
  age: '',
};

const ageGroups = ['10-21', '22-30', '31-100'];

class Form extends Component {
  state = { ...initialState };

  htmlEmailId = shortid.generate();
  htmlRadioId = shortid.generate();

  onChangeInput = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value.trim() });
  };

  reset = () => this.setState(initialState);

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm({
      ...this.state,
      id: shortid.generate(),
    });
    this.reset();
  };

  onChangeGender = ({ target }) => {
    const { value } = target;
    this.setState({ gender: value });
  };

  onChangeTerms = () =>
    this.setState((prev) => ({
      ...prev,
      terms: !prev.terms,
    }));

  onChangeAge = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({ age: value });
  };

  render() {
    const { username, email, gender, terms, age } =
      this.state;
    const {
      onChangeInput,
      onSubmit,
      htmlEmailId,
      htmlRadioId,
      onChangeGender,
      onChangeTerms,
      onChangeAge,
    } = this;
    return (
      <form
        onSubmit={onSubmit}
        style={{
          display: 'grid',
          border: '2px solid #000',
        }}>
        {!username ? <p>Start creating user...</p> : null}
        <div>
          <label>
            {'User name'}
            <input
              name='username'
              placeholder='Enter name'
              type='text'
              value={username}
              onChange={onChangeInput}
            />
          </label>
        </div>
        <div>
          <label htmlFor={htmlEmailId}>Email</label>
          <input
            id={htmlEmailId}
            name='email'
            placeholder='Enter email'
            type='text'
            value={email}
            onChange={onChangeInput}
          />
        </div>

        <label>
          Gender
          <label>
            {' male'}
            <input
              id={htmlRadioId}
              value='male'
              type='radio'
              onChange={onChangeGender}
              checked={gender === 'male'}
            />
          </label>
          <label>
            {'female'}
            <input
              id={htmlRadioId}
              value='female'
              type='radio'
              onChange={onChangeGender}
              checked={gender === 'female'}
            />
          </label>
        </label>
        <label>
          Are yor accept to add your data?
          <input
            type='checkbox'
            onChange={onChangeTerms}
            checked={terms}
          />
        </label>

        <select onChange={onChangeAge} value={age}>
          <option disabled={age}>
            choose your age group
          </option>
          {ageGroups.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>

        <div>
          <Button type='submit' title='Create user' />
        </div>
      </form>
    );
  }
}

export default Form;
