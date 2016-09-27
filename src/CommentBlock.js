import React, { Component } from 'react';
import CommentList from './CommentList';

export default class CommentBlock extends Component {

  state = {
    isOpen: false
  }

  render() {
    const { isOpen } = this.state

    const body = isOpen ? <CommentList comments = { this.props.comments }/> : null

    return (
      <section>
          <button onClick = { this.toggleOpen }>{ isOpen ? 'Close comments' : 'Show comments'}</button>
          {body}
      </section>
    )
  }

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
