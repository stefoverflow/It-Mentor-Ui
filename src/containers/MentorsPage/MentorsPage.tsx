import React from "react";
import { observer } from "mobx-react-lite";
// import { useStore } from "../../stores/store";
import MentorList from "../../components/MentorList/MentorList";

import './MentorsPage.scss';
import MenuButton from "../../components/MenuButton/MenuButton";
import ClientContactButton from "../../components/ClientContactButton/ClientContactButton";
import SearchTextInput from "../../components/SearchTextInput/SearchTextInput";
import Footer from "../../components/Footer/Footer";

export default observer(function ConsultantDashboard() {
  // const { mentorStore } = useStore();

  return (
    <>
      <div className="mentors-page">
        <MenuButton />
        <ClientContactButton />
        <div className="mentors-page__title">
          Eksperti za vas!
        </div>
        <div className="mentors-page__description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
        <div>
          <SearchTextInput placeholder="Filtriraj mentore po skilovima (unesi ključnu reč)"/>
        </div>
        <div className="mentors-page__list">

        {/* {mentorStore.mentors ?  */}
        <MentorList /> 
        {/* : null} */}
        </div>
      </div>
      <Footer />
    </>
  );
});
