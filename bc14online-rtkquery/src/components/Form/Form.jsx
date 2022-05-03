import { useReducer, useRef, useLayoutEffect } from 'react';
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

const inputTypes = {
  username: 'text',
  email: 'text',
  terms: 'checkbox',
  gender: 'radio',
};

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'username':
      return { ...state, username: payload };
    case 'email':
      return { ...state, email: payload };
    case 'gender':
      return { ...state, gender: payload };
    case 'terms':
      return { ...state, terms: !state.terms };
    case 'age':
      return { ...state, age: payload };
    case 'reset':
      return initialState;

    default:
      break;
  }
};

export const resetForm = () => ({ type: 'reset' });
// export const setInput = ({ type, payload }) => ({
//   type: type,
//   payload: payload,
// });

const htmlEmailId = shortid.generate();
const htmlRadioId = shortid.generate();

function Form({ onSubmitForm }) {
  const [state, dispatch] = useReducer(
    formReducer,
    initialState
  );

  const formRef = useRef();

  console.log('state :>> ', state);

  const onChangeValue = ({ target }) => {
    const { name, value } = target;
    dispatch({ type: name, payload: value });
    // dispatch(setInput({ type: name, payload: value }));
  };

  const reset = () => dispatch(resetForm());

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitForm({
      ...state,
      id: shortid.generate(),
    });
    reset();
  };

  console.log('formRef.current :>> ', formRef.current);

  useLayoutEffect(() => {
    formRef.current.focus();
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'grid',
        border: '2px solid #000',
      }}>
      {Object.keys(state).map((el) => {
        if (el === 'age') {
          return (
            <select
              key={el}
              onChange={onChangeValue}
              name={el}
              value={state[el]}>
              <option disabled={state[el]}>
                choose your age group
              </option>
              {ageGroups.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          );
        }
        if (el === 'gender') {
          return (
            <label key={el}>
              Gender
              <label>
                {' male'}
                <input
                  name={el}
                  id={htmlRadioId}
                  value='male'
                  type={inputTypes[el]}
                  onChange={onChangeValue}
                  checked={state[el] === 'male'}
                />
              </label>
              <label>
                {'female'}
                <input
                  name={el}
                  id={htmlRadioId}
                  value='female'
                  type={inputTypes[el]}
                  onChange={onChangeValue}
                  checked={state[el] === 'female'}
                />
              </label>
            </label>
          );
        }
        return (
          <div key={el}>
            <label>
              {el}
              <input
                ref={el === 'username' ? formRef : null}
                name={el}
                placeholder={`Choose ${el}`}
                type={inputTypes[el]}
                value={state[el]}
                onChange={onChangeValue}
                checked={state[el]}
              />
            </label>
          </div>
        );
      })}
      {/* <div>
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
      </label> */}

      {/* <select onChange={onChangeValue} name={} value={age}>
        <option disabled={age}>
          choose your age group
        </option>
        {ageGroups.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select> */}

      <div>
        <Button type='submit' title='Create user' />
      </div>
    </form>
  );
}

export default Form;
