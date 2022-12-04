import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import Helmet from "./Helmet";

const WatchList = () => {
    const { watchList} = useContext(GlobalContext);

    return (
        <Helmet title="Watch List">
           <h1 className="title">Watch List</h1> 
            {
                watchList &&
                <div className="watch-list">
                    {
                        watchList.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                </div>
                
            }
        </Helmet>
    )
}
export default WatchList;