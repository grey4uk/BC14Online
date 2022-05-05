import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLanguage } from 'language/translation';
import Button from 'components/Button';
import Constants from 'assets/constants';
import counterselectors from 'redux/counter/counter-selectors';

const Clicker = () => {
  const { lang, setLang } = useLanguage();
  const { title } = lang;
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(`Component was clicked ${count}>>>`);
  }, [count]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column' }}>
      <p>{count}</p>
      <p>{title}</p>
      <Button
        title='ENGLISH'
        onClick={() => setLang(Constants.languages.EN)}
      />
      <Button
        title='UKRAINE'
        onClick={() => setLang(Constants.languages.UK)}
      />
      <Button
        title='russian'
        onClick={() => setLang(Constants.languages.RU)}
      />

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Clicker;
