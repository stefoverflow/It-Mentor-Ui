import React, { useState } from "react";
import { Button, Container, Tab } from "semantic-ui-react";
import agent from "../../api/agent";
import WidgetDropzone from "../WidgetDropzone/WidgetDropzone";

const ProfileCoverLetter: React.FC<{}> = () => {
  const [files, setFiles] = useState<any>([]);

  console.log("files", files);

  function fileToByteArray(file: any) {
    return new Promise((resolve, reject) => {
      try {
        let reader = new FileReader();
        let fileByteArray: any = [];
        reader.readAsArrayBuffer(file);
        reader.onloadend = (evt: any) => {
          if (evt.target.readyState == FileReader.DONE) {
            let arrayBuffer = evt.target.result,
              array = new Uint8Array(arrayBuffer);
            array.forEach((byte: any) => fileByteArray.push(byte));
          }
          resolve(fileByteArray);
        };
      } catch (e) {
        reject(e);
      }
    });
  }

  const uploadCV = async () => {
    try {
      const byteArray = await fileToByteArray(files[0]);
      console.log({ byteArray });
      const response = await agent.Mentors.uploadCV(byteArray);
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
