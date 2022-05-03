import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62711ecc6a36d4d62c219269.mockapi.io',
  }),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
      providesTags: ['todos'],
    }),

    addTodo: builder.mutation({
      query: (data) => ({
        url: '/todos',
        method: 'POST',
        body: { name: data },
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } =
  todosApi;
export default todosApi;
