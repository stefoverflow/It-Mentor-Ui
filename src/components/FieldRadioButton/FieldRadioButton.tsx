import React from "react";
import { Field } from "react-final-form";

import "./FieldRadioButton.scss";

type FieldRadioButtonProps = {
  name: string;
  label: string;
  value: string;
  validate?: any;
  onChange?: any;
  disabled?: boolean;
};

const FieldRadioButton: React.FC<FieldRadioButtonProps> = (props) => {
  const { name, label, value, validate, onChange, disabled = false } = props;
  const onChangeMaybe = onChange ? { onChange } : {};
  return (
    <label>
      <Field
        {...onChangeMaybe}
        name={name}
        component="input"
        type="radio"
        value={value}
        validate={validate}
        disabled={disabled}
      />
      {label}
    </label>
  );
};

export default FieldRadioButton;
