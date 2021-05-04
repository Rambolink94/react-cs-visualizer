import React, { Component } from 'react';
import Header from './Header.jsx';
import DSField from './DSField.jsx';
/* import Connector from './components/Connector.jsx'; */
import LinkedList from '../data-structures/linkedList.js';
import NavBar from './NavBar/NavBar';

class DataStructure extends Component {
    state = {  }
    render() {
        let list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);

        list.print();

        return (
            <React.Fragment>
                <NavBar/>
                <Header/>

                <DSField structure={{ name: "linked list", struct: list}} />
            </React.Fragment>
        );
    }
}

export default DataStructure;