export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    payload: userData,
  });
  

  export const updateUserPassword = (data) => {
    return {
      type: 'UPDATE_USER_PASSWORD',
      payload: data,
    };
  };

  const initialState = {
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          user: action.payload,
        };
    
        case 'UPDATE_USER_PASSWORD':
            return {
              ...state,
              user: {
                ...state.user,
                password: action.payload.newPassword, 
              },
            };
      default:
        return state;
    }
  };
  
  export default authReducer;