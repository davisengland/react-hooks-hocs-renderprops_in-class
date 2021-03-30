import React, { useState, useEffect } from 'react'

const MovieList = (props) => {
    const [ movies, setMovies ] = useState(['Die Hard', 'Goodfellas', 'Dogtooth'])
    const [ userMovie, setUserMovie] = useState('')

    const addMovie = () => {
        const newList = [userMovie, ...movies]
        setMovies(newList)
        setUserMovie('')
    }

    useEffect(() => console.log('useEffect in MovieList fired!'), [userMovie, movies])

    return (
        <div>
            { movies.map(movieStr => <h2>{movieStr}</h2>)}
            <input value={userMovie} onChange={e => setUserMovie(e.target.value)} placeholder='enter a movie' />
            <button onClick={addMovie}>add your movie</button>
        </div>
    )
}

export default MovieList