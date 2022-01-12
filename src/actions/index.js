// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const getUser = (payload) => ({
  type: 'ADD_USER',
  payload,
});

export const getExpenses = (payload) => ({
  type: 'ADD_EXPENSES',
  payload,
});
