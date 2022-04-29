import Counter from 'components/Counter/Counter';

const CounterPage = ({ token }) => {
  return (
    <Counter token={token} title='Hide counter' step={2} />
  );
};

export default CounterPage;
