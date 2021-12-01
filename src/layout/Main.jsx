import Movies from "../components/Movies"
import React from "react" 
import Preloader from '../components/Preloader'
import Search from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount = () => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(responce => responce.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err)
            this.setState({loading: false})
        })
    }
 
    updateMovies = (s, type) => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${s}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(responce => responce.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err)
            this.setState({loading: false})
        })
    }

    render() {
        return(
            <main className='container content'>
                <Search updateMovies={this.updateMovies} />

                {this.state.loading ? <Preloader />
                : <Movies movies={this.state.movies} />}
                
            </main>
            
        )
    }
}

export default Main