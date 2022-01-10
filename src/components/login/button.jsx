import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { isDisabled, getDispatch, email } = this.props;
    return (
      <div>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ () => getDispatch(email) }
          >
            Entrar
          </button>
        </Link>

      </div>
    );
  }
}

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  getDispatch: PropTypes.func.isRequired,
};

export default Button;
