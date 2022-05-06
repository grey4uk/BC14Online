import { GoogleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { registerGoogle } from 'redux/auth/authOperations';
import Button from 'components/Button/Button';

const ButtonGoogle = () => {
  const dispatch = useDispatch();
  const authGoogle = () => {
    dispatch(registerGoogle());
  };
  return (
    <Button
      type='button'
      onClick={authGoogle}
      style={{
        padding: '10px 60px',
        background: 'blue',
        display: 'grid',
      }}>
      <GoogleOutlined />
    </Button>
  );
};

export default ButtonGoogle;
