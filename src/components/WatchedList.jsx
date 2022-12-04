import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Helmet from "./Helmet";

const WatchedList = () => {
    const {watchedList} = useContext(GlobalContext);

    return (
        <Helmet title="Watched List">
            {watchedList && watchedList.map((movie) => (
                <h1>{movie.title}</h1>
            ))}
        </Helmet>
    )
}

export default WatchedList;