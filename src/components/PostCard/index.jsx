import React from 'react'

import PostCardBackground from './PostCardBackground'
import PostCardBody from './PostCardBody'

function PostCard(props) {
  return (
    <div className='card mb-4 shadow-sm'>
      <PostCardBackground
        avatar={props.avatar}
      />

      <PostCardBody
        name={props.name}
        description={props.description}
        author={props.author}
      >
        {props.children}
      </PostCardBody>
    </div>
  )
}

export default PostCard
