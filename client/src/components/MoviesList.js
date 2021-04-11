export const MoviesList = (props) => {

return (
    <ul>
        {props.movies.map((el) => {
            return <li key={el.id}>
                <h2>{el.name}</h2>
                <h2>{el.genre}</h2>
                </li>
            })}
    </ul>
    )
}