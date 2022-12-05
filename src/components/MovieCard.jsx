import React from "react";
import "../App.scss";
import MovieIcons from "./MovieIcons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Card = ({movie, type}) => {
    const {setMovie} = useContext(GlobalContext);

    const navigator = useNavigate();

    const handleClick = () => {
        setMovie(movie);
        navigator(`/movie/${movie.title}`);
    }
    
    return (
        <div className="card">
            <img className="card_img" onClick={handleClick} src={movie.poster_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}` : './assets/images/placeholder.jpg'} alt="poster"/>
            <MovieIcons movie={movie} type={type} />
        </div>
    )
}

export default Card;