import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import DSField from './components/DSField.jsx';
/* import Connector from './components/Connector.jsx'; */
import LinkedList from './data-structures/linkedList.js';
import NavBar from './components/NavBar/NavBar';

function App() {
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

export default App;
