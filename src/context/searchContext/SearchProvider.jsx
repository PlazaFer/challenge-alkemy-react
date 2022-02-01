import { useReducer } from "react";
import { dishSearchReducer, initialState } from '../../reducers/dishSearchReducer';
import { SearchContext } from "./SearchContext";



export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dishSearchReducer, initialState)

  return (
    <SearchContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
