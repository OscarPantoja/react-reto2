import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import PostCardsButtons from '../components/PostCardsButtons'

function PostList(props) {
  return (
    <div className='row'>
      {
        props.list.map((repo, index) => (
          < Link
            key={repo.id || `repo-${index}`}
            className='col-md-4'
            to={`/RepoDetail/${repo.author}/${repo.name}`}
          >
            <PostCard
              name={repo.name}
              avatar={repo.avatar}
              description={repo.description}
              author={repo.author}
              readTime={repo.readTime}
            >
              <PostCardsButtons
                edit={repo.edit}
                view={repo.view}
              />

            </PostCard>
          </Link>
        ))
      }
    </div >
  )
}

export default PostList
