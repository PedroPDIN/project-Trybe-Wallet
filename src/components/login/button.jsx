import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { isDisabled, getDispatch, email } = this.props;
    return (
      <div>
        <Link to="/carteira">
          <button
            type="button"
            disabled={isDisabled}
            onClick={() => getDispatch(email)}
            style={{ background: "#0ab08d" }}
            className="flex flex-col items-center p-2 w-40 text-slate-50 font-mono mt-3 rounded-3xl disabled:opacity-30"
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  getDispatch: PropTypes.func.isRequired,
};

export default Button;
