import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputsForm extends Component {
  render() {
    const { value, description, onInputChange } = this.props;
    return (
      <div className='flex flex-col items-start font-mono'>
          <input
            type="number"
            name="value"
            value={ value }
            data-testid="value-input"
            onChange={ onInputChange }
            placeholder="Valor"
            style={{ background: "white" }}
            className='text-black ml-4 rounded-t-2xl shadow-inner'
          />

          <input
            type="text"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ onInputChange }
            placeholder="Descrição"
            style={{ background: "white" }}
            className='text-black ml-4 rounded-b-2xl'
          />
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
