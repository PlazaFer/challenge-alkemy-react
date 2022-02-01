

export const initialState = {
  token: JSON.parse(localStorage.getItem("user")),
  loading: false,
  error: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'setLoadingToken':
        return {
            ...state,
            loading: action.payload
        }
    case 'setErrorToken': 
        return {
            ...state,
            error: action.payload
        }
    case 'setToken': {
        return {
            ...state,
            token: action.payload
        }
    }

    default:
      return state;
  }
};
