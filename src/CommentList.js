import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

    state = {
        isOpen: false
    }

    render() {
        const {isOpen} = this.state
        const {comments} = this.props
        let body = null
        let btn = (<button onClick={this.toggleOpen}>Открыть</button>)
        if(isOpen) {
            const commentComponents = comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>)
            body = (
                <ul>
                    {commentComponents}
                </ul>
            )
            btn = (<button onClick={this.toggleOpen}>Закрыть</button>)
        }




        return (
            <div>
                <h3>Комментарии {btn}</h3>
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
