import React, { Component } from 'react';
import './DataNodeConnector.css';

class DataNodeConnector extends Component {

    render() {
        const {connection} = this.props;
        let socketState = "socket ";
        socketState += connection.direction + "-socket";
        socketState += connection.isInput === true ? " input" : " output";

        return (
            <div className={socketState}/>
        );
    }
}

export default DataNodeConnector;