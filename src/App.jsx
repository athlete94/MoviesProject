import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'
import React from 'react'

class App extends React.Component {

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce => responce.json())
    .then(data => this.setState({posts: data, loading: false}))
  }

  render () {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }  
}

export default App;
