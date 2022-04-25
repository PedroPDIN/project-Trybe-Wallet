import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { email, senha, onInputChange } = this.props;
    return (
      <div className='flex flex-col items-center'>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="email@email.com"
            value={ email }
            onChange={ onInputChange }
            className="rounded-t-2xl"
          />

          <input
            type="text"
            name="senha"
            data-testid="password-input"
            placeholder="***********"
            value={ senha }
            onChange={ onInputChange }
            className="rounded-b-2xl"
          />
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
