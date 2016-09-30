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
    let commentListComponent = null
    let commentComponents = null

    if (!comments) {
      commentListComponent = <span><strong>Нет комментариев</strong></span>
    } else {
      if (isShow) {
        buttonText = 'Скрыть комментарии'
        commentComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
      }
      commentListComponent = <div>
        <button onClick={this.toggleShow}>{buttonText}</button>
        < ul >
          { commentComponents }
        </ul>
      </div>
    }

    return (<div>
        { commentListComponent }
      </div>
    )
  }

  toggleShow = ev => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}