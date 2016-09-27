import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state

        const commentListComponent =
          article.comments ? <CommentList comments={article.comments}/> : <span><strong>Нет комментариев</strong></span>


        const body = isOpen ? <section><p>{article.text}</p>{commentListComponent}</section> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


