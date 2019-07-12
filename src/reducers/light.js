import { TOGGLE_SWITCH } from '../actions';

const initialState = false;

const light = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH: {
      return !state;
    }
    default: {
      return state;
    }
  }
}

export default light;
