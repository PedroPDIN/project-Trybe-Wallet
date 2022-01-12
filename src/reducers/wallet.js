// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
