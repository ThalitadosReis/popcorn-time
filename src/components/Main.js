import "./Main.css"
import Movie from './Movie';

export default function Main(props) {

    return (
      <div className="Main" >

        {props.moviesArr.map((movieObject) => {
                return <Movie 
                movieDetails={movieObject} 
                deleteCallback={props.deleteCallback} />
            })
        }

      </div>
    );
}