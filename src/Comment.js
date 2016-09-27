import React from 'react'

export default (props) => {
  const { comment } = props

  return (
    <div>
      <span><strong>{comment.user}</strong></span>
      <p>{comment.text}</p>
    </div>
  )
}