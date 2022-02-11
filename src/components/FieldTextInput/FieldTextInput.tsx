import React from "react";
// import { Form } from "semantic-ui-react";
import { Field } from "react-final-form";

import "./FieldTextInput.scss";

type FieldTextInputProps = {
  placeholder: string;
  name: string;
  type?: string;
  label?: string;
  validate?: any;
};

const FieldTextInput: React.FC<FieldTextInputProps> = (props) => {
  const { placeholder, name, type, label, validate } = props;
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
          // <Form.Field error={meta.error && meta.touched}>
        <div className="text-input">
          <label className="text-input__label">{label}</label>
          <input {...input} type={type} className="text-input__input" placeholder={placeholder} />
          {meta.error && meta.touched && (
            <span className="text-input__error">{meta.error}</span>
          )}
        </div>
        // </Form.Field>
      )}
      validate={validate}
    />
  );
};

export default FieldTextInput;
