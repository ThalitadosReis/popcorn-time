import { useState } from 'react';
import moviesFromJson from './data/movies.json'

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import AddMovie from './components/AddMovie';

import './App.css';

function App() {
  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const [searchQuery, setSearchQuery] = useState("");

  const moviesToDisplay = moviesArr.filter( (movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // deleting a movie
  const deleteMovie = (title) => {
    const updatedMoviesArr = moviesArr.filter(movie => {
        return movie.title !== title;
    });
    setMoviesArr(updatedMoviesArr);
  };

  const createMovie = (newMovieObj) => {
    //update list of movies
    setMoviesArr( (prevListOfMovies) => {
      const newList = [newMovieObj, ...prevListOfMovies];
      return newList;
    });
  }

  let titleMessage = moviesArr.length > 0 
    ? <h1>Current number of movies: {moviesToDisplay.length}</h1> 
    : <h1>There are no more movies to be displayed</h1>
    
  // sorting by rating
  const sortByRatingAsc = () => {setMoviesArr([...moviesArr].sort((a, b) => b.rating - a.rating))}
  const sortByRatingDesc = () => {setMoviesArr([...moviesArr].sort((a, b) => a.rating - b.rating))}

  return (
    <div className="App">

      <Header titleMessage={titleMessage} sortByRatingAsc={sortByRatingAsc} sortByRatingDesc={sortByRatingDesc} />

      <AddMovie createCallback={createMovie} />
      <hr />
      <form>
        <label>
            Search by Title:
            <input 
              type="text" 
              name="searchQuery" 
              placeholder="search by title" 
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value) }} 
              />
        </label>
      </form>


      <Main moviesArr={moviesToDisplay} deleteCallback={deleteMovie} />

      <Footer />

    </div>
  );
}

export default App;
