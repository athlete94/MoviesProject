import React from "react"

class Search extends React.Component {

    state = {
        search: '',
        type: 'all'
    }

    updateSearch = (event) => {
        if (event.key === "Enter") {
            let s = this.state.search
            let type = this.state.type

            this.props.updateMovies(s, type)
        }
        
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type }),
            () => {this.props.updateMovies(this.state.search, this.state.type)})
        
    }


    render() {
        return <div class="row">

        {/* Search */}
        <div class="input-field col s12">
          <input 
            className="validate"
            id="search"
            type="search"
            placeholder="search"
            value={this.state.search} 
            onChange={(e) => this.setState({search: e.target.value})}
            onKeyDown={this.updateSearch} />
        </div>

        {/* Filter */}
        <form action="#">
            <label>
                <input 
                    className="with-gap"
                    name="type"
                    type="radio"
                    data-type="all"
                    onChange={this.handleFilter}
                    checked={this.state.type === "all"}/> {/*если в state type: all то checked*/}
                <span>All</span>
            </label>
            <label>
                <input 
                    className="with-gap" 
                    name="type" 
                    type="radio" 
                    data-type="movie" 
                    onChange={this.handleFilter}
                    checked={this.state.type === "movie"}/>
                <span>Movies</span>
            </label>
            <label>
                <input 
                    className="with-gap" 
                    name="type" 
                    type="radio" 
                    data-type="series" 
                    onChange={this.handleFilter}
                    checked={this.state.type === "series"}/>
                <span>Serias</span>
            </label>
        </form>

        
      </div>
    }
}

export default Search