import React, { Component } from 'react';
import NavBar from './NavBar/NavBar.jsx';
import Header from './Header.jsx';
import SortView from './SortView.jsx';


class SortingAlgorithms extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Header/>
                <SortView/>
            </React.Fragment>
        );
    }
}

export default SortingAlgorithms;