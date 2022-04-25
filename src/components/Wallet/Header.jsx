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
    const urlWallet = "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/100/000000/external-wallet-man-accessories-kiranshastry-lineal-color-kiranshastry.png";

    return (
      <div className='flex justify-around items-center border-b-4 border-cyan-500 mb-10'>
        <img src={ urlWallet } alt="Ícone Wallet" className="flex justify-start my-6 w-38"/>

      <header className="flex flex-col justify-center items-center my-6 font-mono text-">
        <span data-testid="email-field"   className='mb-2 font-mono text-xl'>{`Email: ${userEmail}`}</span>
        {' '}
        <span data-testid="total-field" style={{ color: "#0ab08d" }} className='text-xl'>
          {`Despesa Total: R$${Number(addTotal(infoForm)).toFixed(2)}`}
        </span>
        {' '}
        <span data-testid="header-currency-field" style={{ color: "#0ab08d" }}>{exchangeRate}</span>
      </header>

      </div>
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
