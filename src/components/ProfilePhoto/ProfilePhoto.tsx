import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Card,
  Image,
  Button,
  Loader,
  Tab,
  Header,
  Grid,
} from "semantic-ui-react";
import ProfileImage from "../../assets/user.png";
import { useStore } from "../../stores/store";

import "./ProfilePhoto.scss";
import PhotoUploadWidget from "../PhotoUploadWidget/PhotoUploadWidget";

type ProfilePhotoProps = {
  photo: string;
};

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ photo }) => {
  const {
    profileStore: { isCurrentUser },
  } = useStore();
  const [addPhotoMode, setAddPhotoMode] = useState<boolean>(false);
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header floated="left" icon="image" content="Profile Photo" />
          {isCurrentUser && (
            <Button
              floated="right"
              basic
              content={addPhotoMode ? "Cancel" : "Add Photo"}
              onClick={() => setAddPhotoMode(!addPhotoMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {addPhotoMode ? (
            <PhotoUploadWidget />
          ) : (
            <Card>
              <Image src={photo ? photo : ProfileImage} />
            </Card>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default observer(ProfilePhoto);
