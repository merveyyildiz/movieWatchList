import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieIcons = ({movie, type}) => {
    const {deleteMovieFromWatchList, addMovieToWatchedList, deleteMovieFromWatchedList, moveMovieToWatchList} =  useContext(GlobalContext);
    
    return (
        <div className="card_icon">
            {
                type === "watchList" ? 
                <>
                    <i className="fas fa-eye" onClick={() => addMovieToWatchedList(movie)}></i>
                    <i className="fas fa-trash" onClick={() => deleteMovieFromWatchList(movie.id)}></i>
                </>
                :
                <>
                    <i className="fas fa-eye-slash" onClick={() => moveMovieToWatchList(movie)}></i>
                    <i className="fas fa-trash" onClick={() => deleteMovieFromWatchedList(movie.id)}></i>
                </>
            }

        </div>
    )
}

export default MovieIcons;