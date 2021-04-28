import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Toolbar from './components/Toolbar.jsx';
import DSField from './components/DSField.jsx';
import Connector from './components/Connector.jsx';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Toolbar/>
      <Connector/>

      <DSField/>
    </React.Fragment>
  );
}

export default App;
