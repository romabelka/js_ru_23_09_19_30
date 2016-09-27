import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

  state = {
    isShow: false
  }

  render() {
    const { isShow } = this.state
    const { comments } = this.props

    let buttonText = 'Показать комментарии'
    let commentComponents = null

    if (isShow) {
      buttonText = 'Скрыть комментарии'
      commentComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)

    }

    return (
      <div>
        <button onClick={this.toggleShow}>{buttonText}</button>
        <ul>
          {commentComponents}
          </ul>
      </div>
    )
  }

  toggleShow = ev => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}