import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { email, senha, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="email@email.com"
            value={ email }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            type="text"
            name="senha"
            data-testid="password-input"
            placeholder="***********"
            value={ senha }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Inputs;
