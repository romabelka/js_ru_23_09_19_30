import React from 'react'

export default (props) => {

    const { comment } = props

    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.text}</p>
        </div>
    )
}
