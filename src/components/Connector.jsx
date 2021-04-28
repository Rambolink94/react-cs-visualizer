import React, { Component } from 'react';
import './Connector.css';

class connector extends Component {
    state = {
        // Possitions of connectors will be supplied through props
        head: this.props.head,
        body: this.props.body,
        tail: this.props.tail
    }
    render() {
        return (
            <div className="conn-parent">
                <svg><line x1="50" y1="50" x2="90" y2="90" stroke="orange" strokeWidth="5" strokeLinecap="round"/></svg>
                <svg><line x1="30" y1="50" x2="50" y2="50" stroke="orange" strokeWidth="5" strokeLinecap="round"/></svg>
                <svg><line x1="90" y1="90" x2="110" y2="90" stroke="orange" strokeWidth="5" strokeLinecap="round"/></svg>
            </div>
        );
    }
}

export default connector;