import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
  static propTypes = {

  };

  state = {
    author: '',
    comment: ''
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  addComment = ev => {
    var comment = this.state.author + ': ' + this.state.author;
    console.log(comment);
  }

  render() {
    return (
        <div>
          <br/>
          <table>
            <tbody>
              <tr>
                <td colSpan="2">Add comment form</td>
              </tr>
              <tr>
                <td>Author:</td>
                <td><input type="text" name="author" value = {this.state.author} onChange = {this.handleChange}/></td>
              </tr>
              <tr>
                <td>Comment:</td>
                <td><input type="text" name="comment" value = {this.state.comment} onChange = {this.handleChange}/></td>
              </tr>
              <tr>
                <td colSpan="2"><input type="submit" value="Add Comment" onClick={this.addComment}/></td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default NewCommentForm