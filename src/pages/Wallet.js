import React from 'react';
import Header from '../components/Wallet/Header';
import Form from '../components/Wallet/form/Form';
import Table from '../components/Wallet/table/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh", background: "#010114" }}
        className="text-white">
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
