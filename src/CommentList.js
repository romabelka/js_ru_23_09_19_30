import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

    state = {
      isOpen : false
    }

    toggleComments = ev => {
      this.setState({
          isOpen : !this.state.isOpen
      })
    }

    render() {

      const { isOpen } = this.state
      const { comments } = this.props

      const commentComponents = comments ? comments.map(comment => <Comment comment = {comment} key = {comment.id} />) : <p>There is no comments to this article</p>

      const cBody = isOpen ? commentComponents : null
      const btnText = isOpen ? 'Hide comments' : 'Show comments'
      return (
        <div>
          <button onClick = {this.toggleComments}>{btnText}</button>
          {cBody}
        </div>
      )
    }
}
