import React from "react";
import PropTypes from "prop-types";

const InputGroup = props => {
  const { label, name, value, placeholder, type, onChange } = props;

  return (
    <div className="login__form__field NewMessage__space">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control border-input"
        placeholder={placeholder}
        required="required"
        type={type}
        name={name}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
