import React from 'react'

export default (props) => {
    const { comment } = props

    return (
        <div>
            <p>{comment.user}:</p>
            <section>{comment.text}</section>
        </div>
    )
}
