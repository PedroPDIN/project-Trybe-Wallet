import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../../../../actions';

class ButtonExcluir extends Component {
  render() {
    const { dispatchRemove, id } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => dispatchRemove(id) }
      >
        Excluir
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchRemove: (valueId) => dispatch(removeExpenses(valueId)),
});

ButtonExcluir.propTypes = {
  dispatchRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(ButtonExcluir);
