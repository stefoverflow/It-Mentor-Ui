import React, {Suspense, useEffect} from 'react';
import MentorsPage from "./containers/MentorsPage/MentorsPage";
import { observer } from "mobx-react-lite";
import { Route, Switch, useLocation } from "react-router-dom";
import MentorProfilePage from "./containers/MentorProfilePage/MentorProfilePage";
import Calendly from "./components/Calendy/Calendly";
import TestErrors from "./components/TestError/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFoundError/NotFound";
import CategoriesForm from "./forms/CategoriesForm/CategoriesForm";
import SkillsForm from "./forms/SkillsForm/SkillsForm";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import CategoriesSkillsForm from "./forms/CategoriesSkillsForm/CategoriesSkillsForm";
import MentorsContactPage from './containers/MentorsContactPage/MentorsContactPage';
import { TestPage } from './containers/TestPage/TestPage';
import HomePage from './containers/HomePage/HomePage';
import ClientLandingPage from './containers/ClientLandingPage/ClientLandingPage';
import ClientContactPage from './containers/ClientContactPage/ClientContactPage';
import ClientsPage from './containers/ClientsPage/ClientsPage';
import AdminPage from './containers/AdminPage/AdminPage';
import LoginPage from './containers/LoginPage/LoginPage';
import RegisterPage from './containers/RegisterPage/RegisterPage';

// const HomePage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const ClientLandingPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const ClientContactPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const ClientsPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const AdminPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const LoginPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const RegisterPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const MentorsContactPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const CategoriesSkillsForm = React.lazy(() => import('./containers/HomePage/HomePage'));
// const CategoriesForm = React.lazy(() => import('./containers/HomePage/HomePage'));
// const SkillsForm = React.lazy(() => import('./containers/HomePage/HomePage'));
// const MentorsPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const MentorsPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const MentorsPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const MentorsPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const MentorsPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const MentorsPage = React.lazy(() => import('./containers/HomePage/HomePage'));
// const MentorsPage = React.lazy(() => import('./containers/HomePage/HomePage'));

import ReactGA from 'react-ga';

function usePageViews() {
  let location = useLocation();

  useEffect(() => {
    const TRACKING_ID = 'UA-256769966-1';
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

const App = () => {
  usePageViews();

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
          <Route path="/test" component={TestPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default observer(App);
