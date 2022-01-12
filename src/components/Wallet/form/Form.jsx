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
    this.onResetChange = this.onResetChange.bind(this);

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

  onResetChange() {
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
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
        <ButtonForm
          states={ this.state }
          dispatch={ dispatchInfo }
          reset={ this.onResetChange }
        />
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
