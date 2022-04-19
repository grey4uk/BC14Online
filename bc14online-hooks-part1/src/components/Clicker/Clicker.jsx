import { useState, useEffect } from 'react';

// class Clicker extends Component {
//   state = { count: 0 };
//   render() {
//     console.log('this.state :>> ', this.state.count);
//     return (
//       <button
//         onClick={() =>
//           this.setState({ count: this.state.count + 1 })
//         }>
//         Click
//       </button>
//     );
//   }
// }

// export default Clicker;

const Clicker = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(`Component was clicked ${count}>>>`);
    setTitle((prevState) => prevState + 'q');
  }, [count, title]);

  return (
    <>
      <p>{count}</p>
      <p>{title}</p>

      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Clicker;
