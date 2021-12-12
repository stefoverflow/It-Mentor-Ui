import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { User } from "../../models/user";
import EditProfileForm from "../../forms/EditProfileForm/EditProfileForm";

import "./ProfilePage.scss";
import ProfilePhoto from "../../components/ProfilePhoto/ProfilePhoto";
import ProfileContent from "../../components/ProfileContent/ProfileContent";
import { useStore } from "../../stores/store";

type ProfilePageProps = {};

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const currentUser: User = JSON.parse(localStorage.getItem("user") || "{}");
  const { image = "" } = currentUser;
  const {
    profileStore: { loadProfile },
  } = useStore();

  useEffect(() => {
    if (currentUser && currentUser.id) loadProfile(currentUser.id);
  }, [currentUser, loadProfile]);

  return (
    <Container className="profile-page">
      <ProfileContent currentUser={currentUser} photo={image} />
    </Container>
  );
};

export default ProfilePage;
