import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Helmet from "./Helmet";
import MovieCard from "./MovieCard";
import "../App.scss";

const WatchedList = () => {
    const {watchedList} = useContext(GlobalContext);

    return (
        <Helmet title="Watched List">
            <div className="watch-header">
                <h1 className="watch-header_title">Watched List</h1>
                <span className="watch-header_movie-lenght">{watchedList.length} {watchedList.length > 1 ? "Movies" : "Movie"}</span>
           </div>
            {
                watchedList &&
                <div className="watch-list">
                    {
                        watchedList.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} type="watchedList"/>
                        ))
                    }
                </div>
            }
        </Helmet>
    )
}

export default WatchedList;