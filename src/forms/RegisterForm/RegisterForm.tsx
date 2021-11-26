import React from "react";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { Form as FinalForm } from "react-final-form";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";
import FieldCheckbox from "../../components/FieldCheckbox/FieldCheckbox";
import FieldRadioButton from "../../components/FieldRadioButton/FieldRadioButton";
import { history } from "../../";
import {
  composeValidators,
  emailFormatValid,
  minLength,
  required,
} from "../../util/validators";
import { useStore } from "../../stores/store";
import { roles } from "../../constants";

import "./RegisterForm.scss";

type SubmitProps = {
  displayName: string;
  userName: string;
  email: string;
  password: string;
  role: string;
};

export default function RegisterForm() {
  const { userStore } = useStore();

  return (
    <Container textAlign="center" className="register-form">
      <div className="register-form__form">
        <FinalForm
          onSubmit={
            (values: SubmitProps) =>
              userStore
                .register(values)
                .then(() =>
                  values.role === "consultant"
                    ? history.push("/categories")
                    : history.push("/profile")
                )
            // .catch((e) => setError(e.toString()))
          }
          render={({ handleSubmit, valid, submitting }) => (
            <Form onSubmit={handleSubmit}>
              <Header as="h1">Register</Header>
              <FieldTextInput
                name="displayName"
                type="text"
                label="Display name"
                placeholder="Enter display name..."
                validate={required("Display name is required.")}
              />
              <FieldTextInput
                name="username"
                type="text"
                label="User name"
                placeholder="Enter user name..."
                validate={required("User name is required.")}
              />
              <FieldTextInput
                name="email"
                type="email"
                label="Email"
                placeholder="Enter email..."
                validate={composeValidators(
                  required("Email is required"),
                  emailFormatValid("Please enter valid email")
                )}
              />
              <FieldTextInput
                name="password"
                type="password"
                label="Password"
                placeholder="Enter password..."
                validate={composeValidators(
                  required("Password is required."),
                  minLength("Minimum password length is 8", 8)
                )}
              />
              <div className="register-form__form__grouped-items">
                <label className="register-form__form__label">Role</label>
                {roles.map((role) => (
                  <FieldRadioButton
                    key={role.value}
                    name="role"
                    value={role.value}
                    label={role.text}
                    validate={required("You must select role.")}
                  />
                ))}
              </div>
              <div className={"register-form__form__termsAndConditions"}>
                <label className="register-form__form__label">
                  Terms and conditions
                </label>
                <FieldCheckbox
                  name="termsAndConditions"
                  value="agreed"
                  label="I agree to the Terms and Conditions"
                  validate={required("Terms and conditions are required.")}
                />
              </div>
              <Button
                disabled={!valid}
                loading={submitting}
                primary
                content="Register"
                type="submit"
                fluid
              />
            </Form>
          )}
        />
      </div>
    </Container>
  );
}
