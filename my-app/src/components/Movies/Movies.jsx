import { useState } from "react";
import { movies } from "../../data/movies";
export default function Movies() {
  const [movie, setMovie] = useState(movies);

  const handleDelete = (id) => {
    const updateMovie = movie.filter((movie) => movie.id !== id);
    setMovie(updateMovie);
  };

  return (
    <>
      <div>
        <h1>MOVIE RATING:{movie.length} </h1>
        {movie.length === 0 && <h2>No movies left</h2>}
        <ul>
          {movie.map((m) => (
            <li key={m.id}>
              {m.id} {m.title} Rating: {m.rating} {m.rating >= 8 && "🤩"}
              <button onClick={() => handleDelete(m.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
