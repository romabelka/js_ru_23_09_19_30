import React, { Component } from 'react';
import Comment from './Comment';

export default (props) => {
  const { comments } = props

  const commentsComponents = comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)

  return (
    <ul>
      {commentsComponents}
    </ul>
  )
}
