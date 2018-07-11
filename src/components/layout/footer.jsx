import { Kui, PropTypes } from '../kui'
import React from 'react'
export default class Footer extends Kui {
    render() {
        return (<div className={this.className(['k-layout-footer'])}>{this.props.children}</div>)
    }
}