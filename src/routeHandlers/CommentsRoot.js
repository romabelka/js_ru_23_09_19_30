import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                {this.props.counter}
                <h1>Comments pagination</h1>
                {this.props.commentPage}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot