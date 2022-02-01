import { getDish } from './getDish';

export const searchDishSubmit = async (
  ingredient,
  dispatch
) => {

    dispatch({
      type: "setLoadingSearch",
      payload: true,
    });

    dispatch({
      type: "setErrorSearch",
      payload: '',
    });

  try {

    const {data, status}  = await getDish(ingredient);

    if(status === 200){

        dispatch({
            type: 'setDish',
            payload: data.results
        })

        dispatch({
            type: 'setLoadingSearch',
            payload: false
        })
    }else{
        dispatch({
            type: 'setLoadingSearch',
            payload: false
        })

        dispatch({
            type: 'setErrorSearch',
            payload: 'An error are ocurred'
        })
    }


  } catch (error) {
    return error;
  }
};