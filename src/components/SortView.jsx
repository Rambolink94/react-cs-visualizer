import React, { Component } from 'react';
import Toolbar from './Toolbar.jsx';
import './SortView.css';
import SortBar from './SortBar.jsx';
import { shuffle, linearSearch } from '../algorithms/shuffle.js';

class SortView extends Component {
    state = {
        length: 100,
        buttons: [
            {label: "Linear Sort", onClick: linearSearch}
        ]
    }
    render() {
        let items = [];
        let numbers = [];
        let shuffledNumbers = [];
        
        for (let i = 1; i < this.state.length + 1; i++) {
            numbers.push(i);
        }

        shuffledNumbers = shuffle(numbers);

        for (let i = 0; i < shuffledNumbers.length; i++) {
            console.log(`${shuffledNumbers[i]} / ${this.state.length} * 100 = ${shuffledNumbers[i] / this.state.length * 100}`);
            items.push(<SortBar key={i} value={shuffledNumbers[i]} max={this.state.length}/>)
        }

        return (
            <div className="sort-grid">
                <Toolbar buttons={buttons}/>
                <div className="sort-view">
                    {items}
                </div>
                <div className="sort-customizer"></div>
            </div>
        );
    }
}

export default SortView;