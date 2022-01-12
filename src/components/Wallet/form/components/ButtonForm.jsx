import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonForm extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      id: 0,
    };
  }

  onClick() {
    const { states, dispatch } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    const result = { ...states, id };
    dispatch(result);
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
};

export default ButtonForm;
