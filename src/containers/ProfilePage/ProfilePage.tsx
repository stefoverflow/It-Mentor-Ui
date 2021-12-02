import React from "react";
import { Container } from "semantic-ui-react";
import { User } from "../../models/user";
import EditProfileForm from "../../forms/EditProfileForm/EditProfileForm";
import CategoriesSkillsForm from "../../forms/CategoriesSkillsForm/CategoriesSkillsForm";

import "./ProfilePage.scss";

type ProfilePageProps = {};

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const currentUser: User = JSON.parse(localStorage.getItem("user") || "{}");
  console.log("currentUser", currentUser);

  return (
    <Container className="profile-page">
      <EditProfileForm user={currentUser} />
      <CategoriesSkillsForm />
    </Container>
  );
};

export default ProfilePage;
