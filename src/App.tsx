import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MentorsPage from "./containers/MentorsPage/MentorsPage";
import { observer } from "mobx-react-lite";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage";
import AdminPanel from "./containers/AdminPanelPage/AdminPanelPage";
import LoginForm from "./forms/LoginForm/LoginForm";
import MentorProfilePage from "./containers/MentorProfilePage/MentorProfilePage";
import Calendly from "./components/Calendy/Calendly";
import TestErrors from "./components/TestError/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFoundError/NotFound";
import RegisterForm from "./forms/RegisterForm/RegisterForm";
import CategoriesForm from "./forms/CategoriesForm/CategoriesForm";
import SkillsForm from "./forms/SkillsForm/SkillsForm";
import ProfilePage from "./containers/ProfilePage/ProfilePage";

const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Navbar />
      <div /*style={{ marginTop: "7em" }}*/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/manage" component={AdminPanel} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/categories" component={CategoriesForm} />
          <Route path="/skills" component={SkillsForm} />
          <Route exact path="/mentors" component={MentorsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="/consultants/hire" component={Calendly} />
          <Route path="/mentors/:id" component={MentorProfilePage} />
          <Route path="/errors" component={TestErrors} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default observer(App);
