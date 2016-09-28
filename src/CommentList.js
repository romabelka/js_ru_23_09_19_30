import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

    state = {
        isOpen: false
    }

    render() {
        const {isOpen} = this.state
        const {comments} = this.props
        const btn = ( <button onClick={this.toggleOpen}> { this.state.isOpen ? 'Закрыть' : 'Открыть'} </button> )
        const commentComponents = isOpen ? comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>) : null
        return (
            <div>
                <h3>Комментарии {btn}</h3>
                <ul>
                    {commentComponents}
                </ul>
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
