// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions';

const INIT = {
  user: {
    email: '',
  },
};

const user = (state = INIT, action) => {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state.user,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
