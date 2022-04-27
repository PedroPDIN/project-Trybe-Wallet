import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions';
import Inputs from '../components/login/inputs';
import Button from '../components/login/button';

class Login extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validButton = this.validButton.bind(this);

    this.state = {
      email: '',
      senha: '',
      isDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value }, this.validButton);
  }

  validButton() {
    const { email, senha } = this.state;
    const SIX = 6;
    const LIM = 35;
    const regex = /\w+@\w+\.\w{2,8}(\.\w{0,2})?/g;
    const validEmail = regex.test(email);

    if (senha.length >= SIX && validEmail && email.length <= LIM) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  render() {
    const { isDisabled, email, senha } = this.state;
    const { getDispatch } = this.props;
    const urlWallet = "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/100/000000/external-wallet-man-accessories-kiranshastry-lineal-color-kiranshastry.png";

    return (
      <div style={{ height: "100vh", background: "#010114" }} 
      class="flex flex-col items-center justify-center">
        <form action="" 
        style={{ background: "#072b63", width: "40%" }}
        class='bg-white p-10 rounded-3xl shadow-inner flex flex-col items-center'>
        <img src={ urlWallet } alt="Ícone Wallet" className="mb-5 w-28"/>
          <Inputs
            email={ email }
            senha={ senha }
            onInputChange={ this.onInputChange }
          />
          <Button
            isDisabled={ isDisabled }
            getDispatch={ getDispatch }
            email={ email }
          />
        </form>

      </div>
    );
  }
}

Login.propTypes = {
  getDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getDispatch: (email) => dispatch(getUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
