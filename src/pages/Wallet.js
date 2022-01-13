import React from 'react';
import Header from '../components/Wallet/Header';
import Form from '../components/Wallet/form/Form';
import Table from '../components/Wallet/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
