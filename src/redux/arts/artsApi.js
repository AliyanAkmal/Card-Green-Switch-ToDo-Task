import axios from "axios";

export const getArts = async (payload) => {
  try {
    // getting data through api call
    const arts = await axios.get(
      "https://api.lumiplace.io/app.v1/api/getArticles",
      payload
    );
    return arts;
  } catch (error) {
    console.log(error.message);
  }
};
