import React, { Component } from 'react';
import './Toolbar.css';

// Consider changing to left side rather than top.
class Toolbar extends Component {
    state = {  }
    render() {
        return (
            <div className="toolbar">
                {this.props.buttons.map((button, index) => (
                    <button className="btn-large" key={index} onClick={button.onClick}>{button.label}</button>
                ))}
            </div>
        );
    }
}

export default Toolbar;