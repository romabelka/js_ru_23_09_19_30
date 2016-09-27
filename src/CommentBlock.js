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
      <div>
          <button onClick = { this.toggleOpen }>{ isOpen ? 'Close comments' : 'Show comments'}</button>
          {body}
      </div>
    )
  }

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
