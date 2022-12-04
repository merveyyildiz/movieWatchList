export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCH_LIST":
            return {
                ...state,
                watchList: [...state.watchList, action.payload],
            };
        case "ADD_MOVIE_TO_WATCHED_LIST":
            return {
                ...state,
                watchedList: [...state.watchedList, action.payload]
            }
        case "DELETE_MOVIE_FROM_WATCH_LIST":
                return {
                    ...state,
                    watchList: state.watchList.filter((movie)=> movie.id !== action.payload.id)
                };
        case "DELETE_MOVIE_FROM_WATCHED_LIST":
            return {
                ...state,
                watchedList: state.watchedList.filter((movie)=> movie.id !== action.payload)
            };
        default:
            return state;
    }
}