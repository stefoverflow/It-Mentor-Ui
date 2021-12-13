import React from "react";
import { Tab } from "semantic-ui-react";
import EditProfileForm from "../../forms/EditProfileForm/EditProfileForm";
import ProfileCoverLetter from "../ProfileCoverLetter/ProfileCoverLetter";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

type ProfileContentProps = {
  currentUser: any;
  photo: string;
};

export default function ProfileContent({
  currentUser,
  photo,
}: ProfileContentProps) {
  const panes = [
    {
      menuItem: "About",
      render: () => (
        <Tab.Pane>
          <EditProfileForm user={currentUser} />
        </Tab.Pane>
      ),
    },
    { menuItem: "Photos", render: () => <ProfilePhoto photo={photo} /> },
    {
      menuItem: "Cover letter",
      render: () => <ProfileCoverLetter />,
    },
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
    />
  );
}
