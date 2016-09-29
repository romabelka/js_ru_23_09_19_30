import React, { Component } from 'react'
import CommentList from './CommentList'
export default class Article extends Component {

    state = {
        isOpen: false,
        opened: {
            a: true
        }
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state


            const body = isOpen ? <div><section>{article.text}</section><CommentList comments = {article.comments} /></div> : null
        

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
/*

        this.setState({
            opened: {...this.state.opened, a: false}
        })
*/
    }
}



/*
export default (props) => {
    const { article } = props

    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
