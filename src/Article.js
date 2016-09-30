import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        //проверять наличие комментов логичнее в CommentList
        const body = isOpen ? <section>{article.text} {article.comments ? <CommentList comments={article.comments} /> : null} </section> : null

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



/*
export default (props) => {
    const { article } = props

    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
