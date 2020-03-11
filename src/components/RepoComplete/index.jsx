import React from 'react'

import styleRepo from './styleRepo.module.css'

function PostComplete(props) {
  return (
    <div className={`${styleRepo.repo}`}>
      <div className={` ${styleRepo.boxRepo}`}>
        <h1 className={` ${styleRepo.styleH1}`}>
          {props.name}
        </h1>
        <h4 className={` ${styleRepo.styleH2}`}>
          {props.author}
        </h4>
        <img
          src={props.avatar}
          alt='repo avatar'
        />
        <p className={` ${styleRepo.styleDescription}`}>
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default PostComplete
