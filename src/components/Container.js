import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm'
import Filter from './Filter'
import Calendar from './Calendar'

class Container extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const { articles } = this.props
        return (
            <div>
                <Filter articles = {articles} />
                {/*Все хорошо, но он должен был быть в Filters*/}
                <Calendar />
                <ArticleList articles = {articles} />
                <Chart />
                <NewArticleForm />
            </div>
        )
    }
}

export default Container
