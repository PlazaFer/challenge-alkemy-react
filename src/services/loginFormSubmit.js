import { postToken } from "./postToken";



export const loginFormSubmit = async (values, dispatch) => {

    dispatch({
      type: "setLoadingToken",
      payload: true,
    });

    dispatch({
      type: "setErrorToken",
      payload: "",
    });

    try {
      const token = await postToken(values);

      if (token.response?.status === 401) {
        dispatch({
          type: "setLoadingToken",
          payload: false,
        });

        dispatch({
          type: "setErrorToken",
          payload: token.response.data.error,
        });
      } else {

        dispatch({
            type: "setErrorToken",
            payload: ''
        })

        dispatch({
          type: "setLoadingToken",
          payload: false,
        });

        dispatch({
          type: "setToken",
          payload: token,
        });

      }
    } catch(error) {
      throw new Error(`${error}`);
    }
}