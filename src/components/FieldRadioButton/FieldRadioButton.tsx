import React from "react";
import { Field } from "react-final-form";

import "./FieldRadioButton.scss";

type FieldRadioButtonProps = {
  name: string;
  label: string;
  value: string;
  validate?: any;
  onChange?: any;
};

const FieldRadioButton: React.FC<FieldRadioButtonProps> = (props) => {
  const { name, label, value, validate, onChange } = props;
  return (
    <label>
      <Field
        onChange={onChange}
        name={name}
        component="input"
        type="radio"
        value={value}
        validate={validate}
      />
      {label}
    </label>
  );
};

export default FieldRadioButton;
