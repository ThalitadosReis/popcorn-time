import "./Main.css"

export default function Movie(props) {
  return (
    <div className="card">
      <h3>{props.movieDetails.title}</h3>

      {props.movieDetails.imgURL 
        ? <img src={props.movieDetails.imgURL} alt="" />
        : <img src="https://via.placeholder.com/182x268" alt="" />
      }

      <p>Rating: {props.movieDetails.rating}</p>

      {/* <p>
        Genre:
        {props.movieDetails.genres.map((genre) => {
          return <p> {genre} </p>;
        })}
      </p> */}

      {props.movieDetails.rating > 8 && (
        <p className="badge">Highly recommended</p>
      )}

      <button onClick={() => { props.deleteCallback(props.movieDetails.title) }}> Delete </button>
    </div>
  );
}
