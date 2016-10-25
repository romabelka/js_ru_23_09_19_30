import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './animation.css'
import { deleteArticle, loadArticle } from '../AC/articles'
import { connect } from 'react-redux'
import Loader from './Loader'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        openArticle: PropTypes.func
    }

    componentDidMount() {
        this.checkAndLoad(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.checkAndLoad(nextProps)
    }

    checkAndLoad(props) {
        const { article, loadArticle, id, isOpen } = props
        if (isOpen && !article || (!article.text && !article.loading)) loadArticle(id)
    }

    render() {
        const { article, isOpen, openArticle } = this.props
        if (!article) return null
        const loader = article.loading ? <Loader /> : null

        const body = isOpen ? <section>{loader}{article.text}<CommentList article = {article} ref = "commentList"/></section> : null

        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                <a href = "#" onClick = {this.handleDelete}>delete me</a>
                <CSSTransition
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {body}
                </CSSTransition>
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        const { article, deleteArticle } = this.props
        deleteArticle(article.id)
    }
}

export default connect((state, { id }) => ({article: state.articles.getIn(['entities', id])}),
    { deleteArticle, loadArticle })(Article)