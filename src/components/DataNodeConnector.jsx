import React, { Component } from 'react';
import './DataNodeConnector.css';

class DataNodeConnector extends Component {
    state = {
        isLeft: this.props.isLeft
    }
    render() {
        let socketState = "socket ";
        socketState += (this.state.isLeft === true) ? "left-socket" : "right-socket";

        return (
            <div className="socket-holder">
                <div className={socketState}>
                    <p>connect</p>
                </div>
            </div>
        );
    }
}

export default DataNodeConnector;