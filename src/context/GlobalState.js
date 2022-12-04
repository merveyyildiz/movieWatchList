import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const INITIAL_STATE = {
    watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) :  [],
    watchedList: localStorage.getItem("watchedList") ? JSON.parse(localStorage.getItem("watchedList")) :  [],
}

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    useEffect(()=> {
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
        localStorage.setItem("watchedList", JSON.stringify(state.watchedList));
    }, [state])

    const addMovieToWatchList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCH_LIST",  payload: movie})
    };

    const addMovieToWatchedList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED_LIST", payload: movie})
    };

    const deleteMovieFromWatchList = (movieId) => {
        dispatch({type: "DELETE_MOVIE_FROM_WATCH_LIST", payload: movieId})
    }

    const deleteMovieFromWatchedList = (movieId) => {
        dispatch({type: "DELETE_MOVIE_FROM_WATCHED_LIST", payload: movieId})
    }

    return (
        <GlobalContext.Provider value={{
            watchList: state.watchList,
            watchedList: state.watchedList,
            addMovieToWatchList,
            addMovieToWatchedList,
            deleteMovieFromWatchList,
            deleteMovieFromWatchedList
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}