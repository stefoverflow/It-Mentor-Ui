import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import MentorList from "../../components/MentorList/MentorList";

export default observer(function ConsultantDashboard() {
  const { mentorStore } = useStore();

  return (
    // <Grid>
    mentorStore.mentors ? <MentorList /> : null
    /* <Grid.Column width="6">
        {consultantStore.selectedConsultant && <ConsultantDetails />}
        {commonStore.displayConsultantContact ? (
          <ConsultantContactForm />
        ) : null}
      </Grid.Column> */
    // </Grid>
  );
});
