import { useState } from 'react';
import moviesFromJson from './data/movies.json'

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import './App.css';

function App() {
  const [moviesArr, setMoviesArr] = useState(moviesFromJson);
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [imgURL, setImgURL] = useState("")

  // deleting a movie
  const deleteMovie = (title) => {
    const updatedMoviesArr = moviesArr.filter(movie => {
        return movie.title !== title;
    });
    setMoviesArr(updatedMoviesArr);
  };

  // creating a new movie
  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      "title": title,
      "rating": rating,
      "imgURL": imgURL
    };

    //update list of movies
    setMoviesArr( (prevListOfMovies) => {
      const newList = [newMovie, ...prevListOfMovies];
      return newList;
    });

    //clear form
    setTitle(""); setRating(0); setImgURL("");
  }

  let titleMessage = moviesArr.length > 0 
    ? <h1>Current number of movies: {moviesArr.length}</h1> 
    : <h1>There are no more movies to be displayed</h1>
    
  // sorting by rating
  const sortByRatingAsc = () => {setMoviesArr([...moviesArr].sort((a, b) => b.rating - a.rating))}
  const sortByRatingDesc = () => {setMoviesArr([...moviesArr].sort((a, b) => a.rating - b.rating))}

  return (
    <div className="App">

      <Header titleMessage={titleMessage} sortByRatingAsc={sortByRatingAsc} sortByRatingDesc={sortByRatingDesc} />

      {/* form */}
      <form onSubmit={handleSubmit}>
        <label>Title: 
          <input 
            required={true}
            type="text" 
            name="title" 
            placeholder="enter the title" 
            value={title} 
            onChange={(e) => { setTitle(e.target.value) }} />
        </label>

        <label>Rating: 
          <input 
              type="number" min={0} max={10}
              name="rating" 
              value={rating}
              onChange={(e) => { setRating(e.target.value) }} />
        </label>

        <label>Image URL:
          <input
            type="url"
            name="imgURL"
            value={imgURL}
            onChange={(e) => { setImgURL(e.target.value) }} />
         </label>

        <button>Create</button>
      </form>

      <Main moviesArr={moviesArr} deleteCallback={deleteMovie} />

      <Footer />

    </div>
  );
}

export default App;
