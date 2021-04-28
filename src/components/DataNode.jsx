import React, { Component } from 'react';
import DataNodeConnector from './DataNodeConnector';
import './DataNode.css';

class DataNode extends Component {
    state = {
        data: this.props.data,
        type: this.props.type
      }
    render() {
        return (
            <div className="data-node">
                <h2 className="data-node-data">{this.state.data}</h2>
                <strong className="data-node-type">{this.state.type}</strong>
                <hr/>
                <div className="data-node-alt">
                    {/*Other Components for next, prev, ect. */}
                    <DataNodeConnector isLeft={true}/>
                    <DataNodeConnector isLeft={false}/>
                </div>
            </div>
        );
    }
}

export default DataNode;