import React from "react";
import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import ConsultantDetails from "../../components/MentorDetails/MentorDetails";
import ConsultantContactForm from "../../forms/ConsultantContractForm/ConsultantContact";
import ConsultantList from "../../components/MentorList/MentorList";

export default observer(function ConsultantDashboard() {
  const { mentorStore } = useStore();
  const { commonStore } = useStore();

  return (
    // <Grid>
    mentorStore.mentors ? <ConsultantList /> : null
    /* <Grid.Column width="6">
        {consultantStore.selectedConsultant && <ConsultantDetails />}
        {commonStore.displayConsultantContact ? (
          <ConsultantContactForm />
        ) : null}
      </Grid.Column> */
    // </Grid>
  );
});
