import { useState } from 'react';
import moviesFromJson from '../data/movies.json'
import "./Main.css"

export default function Main() {

    const [moviesArr, setMoviesArr] = useState(moviesFromJson);
 
    const deleteMovie = (id) => {
        const updatedMoviesArr = moviesArr.filter(movie => {
            return movie.id !== id;
        });
        setMoviesArr(updatedMoviesArr);

    };

    let titleMessage = moviesArr.length > 0 
        ? <h2>Current number of movies: {moviesArr.length}</h2> 
        : <h2>There are no more movies to be displayed</h2>

    return (
      <div className="Main">
        
        {titleMessage}

        {moviesArr.map((movieDetails) => {
                return (
                  <div key={movieDetails.id} className="card">
                    <h4>{movieDetails.title}</h4>

                    {movieDetails.imgURL 
                        ? (<img src={movieDetails.imgURL} alt="" />) 
                        : (<img src="https://via.placeholder.com/182x268" alt="" />
                    )}

                    <p>Year: {movieDetails.year}</p>
                    <p>Rating: {movieDetails.rating}</p>

                    {movieDetails.rating > 8 && (<p className="badge">Highly recommended</p>)}

                    <ul>
                      Genre:
                      {movieDetails.genres.map((genre) => {
                        return <li> {genre} </li>;
                      })}
                    </ul>

                    <button onClick={() => {deleteMovie(movieDetails.id)}} > Delete </button>
                  </div>
                );
            })
        }
      </div>
    );
}