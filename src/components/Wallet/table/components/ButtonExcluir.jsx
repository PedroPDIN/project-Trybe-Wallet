import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpenses } from '../../../../actions';

class ButtonExcluir extends Component {
  /*   construtor() {
      super();
      this.removeValues = this.removeValues.bind(this);
    } */

  render() {
    const { dispatchRemove, id } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={() => dispatchRemove(id)}
      >
        Excluir
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchRemove: (valueId) => dispatch(removeExpenses(valueId)),
});

export default connect(null, mapDispatchToProps)(ButtonExcluir);
