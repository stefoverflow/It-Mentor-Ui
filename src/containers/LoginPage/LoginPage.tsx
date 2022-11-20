import axios from "axios";
import { createRef } from "react";
import Logo from "../../components/Logo/Logo";
import useMobile from "../../hooks/useMobile";
import MentorsContactCover from "../../assets/mentors-contact-cover.png";
import MentorContactCoverMobile from "../../assets/mentors-contact-cover-mobile.png";
import "./LoginPage.scss";
import { Form as FinalForm } from "react-final-form";
import { FormApi, SubmissionErrors } from "final-form";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";
import { required } from "../../util/validators";
import { Button } from "semantic-ui-react";

const LoginPage = () => {
  let emailRef = createRef<HTMLInputElement>();
  let passwordRef = createRef<HTMLInputElement>();
  const { isMobile } = useMobile();

  const login = async (email: string, password: string) => {
    try {
      let response = await axios.post("http://localhost:5000/account/login", {
        email: email,
        password: password,
      });

      window.localStorage.setItem("jwt", response.data.token);
    } catch (error) {
      //updateErrorStatus(error, setValidationError);
    }
  };

  return (
    <div className="login">
      {!isMobile ? (
        <div className="landing__header__logo">
          <Logo />
        </div>
      ) : null}
      <div className="login-cover">
        <img src={isMobile ? MentorContactCoverMobile : MentorsContactCover} />
      </div>
      <div className="login__content">
        {isMobile ? <Logo /> : null}
        <div className="login__content__label">Uloguj se</div>
        <FinalForm
          onSubmit={(values) => login(values.email, values.password)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="login__content__fields">
                <FieldTextInput
                  placeholder="E-mail"
                  name="email"
                  validate={required("Obavezno polje")}
                />
                <FieldTextInput
                  placeholder="Password"
                  name="password"
                  validate={required("Obavezno polje")}
                />
                <button
                  className="login__content__button" 
                  type="submit">Uloguj se
                </button>
              </div>
            </form>
          )}
        ></FinalForm>
      </div>
    </div>
  );
};

export default LoginPage;
