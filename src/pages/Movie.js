import React from "react";
import "../App.css";
import { ReactComponent as Check } from "../assets/Like.svg";
import { ReactComponent as NoCheck } from "../assets/Dislike.svg";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { recordDecision, retrieveMovie} from "../controllers/MovieDisplayController";
import { getUserID } from "../controllers/UserAuthentication";

function Movie() {
  const GenreName = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Family",
    "Fantasy",
    "Horror",
    "Romance",
  ];
  let genres = [];
  let tempString = "";
  const [isLoading, setLoading] = useState(true);
  const userID = getUserID();
  const [title, setTitle] = useState("");
  const [genresString, setGenresString] = useState("");
  const [description, setDescription] = useState("");
  const [movieID, setMovieID] = useState("");

  async function setData(movieArray) {
    movieArray = await retrieveMovie(userID);
    console.log(movieArray);

    setMovieID(movieArray[0]);
    setTitle(movieArray[1]);
    setDescription(movieArray[2]);
    genres = movieArray[3];
    tempString = "";

    for (let i = 0; i < genres.length; i++) {
      tempString += GenreName[genres[i]] + ", ";
    }
    tempString = tempString.substring(0, tempString.length - 2);
    console.log(tempString);
    setGenresString(tempString);
  }

  async function handler(action) {
    console.log(movieID, "movieID");
    await recordDecision(movieID, userID, action);
    setData();
  }

  useEffect(() => {
    async function fetchData() {
      setData();
      setLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="LoadingView">Loading...</div>;
  }

  return (
    <div className="view">
      <Navbar />
      <div class="movie-selection">
        <div class="header">
          <h1>Movie Selection</h1>
        </div>

        <div class="movie-pane">
          <div class="movie-title">
            <b>{title}</b>
          </div>
          <div class="movie-genres">{genresString}</div>
          <div class="movie-description">{description}</div>
        </div>

        <div class="icon-pane">
          <button onClick={() => handler(false)}>
            <NoCheck class="check"></NoCheck>
          </button>
          <div class="divider"></div>
          <button onClick={() => handler(true)}>
            <Check class="check"></Check>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
