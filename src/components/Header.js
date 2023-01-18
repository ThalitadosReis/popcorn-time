import "./Header.css"

export default function Header(props) {

    return (
      <div className="Header">
        
        {props.titleMessage}

        <button onClick={props.sortByRatingAsc}>Rating Asc</button>
        <button onClick={props.sortByRatingDesc}>Rating Desc</button>
      </div>
    );
}