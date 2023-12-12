import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c7dbba92";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const movie1 = {
    Title: "Bucky Larson: Born to Be a Star",
    Year: "2011",
    imdbID: "tt1411664",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIzMjY4MTk2M15BMl5BanBnXkFtZTcwNzQ3ODg3NQ@@._V1_SX300.jpg",
  };

  useEffect(() => {
    searchMovie("Bucky Larson");
  }, []);

  return (
    <div className="app">
      <h1>Movie Page</h1>
      <div className="serch">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found..</h2>
        </div>
      )}
    </div>
  );
};

export default App;
