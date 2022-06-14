import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import Form from './components/Form';

function App() {
  return (
    <Provider>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
