import React, { Component } from 'react';
import DataHeader from "./DataHeader.jsx";
import Toolbar from './Toolbar.jsx';
import DataNode from "./DataNode.jsx";
import "./DSField.css";
import {directions} from './directions.js';

class DSField extends Component {

    addNode = () => {
        const {nodes} = this.state;
        this.state.nodes.push({data: "new", type: "new", connections: [{isInput: false, direction: directions.right}]});
        this.setState({nodes: nodes});
    }

    state = {
        nodes: [
            {data: "hi", type: "string", connections: [{isInput: true, direction: directions.top}, {isInput: false, direction: directions.bottom}]},
            {data: 1, type: "int", connections: [{isInput: false, direction: directions.right}]},
            {data: "c", type: "char", connections: [{isInput: true, direction: directions.left}]}
        ],
        buttons: [
            {label: "New Node", onClick: this.addNode}
        ]
    }

    render() {
        return (
            <div className="ds-field">
                <Toolbar buttons={this.state.buttons}/>
                <div className="ds-body">
                    <DataHeader/>
                    <div>
                        {this.props.structure.name}
                    </div>
                    {this.state.nodes.map((node, index) => (
                        <DataNode key={index} node={node}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default DSField;