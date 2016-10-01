import React, { Component, PropTypes } from "react";
import Comment from "./Comment";
import toggleOpen from "./decorators/toggleOpen";

class CommentList extends Component {

  static propTypes = {
    comments: PropTypes.array
  }

  getRef = (ref) => {
    this.containerNode = ref
  }

  render() {
    const { comments, isOpen, toggleOpen } = this.props
    if (!comments || !comments.length) return <p>No comments yet</p>

    const commentItems = comments.map(comment => {
      const colorComment = '#' + Math.floor(Math.random() * 16777215).toString(16)
      return <li key={comment.id}>
        <Comment comment={comment} commentColor={colorComment}/>
      </li>
    })
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <ul>{commentItems}</ul>

    return (
      <div ref={this.getRef}>
        <a href="#" onClick={toggleOpen}>{text}</a>
        {body}
      </div>
    )
  }
}

export default toggleOpen(CommentList)
