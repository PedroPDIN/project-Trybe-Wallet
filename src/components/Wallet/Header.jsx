import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      expense: 0,
      exchangeRate: 'BRL',
    };
  }

  render() {
    const { expense, exchangeRate } = this.state;
    const { userEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ userEmail }</span>
        {' '}
        <span data-testid="total-field">{ expense }</span>
        {' '}
        <span data-testid="header-currency-field">{ exchangeRate }</span>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
