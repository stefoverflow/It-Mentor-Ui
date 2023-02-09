import React, { useState } from "react";
import { useStore } from "../../stores/store";
import { Form as FinalForm } from "react-final-form";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";
import { Button } from "semantic-ui-react";
import { composeValidators } from "../../util/validators";
import "./RegisterPage.scss";
import Loading from "../../components/Loading/Loading";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import useApiError from "../../hooks/useApiError";
import { AxiosError } from "axios";

const RegisterPage = () => {
  const {
    userStore: { registerMentor },
  } = useStore();

  const[error, handleError, clearError] = useApiError();

  const tryRegisterMentor = async (values: Record<string, any>) => {
    try {
      await registerMentor(values)
    } catch (error: any) {
      console.log(error);
    }
  }
const required = (value:string) => (value? undefined : 'Required');
  return (
    <div className="register-content">
      <FinalForm
        onSubmit={(values) => tryRegisterMentor(values)}
        render={({ handleSubmit, values, submitting, submitSucceeded }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FieldTextInput
               placeholder={"Email"}
               name={"Email"}
               validate={required} />
              <FieldTextInput 
               placeholder={"Username"} 
               name={"Username"} 
               validate={required}/>
              <FieldTextInput 
               placeholder={"Password"} 
               name={"Password"} 
               validate={required}/>
              <FieldTextInput 
               placeholder={"Category"} 
               name={"CategoryName"} 
               validate={required}/>
              <Button type="submit">
                <Loading
                  submitting={submitting}
                  submitSucceeded={submitSucceeded}
                  buttonText={"Registruj se"}
                />
              </Button>
            </div>
          </form>
        )}
      ></FinalForm>
    </div>
  );
};

export default RegisterPage;
