import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ReactTooltip from "react-tooltip";
import Helmet from "./Helmet";

const DetailCard = () => {
  const {
    movie,
    addMovieToWatchList,
    addMovieToWatchedList,
    watchList,
    watchedList,
  } = useContext(GlobalContext);

  return (
    <Helmet title={movie.title}>
        <div className="detail-card">
        <div className="detail-card_img">
            <img
            src={
                movie.poster_path
                ? `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`
                : "./assets/images/placeholder.jpg"
            }
            alt="poster"
            />
        </div>
        <div className="detail-card_content">
            <div className="title">
            <h1>{movie.title}</h1>{" "}
            <span>({movie.release_date.substring(0, 4)})</span>
            </div>

            <div className="list">
            <div className="average">
                <span className="container">
                <span className="value">{movie.vote_average}</span>
                </span>
                <div className="desc">
                Imdb <br /> Points
                </div>
            </div>
            <div className="icon">
                <button
                className="watch"
                disabled={watchList.find((movies) => movies.id === movie.id)}
                onClick={() => addMovieToWatchList(movie)}
                data-tip="Add Watch List"
                >
                <i className="fas fa-list"></i>
                <ReactTooltip place="bottom" />
                </button>
                <button
                className="watched"
                disabled={watchedList.find((movies) => movies.id === movie.id)}
                onClick={() => addMovieToWatchedList(movie)}
                data-tip="Add Watched List"
                >
                <i className="fas fa-eye"></i>
                <ReactTooltip place="bottom" />
                </button>
            </div>
            </div>

            <p className="desc-title">Description</p>
            <p className="desc">{movie.overview}</p>
            <ReactTooltip place="bottom" />
        </div>
        </div>
    </Helmet>
  );
};

export default DetailCard;
