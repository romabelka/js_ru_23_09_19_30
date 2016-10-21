import React, { Component, PropTypes } from 'react'

class WrapperComponent extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                My children are:
                {this.props.children}
            </div>
        )
    }
}

export default WrapperComponent