import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses } from '../../../actions';
import InputsForm from './components/InputsForm';
import SelectsForm from './components/SelectsForm';
import ButtonForm from './components/ButtonForm';

class Form extends Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { dispatchInfo } = this.props;
    return (
      <form>
        <InputsForm
          value={ value }
          description={ description }
          onInputChange={ this.onInputChange }
        />
        <SelectsForm
          currency={ currency }
          method={ method }
          tag={ tag }
          onChange={ this.onInputChange }
        />
        <ButtonForm states={ this.state } dispatch={ dispatchInfo } />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchInfo: (state) => dispatch(getExpenses(state)),
});

Form.propTypes = {
  dispatchInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
