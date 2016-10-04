import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class Filter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = selected => this.setState({ selected })

    render() {
        const { articles } = this.props
        const { selected } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select
                    options = {options}
                    value = {selected}
                    multi = {true}
                    onChange = {this.handleChange}
                />
            </div>
        )
    }
}

export default Filter