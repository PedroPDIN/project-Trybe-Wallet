import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectForm extends Component {
  render() {
    const { currency, method, tag, onChange } = this.props;
    return (
      <div>
        <label htmlFor="currency's">
          Moeda:
          <select
            name="currency"
            value={ currency }
            onChange={ onChange }
            data-testid="currency-input"
          >
            <option value="test">test</option>
            <option value="test2">test2</option>
          </select>
        </label>
        <label htmlFor="methods">
          Pagamentos:
          <select
            name="method"
            value={ method }
            onChange={ onChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tags">
          Tags:
          <select
            name="tag"
            value={ tag }
            onChange={ onChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectForm.propTypes = {
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectForm;
