import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
    const {movies = []} = props

    return (
        <div className='movies'>
            {movies.length ? 
                movies.map(m => <Movie {...m} key={m.imdbID}/>) 
                : <h4>Nothing found</h4>} {/* {...m} - передача всех параметров  */}
        </div>
    )
}

export default Movies