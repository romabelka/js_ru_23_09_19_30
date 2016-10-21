import React from 'react'
import { render } from 'react-dom'
import Container from './components/Container'
import { Provider } from 'react-redux'
import store from './store'
import routes from './routes'

render(routes, document.getElementById('container'))