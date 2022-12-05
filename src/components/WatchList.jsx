import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import Helmet from "./Helmet";

const WatchList = () => {
    const { watchList} = useContext(GlobalContext);

    return (
        <Helmet title="Watch List">
           <div className="watch-header">
                <h1 className="watch-header_title">Watch List</h1>
                <span className="watch-header_movie-lenght">{watchList.length} {watchList.length > 1 ? "Movies" : "Movie"}</span>
           </div>
            {
                watchList &&
                <div className="watch-list">
                    {
                        watchList.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} type="watchList" />
                        ))
                    }
                </div>
                
            }
            {
                watchList.length === 0 &&
                <div className="watch-list">
                    <p>There is no movie to list.</p>
                </div>
            }
        </Helmet>
    )
}
export default WatchList;