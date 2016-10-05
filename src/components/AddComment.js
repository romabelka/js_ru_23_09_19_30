import React, { Component } from 'react'

class AddComment extends Component {
  state = {
    name: '',
    text: ''
  }

  handleChangeName = ev => {
    this.setState({
      name: ev.target.value
    })
  }

  handleChangeText = ev => {
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const name = this.state.name.trim()
    const text = this.state.text.trim()
    console.log(`New comment: name - ${name}, text - ${text}`)
    this.setState({
      name: '',
      text: ''
    })
  }

  render() {

    return (
      <div>
        <strong>Add new comment</strong><br />
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" value = {this.state.name} onChange = {this.handleChangeName}/>
          <br />
          Text: <textarea value = {this.state.text} onChange = {this.handleChangeText} />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default AddComment