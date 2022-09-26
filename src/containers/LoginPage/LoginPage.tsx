import axios from "axios";
import { ChangeEvent, useState } from "react";
import TextBox from "../../components/presentational/TextBox/TextBox";
import { updateErrorStatus } from "../../util/validators";

const LoginPage = () => {
  let [email, setEmail] = useState<string>('');
  let [password, setPassword] = useState<string>('');
  let [currentlyLoggedInUsername, setCurrentlyLoggedInUsername] = useState<string>('');
  let [validationError, setValidationError] = useState<string>('');

  const login = async (email: string, password: string) => {
    try {
      let response = await axios.post("http://localhost:5000/account/login", {
        email: email,
        password: password,
      });

      setCurrentlyLoggedInUsername(response.data.displayName);
      console.log(response);
    } catch (error) {
        updateErrorStatus(error, setValidationError);
    }
  };

  return (
    <div className="login-form">
      <TextBox
        placeholder="email"
        value={email}
        validation="jo jo jo"
        setValue={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <TextBox
        placeholder="password"
        value={password}
        validation="no no no"
        setValue={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <p>{currentlyLoggedInUsername}</p>
      {validationError && <p>{validationError}</p>}
      <button onClick={() => login(email, password)}>Login</button>
    </div>
  );
};

export default LoginPage;
