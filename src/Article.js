import React, { Component, PropTypes } from "react";
import CommentList from "./CommentList";

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    openArticle: PropTypes.any.isRequired
  }

  render() {
    const { article, isOpen, openArticle } = this.props

    const body = isOpen ? <section>{article.text}<CommentList comments={article.comments}/></section> : null

    return (
      <div>
        <h3 onClick={openArticle}>{article.title}</h3>
        {body}
      </div>
    )
  }

}


