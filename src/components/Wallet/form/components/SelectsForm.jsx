import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectForm extends Component {
  render() {
    const { currency, method, tag, onChange, coins } = this.props;
    return (
      <div>
        <label htmlFor="currency's">
          Moeda:
          <select
            id="currency's"
            name="currency"
            value={ currency }
            onChange={ onChange }
            data-testid="currency-input"
          >
            {coins.map((value, index) => (
              <option
                key={ index }
                value={ value }
                data-testid={ value }
              >
                {value}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="methods">
          Pagamentos:
          <select
            id="methods"
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
            id="tags"
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

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

SelectForm.propTypes = {
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(SelectForm);
