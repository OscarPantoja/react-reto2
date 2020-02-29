import React from 'react'
import PostCard from '../components/PostCard'
import PostCardsButtons from '../components/PostCardsButtons'

function PostList(props) {
  return (
    <div className='row'>
      {
        props.list.map((post, index) => (
          < div
            key={post.id || `post-${index}`}
            className='col-md-4' >
            <PostCard
              title={post.title}
              img={post.image}
              text={post.text}
              readTime={post.readTime}
            >
              <PostCardsButtons
                edit={post.edit}
                view={post.view}
              />

            </PostCard>
          </div>
        ))
      }
    </div >
  )
}

export default PostList
