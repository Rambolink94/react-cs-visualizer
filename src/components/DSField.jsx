import React, { Component } from 'react';
import DataHeader from "./DataHeader.jsx";
import Toolbar from './Toolbar.jsx';
import DataNode from "./DataNode.jsx";
import "./DSField.css";

class DSField extends Component {

    addNode = () => {
        const {nodes} = this.state;
        this.state.nodes.push({id: nodes.length + 1, data: "new", type: "new"});
        this.setState({nodes: nodes});
    }

    state = {
        nodes: [
            {id: 1, data: "hi", type: "string"},
            {id: 2, data: 1, type: "int"},
            {id: 3, data: "c", type: "char"}
        ],
        buttons: [
            {id: 1, label: "New Node", onClick: this.addNode}
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
                    {this.state.nodes.map(node => (
                        <DataNode key={node.id} node={node}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default DSField;