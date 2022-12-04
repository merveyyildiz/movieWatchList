import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const INITIAL_STATE = {
    watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) :  [],
    watchedList: localStorage.getItem("watchedList") ? JSON.parse(localStorage.getItem("watchedList")) :  [],
    movie: localStorage.getItem("movie") ? JSON.parse(localStorage.getItem("movie")) : ""
}

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    useEffect(()=> {
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
        localStorage.setItem("watchedList", JSON.stringify(state.watchedList));
        localStorage.setItem("movie", JSON.stringify(state.movie));
    }, [state])

    const addMovieToWatchList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCH_LIST",  payload: movie})
    };

    const addMovieToWatchedList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED_LIST", payload: movie})
    };

    const deleteMovieFromWatchList = (id) => {
        dispatch({type: "DELETE_MOVIE_FROM_WATCH_LIST", payload: id})
    }

    const deleteMovieFromWatchedList = (id) => {
        dispatch({type: "DELETE_MOVIE_FROM_WATCHED_LIST", payload: id})
    }

    const moveMovieToWatchList = (movie) => {
        console.log("move",state.watchList.find((m) => m.id === movie.id))
        if (state.watchList.find((m) => m.id === movie.id)) {
            return;
        }
        dispatch({type: "MOVE_MOVIE_TO_WATCH_LIST", payload: movie})
    }

    const setMovie = (movie) => {
        dispatch({type: "SET_MOVIE", payload: movie})
    }

    return (
        <GlobalContext.Provider value={{
            watchList: state.watchList,
            watchedList: state.watchedList,
            movie: state.movie,
            addMovieToWatchList,
            addMovieToWatchedList,
            deleteMovieFromWatchList,
            deleteMovieFromWatchedList,
            moveMovieToWatchList, 
            setMovie,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}