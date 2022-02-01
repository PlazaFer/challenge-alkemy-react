import { useContext, useEffect } from "react";
import { AuthContext } from '../../context/authContext/AuthContext';
import { SearchContext } from "../../context/searchContext/SearchContext";
import { Card } from "../Card/Card";

export const SearchResult = () => {
  const { state, dispatch } = useContext(SearchContext);
  const { authState } = useContext(AuthContext);

  const backToMenu = () => {
    dispatch({
      type: "setDish",
      payload: []
    });
  };


useEffect(() => {
return(() => {
  dispatch({
  type:'setDish',
  payload: []
})
})
}, [authState.token.token, dispatch])


  return (
    <>
      <h4 className="text-center mb-2 mt-2">Results</h4>
      <i
        className="bi bi-backspace-fill ms-5 mb-5 fs-1 text-primary"
        style={{ cursor: "pointer" }}
        onClick={backToMenu}
      ></i>
      <div className="container h-100 w-100 mt-3">
        <div className="row d-flex justify-content-center align-items-center w-100">
          {state.results?.map((result) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={result.id}>
              <Card result={result} add={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
