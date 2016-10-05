import React, { PropTypes } from "react";

function Comment(props) {
  const { text, user } = props.comment
  const { commentColor } = props

  console.log(commentColor)

  const pStyle = {
    color: commentColor
  }

  return (
    <p style={pStyle}>
      {text} <strong>by {user}</strong>
    </p>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
}

export default Comment
