import React from 'react';
import Header from '../components/Wallet/Header';
import Form from '../components/Wallet/form/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Wallet;
