import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Container from './components/Container'

export default <Router history = {browserHistory}>
    <Route path = "/page" component = {Container} />
</Router>