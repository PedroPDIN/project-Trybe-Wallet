// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES, ADD_CURRENCIES, REMOVE_EXPENSES } from '../actions';

const INIT = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INIT, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((element) => element.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
