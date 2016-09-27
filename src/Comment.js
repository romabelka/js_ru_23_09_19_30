import React from 'react';

export default (props) => {
  const { comment } = props

  return (
    <div>
        <h3>{comment.title}</h3>
        <h6>{comment.user}</h6>
        <p>{comment.text}</p>
    </div>
  )
}