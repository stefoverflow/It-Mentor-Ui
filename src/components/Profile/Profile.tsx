import React, { useEffect } from "react";
import { useStore } from "../../stores/store";
import ProfileFeed from "./ProfileFeed";
import ProfileHeader from "./ProfileHeader";

export default function Profile() {
  const { mentorStore } = useStore();
  const { reviewStore } = useStore();
  const { postStore } = useStore();

  useEffect(() => {
    reviewStore.getReviewsForSelectedConsultant(mentorStore.selectedConsultant);
    postStore.getListOfPostsForSelectedConsultant(
      mentorStore.selectedConsultant
    );
  }, [reviewStore, postStore, mentorStore]);

  return (
    <div>
      <ProfileHeader />
      <ProfileFeed />
    </div>
  );
}
