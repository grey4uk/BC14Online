import { useState } from 'react';

import {
  useGetTodosQuery,
  useAddTodoMutation,
} from 'redux/todo/todoApi';

const TodosPage = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading: isLoadingGet } =
    useGetTodosQuery();

  const [addTodo, { isLoading: isLoadingAdd, isError }] =
    useAddTodoMutation();

  const startFind = () => {
    addTodo(query);
  };

  const loading = isLoadingAdd || isLoadingGet;

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={startFind}>Search</button>
      <ul>
        {data?.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  );
};

export default TodosPage;
