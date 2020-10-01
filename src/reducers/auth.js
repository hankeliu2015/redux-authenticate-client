import { AUTH_USER } from '../actions/types';

const INTIAL_STATE = {
  authenticated: '',
  errorMessage: ''
}

export default function(state=INTIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: action.payload};
    default: 
      return state;
  }
}
