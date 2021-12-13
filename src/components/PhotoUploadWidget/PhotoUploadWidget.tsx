import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Grid, Header, Button } from "semantic-ui-react";
import PhotoWidgetCropper from "../PhotoWidgetCropper/PhotoWidgetCropper";
import PhotoWidgetDropzone from "../WidgetDropzone/WidgetDropzone";
import { useStore } from "../../stores/store";

type Props = {};

const PhotoUploadWidget: React.FC<Props> = () => {
  const [files, setFiles] = useState<any>([]);
  const [cropper, setCropper] = useState<Cropper>();
  const {
    profileStore: { uploadPhoto, uploadingPhoto },
  } = useStore();

  const onCrop = () => {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => uploadPhoto(blob!));
    }
  };

  console.log("uploadingPhoto", uploadingPhoto);

  useEffect(() => {
    return () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <Grid>
      <Grid.Column width={4}>
        <Header sub color="teal" content="Step 1 - Add Photo" />
        <PhotoWidgetDropzone text="Drop image here" setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header sub color="teal" content="Step 2 - Resize Image" />
        {files && files.length > 0 && (
          <PhotoWidgetCropper
            setCropper={setCropper}
            imagePreview={files[0].preview}
          />
        )}
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header sub color="teal" content="Step 3 - Preview & Upload" />
        {files && files.length > 0 && (
          <>
            <div
              className="img-preview"
              style={{ minHeight: 200, maxWidth: 200, overflow: "hidden" }}
            />
            <Button.Group widths={2}>
              <Button
                loading={uploadingPhoto}
                onClick={onCrop}
                positive
                icon="check"
              />
              <Button
                disabled={uploadingPhoto}
                onClick={() => setFiles([])}
                icon="close"
              />
            </Button.Group>
          </>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(PhotoUploadWidget);
