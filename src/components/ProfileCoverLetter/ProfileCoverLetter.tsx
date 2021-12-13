import React, { useState } from "react";
import { Button, Container, Tab } from "semantic-ui-react";
import agent from "../../api/agent";
import WidgetDropzone from "../WidgetDropzone/WidgetDropzone";

const ProfileCoverLetter: React.FC<{}> = () => {
  const [files, setFiles] = useState<any>([]);

  console.log("files", files);

  const uploadCV = async () => {
    try {
      const response = await agent.Mentors.uploadCV(files[0]);
      console.log("response", response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Tab.Pane>
      <Container textAlign="right">
        <Button
          // floated="right"
          basic
          disabled={files && files.length < 1}
          content="Upload"
          onClick={() => uploadCV()}
        />
      </Container>
      <WidgetDropzone text="Drop cover letter here" setFiles={setFiles} />
    </Tab.Pane>
  );
};

export default ProfileCoverLetter;
