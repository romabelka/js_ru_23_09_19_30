import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './decorators/accordion'

import Chart from './Chart'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const { articles, openArticleId, toggleOpenArticle } = this.props

        const articleComponents = articles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {article.id === openArticleId} openArticle = {toggleOpenArticle(article.id)} />
            </li>))

        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    }


}

export default accordion(ArticleList)