import ClientLandingPage from './containers/ClientLandingPage/ClientLandingPage';
import MentorsPage from "./containers/MentorsPage/MentorsPage";
import { observer } from "mobx-react-lite";
import { Route, Switch } from "react-router-dom";
import HomePage from './containers/HomePage/HomePage';
import MentorProfilePage from "./containers/MentorProfilePage/MentorProfilePage";
import Calendly from "./components/Calendy/Calendly";
import TestErrors from "./components/TestError/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFoundError/NotFound";
import CategoriesForm from "./forms/CategoriesForm/CategoriesForm";
import SkillsForm from "./forms/SkillsForm/SkillsForm";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import CategoriesSkillsForm from "./forms/CategoriesSkillsForm/CategoriesSkillsForm";
import ClientsPage from './containers/ClientsPage/ClientsPage';
import ClientContactPage from "./containers/ClientContactPage/ClientContactPage";
import LoginPage from "./containers/LoginPage/LoginPage";
import AdminPage from "./containers/AdminPage/AdminPage";
import MentorsContactPage from './containers/MentorsContactPage/MentorsContactPage';
import RegisterPage from './containers/RegisterPage/RegisterPage';

const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" hideProgressBar />
      {/* <Navbar /> */}
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/client-landing" component={ClientLandingPage} />
          <Route path="/client-contact" component={ClientContactPage} />
          <Route path="/clients" component={ClientsPage} />
          <Route path="/manage" component={AdminPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/mentors-contact" component={MentorsContactPage} />
          <Route path="/choose" component={CategoriesSkillsForm} />
          <Route path="/categories" component={CategoriesForm} />
          <Route path="/skills" component={SkillsForm} />
          <Route exact path="/mentors" component={MentorsPage} />
          <Route path="/profile" component={ProfilePage} />
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
