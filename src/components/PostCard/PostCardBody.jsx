import React from 'react'

function PostCardBody(props) {
  return (
    <div className='card-body'>
      <h5 className='card-title'>
        {props.name}
      </h5>
      <p className='card-text'>
        {props.description}
      </p>
      <p className='card-text'>
        {props.author}
      </p>
      <div className='d-flex justify-content-between align-items-center'>
        {props.children}
        <small className='text-muted'>
          {props.readTime}
        </small>
      </div>
    </div>
  )
}

export default PostCardBody
