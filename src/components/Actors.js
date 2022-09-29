import React from "react";
import { actors } from "../data";

function Actors() {
  const actorInfo = actors.map((info)=>(
    <div key={info.name}>
    <h2>{info.name}</h2>
    <ul>{info.movies.map((movie)=>(<li key={movie}>{movie}</li>))}</ul>
    </div>
  ))
  return (
  <>
    <h1>Actors Page</h1>
    {actorInfo}
  </>
  );
}

export default Actors;
