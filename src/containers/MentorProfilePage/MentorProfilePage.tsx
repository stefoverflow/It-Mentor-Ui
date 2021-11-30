import React, { useEffect } from "react";
import { useStore } from "../../stores/store";
import ProfileFeed from "./ProfileFeed";
import ProfileHeader from "./ProfileHeader";
import { Loader } from "semantic-ui-react";

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
  const { loadConsultant, fetchMentorInProgress, fetchMentorError, mentor } =
    mentorStore;
  const mentorId = props.match.params.id;

  const fetchMentor = () => {
    loadConsultant(mentorId);
  };

  console.log("id", mentorId);
  console.log("mentor.displayName", mentor.displayName);

  useEffect(() => {
    fetchMentor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   reviewStore.getReviewsForSelectedConsultant(mentorStore.selectedConsultant);
  //   postStore.getListOfPostsForSelectedConsultant(
  //     mentorStore.selectedConsultant
  //   );
  // }, [reviewStore, postStore, mentorStore]);

  return (
    <div>
      {fetchMentorInProgress ? (
        <Loader active inline />
      ) : fetchMentorError ? (
        <div className="mentor-profile-page__error">{fetchMentorError}</div>
      ) : (
        <>
          <ProfileHeader mentor={mentor} />
          <ProfileFeed mentor={mentor} />
        </>
      )}
    </div>
  );
};

export default MentorProfilePage;
