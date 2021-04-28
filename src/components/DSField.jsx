import React, { Component } from 'react';
import DataHeader from "./DataHeader.jsx";
import DataNode from "./DataNode.jsx";
import "./DSField.css";

class DSField extends Component {
    state = {

    }
    render() {
        return (
            <div className="ds-field">
                <DataHeader/>
                <div>
                    {this.props.structure.name}
                </div>
                <DataNode data={"hi"} type={"string"}/>
                <DataNode data={1} type={"int"}/>
                <DataNode data={"c"} type={"char"}/>
            </div>
        );
    }
}

export default DSField;