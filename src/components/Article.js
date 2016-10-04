import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired,
        openArticle: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.isOpen != nextProps.isOpen)
    }


    componentDidUpdate() {
        console.log('---', findDOMNode(this.refs.commentList))
    }

    render() {
        console.log('---', 'rerendering')
        const { article, isOpen, openArticle } = this.props

        const body = isOpen ? <section>{article.text}<CommentList comments = {article.comments} ref = "commentList"/></section> : null

        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                {body}
            </div>
        )
    }
}