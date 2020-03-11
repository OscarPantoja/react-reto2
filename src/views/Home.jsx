import React, { useState, useEffect } from 'react'

import AppLoading from '../components/AppLoading'
import PostList from '../components/PostList'
import api from '../Lib/Api'

function Home() {

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getRepos() {
      const payload = await api.getRepos()
      if (repos.length !== payload.data.repos.length) setRepos(payload.data.repos)
      console.log(payload.data.repos)
      setLoading(false)
    }
    getRepos()
  }, [repos])

  if (loading) return <AppLoading />


  return <PostList list={repos} />

}

export default Home
