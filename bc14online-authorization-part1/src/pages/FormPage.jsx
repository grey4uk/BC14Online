import { useState, useMemo } from 'react';
import Form from 'components/Form/Form';

const FormPage = () => {
  const [users, setUsers] = useState([]);
  const onSubmitForm = (user) => setUsers([...users, user]);
  const usersMans = useMemo(() =>
    users.filter((el) => el.gender === 'male', [users])
  );
  return (
    <div>
      <Form onSubmitForm={onSubmitForm} />
    </div>
  );
};

export default FormPage;
