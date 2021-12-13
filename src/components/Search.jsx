import { useState } from "react"

const Search = (props) => {

    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')


    const updateSearch = (event) => {
        if (event.key === "Enter") {
            props.updateMovies(search, type)
        }
        
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type)
        props.updateMovies(search, event.target.dataset.type)
    }


    return <div class="row">

        {/* Search */}
        <div class="input-field col s12">
          <input 
            className="validate"
            id="search"
            type="search"
            placeholder="search"
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={updateSearch} />
        </div>

        {/* Filter */}
        <form action="#">
            <label>
                <input 
                    className="with-gap"
                    name="type"
                    type="radio"
                    data-type="all"
                    onChange={handleFilter}
                    checked={type === "all"}/> {/*если в state type: all, то checked*/}
                <span>All</span>
            </label>
            <label>
                <input 
                    className="with-gap" 
                    name="type" 
                    type="radio" 
                    data-type="movie" 
                    onChange={handleFilter}
                    checked={type === "movie"}/>
                <span>Movies</span>
            </label>
            <label>
                <input 
                    className="with-gap" 
                    name="type" 
                    type="radio" 
                    data-type="series" 
                    onChange={handleFilter}
                    checked={type === "series"}/>
                <span>Serias</span>
            </label>
        </form>        
      </div>
}

export default Search