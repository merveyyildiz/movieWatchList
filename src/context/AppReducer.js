const AppReducer  = (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCH_LIST":
            return {
                ...state,
                watchList: [...state.watchList, action.payload],
            };
        case "ADD_MOVIE_TO_WATCHED_LIST":
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.id !== action.payload.id),
                watchedList: [...state.watchedList, action.payload]
            }
        case "DELETE_MOVIE_FROM_WATCH_LIST":
                return {
                    ...state,
                    watchList: state.watchList.filter((movie)=> movie.id !== action.payload)
                };
        case "DELETE_MOVIE_FROM_WATCHED_LIST":
            return {
                ...state,
                watchedList: state.watchedList.filter((movie)=> movie.id !== action.payload)
            };
        case "MOVE_MOVIE_TO_WATCH_LIST":
            return {
                ...state,
                watchList: [...state.watchList, action.payload],
                watchedList: state.watchedList.filter((movie) => movie.id !== action.payload.id)
            }
        case  "SET_MOVIE":
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;