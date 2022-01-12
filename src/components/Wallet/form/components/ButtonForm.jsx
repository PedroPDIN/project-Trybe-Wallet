import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoinsApi, getRequireApi } from '../../../../actions';

class ButtonForm extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      id: 0,
    };
  }

  componentDidMount() {
    const { onCurrencies } = this.props;
    onCurrencies();
  }

  async onClick() {
    const { states, dispatch, onRates, reset } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    const exchangeRates = await onRates();
    const result = { ...states, id, exchangeRates };
    // linha acima feito com auxilio de MAteus Turola turma 16 for(ever).
    dispatch(result);
    reset();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.onClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

ButtonForm.propTypes = {
  states: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    coin: PropTypes.string,
    payment: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  onCurrencies: PropTypes.func.isRequired,
  onRates: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCurrencies: () => dispatch(getCoinsApi()),
  onRates: () => dispatch(getRequireApi()),
});

export default connect(null, mapDispatchToProps)(ButtonForm);

