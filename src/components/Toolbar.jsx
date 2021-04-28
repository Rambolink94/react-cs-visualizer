import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    state = {  }
    render() {
        return (
            <div className="toolbar">
                <button className="btn-large">Test</button>
                <button className="btn-large">Test</button>
                <button className="btn-large">Test</button>
                <button className="btn-large">Test</button>
            </div>
        );
    }
}

export default Toolbar;