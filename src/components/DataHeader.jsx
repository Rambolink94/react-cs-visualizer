import React, { Component } from 'react';
import "./DataHeader.css";

class DataHeader extends Component {
    state = {  }
    render() {
        return (
            <div className="header-base">
                <h2>Head</h2>
                <span className="header-arrow"></span>
            </div>
        );
    }
}

export default DataHeader;