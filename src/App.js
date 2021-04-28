import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Toolbar from './components/Toolbar.jsx';
import DSField from './components/DSField.jsx';
import Connector from './components/Connector.jsx';
import LinkedList from './data-structures/linkedList.js';

function App() {
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);

  list.print();

  return (
    <React.Fragment>
      <Header/>
      <Toolbar/>
      <Connector/>

      <DSField structure={{ name: "linked list", struct: list}} />
    </React.Fragment>
  );
}

export default App;
