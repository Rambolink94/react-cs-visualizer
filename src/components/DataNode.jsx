import React, { Component } from 'react';
import DataNodeConnector from './DataNodeConnector';
import './DataNode.css';

class DataNode extends Component {
    state = {
        
      }
    render() {
        const {node} = this.props;
        return (
            <div className="data-node">
                <h2 className="data-node-data">{node.data}</h2>
                <strong className="data-node-type">{node.type}</strong>
                {/*Other Components for next, prev, ect. */}
                {node.connections.map((connection, index) => (
                    <DataNodeConnector key={index} connection={connection}/>
                ))}
            </div>
        );
    }
}

export default DataNode;