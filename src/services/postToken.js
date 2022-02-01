import axios from "axios";

export const postToken = async ({ email, password }) => {
  const url = "http://challenge-react.alkemy.org/";

  try {

    const { data } = await axios.post(url, {
      email,
      password,
    });
    
    return data;

  } catch (error) {
    return error;
  }
};
