import React, { useEffect, useMemo } from "react";
import { useStore } from "../../stores/store";
import ProfileFeed from "./ProfileFeed";
import ProfileHeader from "./ProfileHeader";
import { Loader } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { User } from "../../models/user";
import { ROLES } from "../../constants";

import "./MentorProfilePage.scss";

type MentorProfileProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const MentorProfilePage: React.FC<MentorProfileProps> = (props) => {
  const { mentorStore } = useStore();
  const currentUser: User = JSON.parse(localStorage.getItem("user") || "{}");
  const { role } = currentUser;
  const isClient = useMemo(() => role === ROLES.CLIENT, [role]);
  const { loadConsultant, fetchMentorInProgress, fetchMentorError, mentor } =
    mentorStore;
  const mentorId = props.match.params.id;

  const fetchMentor = () => {
    loadConsultant(mentorId);
  };

  useEffect(() => {
    fetchMentor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {fetchMentorInProgress ? (
        <Loader active inline />
      ) : fetchMentorError ? (
        <div className="mentor-profile-page__error">{fetchMentorError}</div>
      ) : (
        <>
          <ProfileHeader mentor={mentor} />
          <ProfileFeed mentor={mentor} isClient={isClient} />
        </>
      )}
    </div>
  );
};

export default observer(MentorProfilePage);
