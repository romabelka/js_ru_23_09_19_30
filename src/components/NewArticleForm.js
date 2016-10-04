import React, { Component, PropTypes } from 'react'

class NewArticleForm extends Component {
    static propTypes = {

    };

    state = {
        title: ''
    }

    handleChange = ev => {
        if (ev.target.value.length > 5) return
        this.setState({
            title: ev.target.value
        })
    }

    render() {
        return (
            <div>
                article title: <input type="text" value = {this.state.title} onChange = {this.handleChange}/>
            </div>
        )
    }
}

export default NewArticleForm