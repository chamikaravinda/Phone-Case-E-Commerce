const authReducer = (state = {authToken: undefined}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state , authToken: "AUTH"};
    case 'LOGOUT':
      return {authToken: undefined};
    default:
      return state
  }
};

export default authReducer
