import React from "react";

const Card = ({movie}) => {
  return (
    <>
      <img
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
        alt="poster"
      />
      <div className="movies-card_desc">
        <span className="vote">{movie.vote_average}</span>
        <p className="title">{movie.title}</p>
        <span className="release-date">{movie.release_date}</span>
      </div>
      <div className="movies-card_button">
        <button className="btn-watch">Add to Watch List</button>
        <button className="btn-watched">Add to Watched List</button>
      </div>
    </>
  );
};
export default Card;
