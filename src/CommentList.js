import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

	state = {
		isOpen: false
	}

	render() {
		const { comments } = this.props
		const { isOpen } = this.state
		let body = null;

		if (isOpen) {
			body = (
				<ul>
					{comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
				</ul>
			)
		}

		return (
			<div>
				<a href = "javascript:void(0)" onClick = {this.toggleOpen} > Comments < / a >
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