import Movies from "../components/Movies"
import React, { useEffect, useState } from "react" 
import Preloader from '../components/Preloader'
import Search from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(responce => responce.json())
        .then(data => {
            setMovies(data.Search) 
            setLoading(false)
        })
        .catch((err) => {
            console.error(err)
            setLoading(false)
        })
    }, [])

 
    const updateMovies = (s, type) => {
        setLoading(false)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${s}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(responce => responce.json())
        .then(data => {
            setMovies(data.Search) 
            setLoading(false)
        })
        .catch((err) => {
            console.error(err)
            setLoading(false)
        })
    }

    return(
        <main className='container content'>
            <Search updateMovies={updateMovies} />

            {loading ? <Preloader />
            : <Movies movies={movies} />}
            
        </main>
        
    )
}

export default Main