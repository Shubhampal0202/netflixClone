import React from "react";
import "./banner.scss";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

function Banner({ imgUrl, popularMovies }) {
  console.log(">>>>>>>", popularMovies);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: popularMovies[0]
          ? `url(${imgUrl}${popularMovies[0].poster_path})`
          : "rgb(16,16,16)",
      }}
    >
      {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}

      {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
      <div>
        <button>
          <BiPlay /> Play
        </button>
        <button>
          My List <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default Banner;

//`${imgUrl}${popularMovies[0].poster_path}`}
