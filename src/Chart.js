import React, { Component, PropTypes } from 'react'

class Chart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        console.log('---', 'draw chart with d3', this.refs.container)
    }

    render() {
        return <div ref="container"/>
    }
}

export default Chart