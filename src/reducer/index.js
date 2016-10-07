import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'

export default combineReducers({
    articles, count
})