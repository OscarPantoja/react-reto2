import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  render() {

    return (
      <div className='app'>
        <Navbar />
        <div className='container'>
          <Home posts={this.state.posts} />
        </div>
      </div>
    )
  }
}

export default App
