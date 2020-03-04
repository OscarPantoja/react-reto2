import React, { Component } from 'react'

import AppLoading from '../components/AppLoading'
import PostList from '../components/PostList'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  async componentDidMount() {

    const response = await window.fetch('https://api.github.com/users/kodemia/repos', {
      headers: { Accept: 'application/vnd.github.v3+json' }
    })

    const payload = await response.json()

    const posts = payload.map((badPost) =>
      ({
        name: badPost.name,
        description: badPost.description,
        avatar: badPost.owner.avatar_url,
        author: badPost.owner.login

      }))

    this.setState({
      posts,
      loading: false
    })

  }

  render() {
    return <PostList list={this.state.posts} />
  }
}

export default Home
