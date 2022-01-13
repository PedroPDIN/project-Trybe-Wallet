import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addTotal from '../../helpers/calc';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      exchangeRate: 'BRL',
    };
  }

  render() {
    const { exchangeRate } = this.state;
    const { userEmail, infoForm } = this.props;
    return (
      <header>
        <span data-testid="email-field">{`Email: ${userEmail}`}</span>
        {' '}
        <span data-testid="total-field">
          {`Despesa Total: R$${Number(addTotal(infoForm)).toFixed(2)}`}
        </span>
        {' '}
        <span data-testid="header-currency-field">{exchangeRate}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  infoForm: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  infoForm: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
