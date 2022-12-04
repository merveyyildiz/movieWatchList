import React from "react";
import "../App.scss";
import MovieIcons from "./MovieIcons";

const Card = ({movie}) => {

    return (
        <div className="card">
            <img className="card_img" src={movie.poster_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}` : './assets/images/placeholder.jpg'} alt="poster"/>
            <MovieIcons movie={movie} />
        </div>
    )
}

export default Card;