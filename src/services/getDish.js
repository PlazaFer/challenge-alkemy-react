import axios from "axios";

export const getDish = async (ingredient) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;

    const url = `${process.env.REACT_APP_URL}?query=${ingredient}&number=30&addRecipeInformation=true&addRecipeNutrition=true&offset=0&apiKey=${apiKey}`;

    const response = await axios(url);
    return response;
  } catch (error) {
    return error;
  }
};
