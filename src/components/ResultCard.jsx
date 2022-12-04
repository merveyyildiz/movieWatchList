import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({movie}) => {
  const {addMovieToWatchList, addMovieToWatchedList} = useContext(GlobalContext);

  return (
    <>
      <img
        src={movie.poster_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}` : './assets/images/placeholder.jpg'}
        alt="poster"
      />
      <div className="movies-card_desc">
        <span className="vote">{movie.vote_average}</span>
        <p className="title">{movie.title}</p>
        <span className="release-date">{movie.release_date ? movie.release_date.substring(0,4) : "-"}</span>
      </div>
      <div className="movies-card_button">
        <button className="btn-watch" onClick={() => addMovieToWatchList(movie)}>Add to Watch List</button>
        <button className="btn-watched" onClick={() => addMovieToWatchedList(movie)}>Add to Watched List</button>
      </div>
    </>
  );
};
export default ResultCard;
