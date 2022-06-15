import React from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
