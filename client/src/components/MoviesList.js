import { useEffect, useState } from "react";

export const MoviesList = () => {

const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('/api/movies')
        .then(response => response.json())
        .then((data) => setMovies(data))
}, []);

return (
    <ul>
        {movies.map((el) => {
            return <li key={el.id}>
                <h2>{el.name}</h2>
                <h3>{el.genre}</h3>
                </li>
            })}
    </ul>
    )
}