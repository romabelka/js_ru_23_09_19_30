import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Container from './components/Container'
import Counter from './components/Counter'
import ArticleList from './components/ArticleList'
import Filters from './components/Filters'
import NewArticleForm from './components/NewArticleForm'

export default <Router history = {browserHistory}>
    <Route path = "/" component = {Container}>
        <Route path = "counter" component = {Counter} />
        <Route path = "articles" component = {ArticleList} />
        <Route path = "filters" component = {Filters} />
        <Route path = "new" component = {NewArticleForm} />
    </Route>
</Router>