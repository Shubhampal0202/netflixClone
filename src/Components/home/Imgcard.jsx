import React from "react";

function Imgcard({ movies }) {
     const imgUrl = "https://image.tmdb.org/t/p/original";
    return (
      <div className="card-container">
        {movies.length > 0 &&
          movies.map((item, idx) => {
            return (
              <img
                className="movieImage"
                key={idx}
                src={`${imgUrl}${item.poster_path}`}
                alt=""
              />
            );
          })}
      </div>
    );
            
}

export default Imgcard;
