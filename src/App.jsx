import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Post from './views/Post'
import LoginForm from './components/Login/Index'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      authorization: ''
    }
  }

  onNewPost(post) {
    this.setState({
      posts: [
        ...this.state.posts,
        post
      ]
    })
  }

  async onLogin(auth) {
    try {
      const response = await window.fetch('http://localhost:8080/user/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          email: auth.email,
          password: auth.password
        })
      })

      const payload = await response.json()

      this.setState({ authorization: payload.data.token })
      window.sessionStorage.setItem('authorization', payload.data.token)
    } catch (error) {
      window.alert('Ocurrio un error al iniciar sesión')
    }
  }

  async componentWillMount() {
    const token = window.sessionStorage.getItem('authorization')
    if (token) {
      const response = await window.fetch('http://localhost:8080/user/validate-session', {
        headers: { authorization: token }
      })

      const payload = await response.json()

      this.setState({ authorization: payload.data.token })

    }
  }

  render() {
    if (!this.state.authorization) {
      return (
        <div className='app login'>
          <LoginForm onSubmit={this.onLogin.bind(this)} />
        </div>
      )
    }
    return (
      <div className='app'>
        <Navbar />
        <div className='container'>
          <Post onSubmit={this.onNewPost.bind(this)} />
          <Home posts={this.state.posts} />
        </div>
      </div>
    )
  }
}

export default App
