import React from "react";
import PropTypes from "prop-types";

const SharedButton = (props) => {
  const { buttonText, emitEvent } = props;
  const submitEvent = (emitEvent) => {
    if (emitEvent) {
      emitEvent();
    }
  };
  return (
    <button data-test="buttonComponent" onClick={() => submitEvent(emitEvent)}>
      {buttonText}
    </button>
  );
};

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default SharedButton;
