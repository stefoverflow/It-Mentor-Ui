import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
// import { useStore } from "../../stores/store";
import MentorList from "../../components/MentorList/MentorList";

import "./MentorsPage.scss";
import Menu from "../../components/Menu/Menu";
import ClientContactButton from "../../components/ClientContactButton/ClientContactButton";
import SearchTextInput from "../../components/SearchTextInput/SearchTextInput";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import useMobile from "../../hooks/useMobile";

export default observer(function ConsultantDashboard() {
  // const { mentorStore } = useStore();
  const {isMobile} = useMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="mentors-page">
        <Menu />
        <ClientContactButton />
        <div>
          {/* <SearchTextInput placeholder="Filtriraj mentore po skilovima (unesi ključnu reč)"/> */}
        </div>
        <div className="mentors-page__list">
          {/* {mentorStore.mentors ?  */}
          <MentorList />
          {/* : null} */}
        </div>
        <div className="mentors-page__logo">
          {!isMobile && <Logo />}
        </div>
      </div>
      <Footer />
    </div>
  );
});
