import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Todo from './Todo';

test('renders todo text', () => {
  const todo = { text: 'Test Todo', done: false };
  const { getByText } = render(<Todo todo={todo} />);
  expect(getByText('Test Todo')).toBeInTheDocument();
});

test('calls completeTodo and deleteTodo when buttons are clicked', () => {
  const todo = { text: 'Test Todo', done: false };
  const completeTodo = jest.fn();
  const deleteTodo = jest.fn();
  const { getByText } = render(<Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />);

  fireEvent.click(getByText('Set as done'));
  expect(completeTodo).toBeCalledWith(todo);

  fireEvent.click(getByText('Delete'));
  expect(deleteTodo).toBeCalledWith(todo);
});