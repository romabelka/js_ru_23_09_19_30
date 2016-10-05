//decorator === HOC Higher order component
import React from 'react'

export default function toggleOpen(Component) {
    return class ToggleOpen extends React.Component {
        state = {
            isOpen: false
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
        }

        toggleOpen = ev => {
            if (ev) ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

    }
}