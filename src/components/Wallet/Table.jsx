import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            {' '}
            <th>Tag</th>
            {' '}
            <th>Método de Pagamento</th>
            {' '}
            <th>Valor</th>
            {' '}
            <th>Moeda</th>
            {' '}
            <th>Câmbio utilizado</th>
            {' '}
            <th>Valor Convertido</th>
            {' '}
            <th>Moeda de Convenção</th>
            {' '}
            <th>Editar/Excluir</th>
          </tr>
          {data.map((element, index) => (
            <tr key={ index }>
              <td>{element.description}</td>
              <td>{element.tag}</td>
              <td>{element.method}</td>
              <td>{element.value}</td>
              <td>{element.currency}</td>
              <td>{element.exchangeRates[element.currency].name.split('/')[0]}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.wallet.expenses,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Table);
