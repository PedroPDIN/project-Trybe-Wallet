// Coloque aqui suas actions
import getApi from '../service/fetchApi';

export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
/* export const REQUIRE_SUCCESS = 'REQUIRE_SUCCESS'; */
/* export const REQUIRE_ERROR = 'REQUIRE_ERROR'; */

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

// ======================= thunks =============================

export const getCoinsApi = () => (dispatch) => getApi()
  .then((data) => dispatch(getCurrencies(Object.keys(data)
    .filter((value) => value !== 'USDT'))));

export const getRequireApi = () => () => getApi()
  .then((data) => data);
