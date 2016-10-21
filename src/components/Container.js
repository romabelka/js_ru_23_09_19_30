import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm'
import Filter from './Filters'
import Counter from './Counter'
import { Provider } from 'react-redux'
import store from '../store'

class Container extends Component {
    static propTypes = {};

    render() {
        return (
            <Provider store={store}>
                <div>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

/*
 <Counter />
 <Filter articles={[]}/>
 <ArticleList />
 <Chart />
 <NewArticleForm />
 */

export default Container