import React, { useEffect } from "react";
//After API fetched
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c7dbba92";

const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovie("Bucky Larson");
  }, []);

  return <h1>App</h1>;
};

export default App;
