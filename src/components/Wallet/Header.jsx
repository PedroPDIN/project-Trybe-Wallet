import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.updateValue = this.updateValue.bind(this);

    this.state = {
      valueExpense: 0,
      exchangeRate: 'BRL',
    };
  }

  updateValue() {
    const { infoForm } = this.props;
    this.setState({ valueExpense: infoForm });
  }

  render() {
    const { valueExpense, exchangeRate } = this.state;
    const { userEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">{userEmail}</span>
        {' '}
        <span data-testid="total-field">{valueExpense}</span>
        {' '}
        <span data-testid="header-currency-field">{exchangeRate}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  infoForm: state.wallet.expenses
    .map((element) => element.value)
    .reduce((total, value) => total + Number(value), 0),
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  infoForm: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
