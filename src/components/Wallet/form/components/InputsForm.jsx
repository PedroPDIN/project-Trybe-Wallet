import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputsForm extends Component {
  render() {
    const { value, description, onInputChange } = this.props;
    return (
      <div className='flex flex-col items-end font-mono'>
        <label htmlFor="value" className='text-2xl'>
          Valor:
          <input
            type="number"
            name="value"
            value={ value }
            data-testid="value-input"
            onChange={ onInputChange }
            style={{ background: "white" }}
            className='text-black ml-4 rounded-t-2xl shadow-inner'
          />
        </label>
        <label htmlFor="value" className='text-2xl'>
          Descrição:
          <input
            type="text"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ onInputChange }
            style={{ background: "white" }}
            className='text-black ml-4 rounded-b-2xl'
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
