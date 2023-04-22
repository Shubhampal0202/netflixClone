import React from "react";
import Imgcard from "./Imgcard";
function Row({ title, movies }) {
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <Imgcard movies={movies} />
    </div>
  );
}

export default Row;
