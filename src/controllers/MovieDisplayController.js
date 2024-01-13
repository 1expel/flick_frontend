import { getToken } from "../controllers/UserAuthentication";
let token = getToken();

export async function recordDecision(movieID, userID, action) {
  const axios = require("axios");
  const headers = { Authorization: `Bearer ${token}` };

  try {
    await axios.post(
      "https://flick-service.herokuapp.com/api/record/",
      {
        user: `${userID}`,
        movie: `${movieID}`,
        action: `${action}`,
      },
      { headers: headers }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveMovie(userID) {
  const axios = require("axios");
  var description = "";
  var genres = "";
  var title = "";
  let config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { user: `${userID}` },
  };
  let config2 = {
    headers: { Authorization: `Bearer ${token}` },
    params: { movieid: `${id}` },
  };

  try {
    const response = await axios.get(
      `https://flick-service.herokuapp.com/api/movie/user/${userID}`,
      config
    );
    var id = response.data.movie;
  } catch (error) {
    console.log(error);
  }
  try {
    const response2 = await axios.get(
      `https://flick-service.herokuapp.com/api/movie/${id}`,
      config2
    );

    id = response2.data.movieid;
    title = response2.data.title;
    description = response2.data.description;
    genres = response2.data.genres;
  } catch (error) {
    console.log(error);
    id = "";
    title = "No movies available";
    genres = "";
    description = "All movies have been selected by user.";
  }
  return [id, title, description, genres];
}
export async function retrieveMovieTitle(movieID) {
  const axios = require("axios");
  var title = "";
  let config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { movieid: `${movieID}` },
  };

  try {
    
    const response2 = await axios.get(
      `https://flick-service.herokuapp.com/api/movie/${movieID}`,
      config
    );

    title = response2.data.title;
  } catch (error) {
    console.log(error);
  }
  return title;
}
