import React, {useState} from "react";
import Helmet from "./Helmet";
import Card from "./Card";

const AddMovie = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const handleClick = () => {
        console.log(query);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
        })
        .catch((error) => console.log(error))
    }

    return (
        <Helmet title="Add Movie">
            <div className="container" id="addMovie">
                <div className="head">
                    <h1>Welcome.</h1>
                    <h2>Millions of movies, Tv shows and people to discover. Explore now.</h2>
                    <div className="search-bar">
                        <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie, tv show, person..." />
                        <button onClick={handleClick}>Search</button>
                    </div>
                </div>

                {movies.length > 0  &&
                    <div className="movies">
                        {movies &&movies.map(movie => (
                            <div className="movies-card" key={movie.id}>
                               <Card movie={movie} />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </Helmet>
    )
}

export default AddMovie;