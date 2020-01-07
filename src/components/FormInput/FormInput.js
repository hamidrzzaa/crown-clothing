import React from "react";
import "./FormInput.styles.scss";
const FormInput = ({ onInputChange, label, type, name, value, ...props }) => {
  const renderLabel = () => {
    if (label) {
      return (
        <label className={`form-input-label ${value.length ? "shrink" : ""}`}>
          {label}
        </label>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onInputChange}
        {...props}
      />
      {renderLabel()}
    </div>
  );
};

export default FormInput;
