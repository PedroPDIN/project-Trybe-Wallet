// Coloque aqui suas actions
import getApi from '../service/fetchApi';

export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const getUser = (payload) => ({
  type: 'ADD_USER',
  payload,
});

export const getExpenses = (payload) => ({
  type: 'ADD_EXPENSES',
  payload,
});

export const getCurrencies = (payload) => ({
  type: 'ADD_CURRENCIES',
  payload,
});

export const getRequire = (rates) => ({
  type: 'REQUIRE_SUCCESS',
  rates,
});

export const removeExpenses = (id) => ({
  type: 'REMOVE_EXPENSES',
  id,
});

// ======================= thunks =============================

export const getCoinsApi = () => (dispatch) => getApi()
  .then((data) => dispatch(getCurrencies(Object.keys(data)
    .filter((value) => value !== 'USDT'))));

export const getRequireApi = () => () => getApi()
  .then((data) => data);
