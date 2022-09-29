import React from "react";
import { movies } from "../data";

function Movies() {
  const movieInfo = movies.map((info)=>(
    <div key={info.title}>
    <h2>{info.title}</h2>
    <p>{info.time}</p>
    <ul>{info.genres.map((genre)=>(<li key={genre}>{genre}</li>))}</ul>
    </div>
  ))
  return (
  <>
    <h1>Movies Page</h1>
    {movieInfo}
  </>
  );
}

export default Movies;
