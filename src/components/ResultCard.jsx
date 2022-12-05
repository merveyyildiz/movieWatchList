import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, addMovieToWatchedList, watchList, watchedList, setMovie } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const isDisableWatchBtn = watchList.find(
    (movies) => movies.id === movie.id
  );

  const isDisableWatchedBtn = watchedList.find(
    (movies) => movies.id === movie.id
  );
  
  const handleClick = (e) => {
    e.preventDefault();
    setMovie(movie);
    navigate(`/movie/${movie.title}`);
  }

  return (
    <div>
      <img
        src={
          movie.poster_path
            ? `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`
            : "./assets/images/placeholder.jpg"
        }
        alt="poster"
        onClick={handleClick}
      />
      <div className="movies-card_desc">
        <span className="vote">{movie.vote_average}</span>
        <p className="title">
          {movie.title.length > 46
            ? `${movie.title.substring(0, 45)}...`
            : movie.title}
        </p>
        <span className="release-date">
          {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
        </span>
      </div>
      <div className="movies-card_button">
        <button
          className="btn-watch"
          disabled={isDisableWatchBtn || isDisableWatchedBtn}
          onClick={(e) => {e.preventDefault(); addMovieToWatchList(movie)}}
        >
          Add to Watch List
        </button>
        <button
          className="btn-watched"
          disabled={isDisableWatchedBtn}
          onClick={(e) => {e.preventDefault(e); addMovieToWatchedList(movie)}}
        >
          Add to Watched List
        </button>
      </div>
    </div>
  );
};
export default ResultCard;
