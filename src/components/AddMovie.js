import { useState } from 'react';

export default function AddMovie(props) {

    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(0)
    const [imgURL, setImgURL] = useState("")

    // creating a new movie
    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
        "title": title,
        "rating": rating,
        "imgURL": imgURL
        };

        props.createCallback(newMovie);

        //clear form
        setTitle(""); setRating(0); setImgURL("");
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label>Title: 
                <input 
                    required={true}
                    type="text" 
                    name="title" 
                    placeholder="enter the title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} 
                />
            </label>

            <label>Rating: 
                <input 
                    type="number" min={0} max={10}
                    name="rating" 
                    value={rating}
                    onChange={(e) => { setRating(e.target.value) }} 
                />
            </label>

            <label>Image URL:
            <input
                type="url"
                name="imgURL"
                value={imgURL}
                onChange={(e) => { setImgURL(e.target.value) }}
                />
            </label>

            <button>Create</button>
        </form>
      </div>
    );
}