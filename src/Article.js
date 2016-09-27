import React, { Component } from 'react';
import CommentBlock from './CommentBlock';

export default class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state

        const body = isOpen ? (<div>
            <section>{article.text}</section>
            <CommentBlock comments = { article.comments }/>
        </div>) : null

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
