import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import AddComment from './AddComment'
import toggleOpen from './../decorators/toggleOpen'

function CommentList(props) {
    const { comments, isOpen, toggleOpen } = props
    if (!comments || !comments.length) return <p>No comments yet</p>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <ul>{commentItems}</ul>

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{text}</a>
            {body}
            {/*по идее нужно было бы сделать чтобы оно показывалось при клике на показать комменты,
            но блок когда нет комментов возвращается отдельно, а переделывать смысла нет,
            ты выкатишь свою версию и будем работать с ней :)*/}
            <AddComment />
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //form toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default toggleOpen(CommentList)