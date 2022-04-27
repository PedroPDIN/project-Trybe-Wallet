import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonExcluir from './components/ButtonExcluir';

class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <table className="flex justify-center border-collapse  
        text-white mx-2 table-auto">
          <tbody>
            <tr className='flex flex-row'>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Descrição</th>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Tag</th>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Método de pagamento</th>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Valor convertido</th>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Moeda</th>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Câmbio utilizado</th>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Valor Convertido</th>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Moeda de conversão</th>
              <th className='flex items-center justify-center w-44 py-4 border-b border-collapse text-white font-serif'>Excluir</th>
            </tr>

            {data.map((element) => (
              <tr key={ element.id } className="flex flex-row">
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-cyan-400 font-mono'>{element.description}</td>
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-cyan-400 font-mono'>{element.tag}</td>
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-cyan-400 font-mono'>{element.method}</td>
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-cyan-400 font-mono'>{element.value}</td>
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-cyan-400 font-mono'>{element.exchangeRates[element.currency].name.split('/')[0]}</td>
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-cyan-400 font-mono'>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-cyan-400 font-mono'>
                  {Number(element.exchangeRates[element.currency].ask * element.value)
                    .toFixed(2)}
                </td>
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-cyan-500 font-mono'>Real</td>
                <td className='flex items-center justify-center w-44 py-2 border-b border-collapse text-red-600 font-mono hover:bg-white active:bg-red-600'><ButtonExcluir id={ element.id } data-testid="delete-btn" /></td>
              </tr>
            ))}

          </tbody>
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
