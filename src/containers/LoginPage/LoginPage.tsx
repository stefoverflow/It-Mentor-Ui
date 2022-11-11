import axios from "axios";
import { ChangeEvent, createRef, useRef, useState } from "react";
import TextBox from "../../components/presentational/TextBox/TextBox";
import { updateErrorStatus } from "../../util/validators";

const LoginPage = () => {
  let emailRef = createRef<HTMLInputElement>();
  let passwordRef = createRef<HTMLInputElement>();
  let [currentlyLoggedInUsername, setCurrentlyLoggedInUsername] = useState<string>('');
  let [validationError, setValidationError] = useState<string>('');

  const login = async () => {
    try {
      let response = await axios.post("http://localhost:5000/account/login", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      
      window.localStorage.setItem('jwt',response.data.token);
    } catch (error) {
        updateErrorStatus(error, setValidationError);
    }
  };

  return (
    <div className="login-form">
      <input
        placeholder="email"
        ref = {emailRef}
      />
      <input
        placeholder="password"
        ref={passwordRef}
      />
      <p>{currentlyLoggedInUsername}</p>
      {validationError && <p>{validationError}</p>}
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default LoginPage;
