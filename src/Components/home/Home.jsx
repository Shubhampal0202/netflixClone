import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Banner from "../banner/Banner";
import Row from "./Row";
import "./home.scss";
function Home() {
  const Api_key = "f8aa3ed793704c1de3ef2341a7fe971f";
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const url = "https://api.themoviedb.org/3";
  const upcoming = "upcoming";
  const nowPlaying = "now_playing";
  const popular = "popular";
  const topRated = "top_rated";

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${Api_key}`);
      setUpcomingMovies(results);
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${Api_key}`);
      setNowPlayingMovies(results);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${Api_key}`);
      setPopularMovies(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${Api_key}`);
      setTopRatedMovies(results);
    };

    const fetchAllGenres = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${Api_key}`);
      setGenres(genres);
      console.log("Genres ", genres);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    fetchAllGenres();
  }, []);
  return (
    <>
      <Banner imgUrl={imgUrl} popularMovies={popularMovies} />
      <Row title="Upcoming" movies={upcomingMovies} />
      <Row title="Now Playing" movies={nowPlayingMovies} />
      <Row title="Popular" movies={popularMovies} />
      <Row title="Top Rated" movies={topRatedMovies} />

      <div className="genre-cont">
        {genres.map((genre, idx) => {
          return (
            <Link key={idx} to={`/genre/${genre.id}`}>
              {genre.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
