import React, { useState, useEffect } from 'react'

import RepoComplete from '../components/RepoComplete'

import api from '../Lib/Api'

function RepoDetail(props) {

  const [description, setDescription] = useState('')
  const [avatar, setAvatar] = useState('')

  const { author, name } = props.match.params

  useEffect(() => {
    async function getRepo() {
      const payload = await api.getRepo(author, name)
      console.log(payload)

      setDescription(payload.data.repo.description)
      setAvatar(payload.data.repo.avatar)
    }
    getRepo()
  }, [
    author,
    name
  ])

  return (
    <RepoComplete
      name={name}
      author={author}
      description={description}
      avatar={avatar}
    />
  )
}

export default RepoDetail
