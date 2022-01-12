import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputsForm extends Component {
  render() {
    const { value, description, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            value={ value }
            data-testid="value-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="value">
          Descrição:
          <input
            type="text"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

InputsForm.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputsForm;
