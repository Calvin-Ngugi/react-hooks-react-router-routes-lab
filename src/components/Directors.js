import React from "react";
import { directors } from "../data";

function Directors() {
  const directorInfo = directors.map((info)=>(
    <div key={info.name}>
    <h2>{info.name}</h2>
    <ul>{info.movies.map((movie)=>(<li key={movie}>{movie}</li>))}</ul>
    </div>
  ))
  return(
  <>
    <h1>Directors Page</h1>
    {directorInfo}
  </>
  );
}

export default Directors;
