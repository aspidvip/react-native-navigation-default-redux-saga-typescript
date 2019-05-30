import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  activeUser: true,
  close: '1234',
});

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'signIn.TRIGGER': {
      const { email, phone } = payload;
      return state.setIn(['loading', 'auth'], true).set(email ? 'email' : 'phone', email || phone);
    }
    default:
      return state;
  }
};
