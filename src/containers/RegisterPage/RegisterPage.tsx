import React, { useState } from "react";
import { useStore } from "../../stores/store";
import { Form as FinalForm } from "react-final-form";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";
import { Button } from "semantic-ui-react";
import { composeValidators } from "../../util/validators";
import "./RegisterPage.scss";
import Loading from "../../components/Loading/Loading";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

const RegisterPage = () => {
  const {
    userStore: { registerMentor },
  } = useStore();

  const [validationError, setValidationError] = useState("");

  const inputRef = React.createRef<HTMLInputElement>();
  const handleClick = () => {
    if(inputRef.current?.value === ""){
      setValidationError("Prazno");
    }
  }


  return (
    <div className="register-content">
      <FinalForm
        onSubmit={(values) => registerMentor(values)}
        render={({ handleSubmit, values, submitting, submitSucceeded }) => (
          <form onSubmit={handleSubmit}>
            <div>
              {/* <FieldTextInput
               placeholder={"Email"}
               name={"Email"} />
              <FieldTextInput 
               placeholder={"Username"} 
               name={"Username"} />
              <FieldTextInput 
               placeholder={"Password"} 
               name={"Password"} />
              <FieldTextInput 
               placeholder={"Category"} 
               name={"CategoryName"} />
              <Button type="submit">
                <Loading
                  submitting={submitting}
                  submitSucceeded={submitSucceeded}
                  buttonText={"Registruj se"}
                />
              </Button> */}
              <input ref={inputRef} type="text" />
              <p>{validationError}</p>
              <button onClick={() => handleClick()}>Validate if empty</button>
            </div>
          </form>
        )}
      ></FinalForm>
    </div>
  );
};

export default RegisterPage;
