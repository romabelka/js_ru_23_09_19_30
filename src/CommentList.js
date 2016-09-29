import React from 'react'
import Comment from './Comment'

export default (props) => {
	const { comments } = props

	const commentComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)

	return (
		<ul>
		{commentComponents}
		</ul>
	)
}