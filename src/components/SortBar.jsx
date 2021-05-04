import React, { Component } from 'react';
import './SortBar.css';

class SortBar extends Component {
    state = {  }

    render() {
        const style = {
            height: `${(this.props.value / this.props.max) * 100}%`
        }

        return (
            <span style={style} className="bar">

            </span>
        );
    }
}

export default SortBar;