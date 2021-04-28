import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    state = {  }
    render() {
        return (
            <div className="toolbar">
                {this.props.buttons.map(button => (
                    <button className="btn-large" key={button.id} onClick={button.onClick}>{button.label}</button>
                ))}
            </div>
        );
    }
}

export default Toolbar;