
export const initialState = {
    results: [],
    loading: false,
    error: ''
}


export const dishSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setLoadingSearch":
      return{
        ...state,
        loading: action.payload
      }
    case "setErrorSearch":
        return{
            ...state,
            error: action.payload
        }
    case "setDish": 
    return{
        ...state,
        results: action.payload
        
    }
        

    default:
      return state;
  }
};