import React from "react";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";
import { required } from "../../util/validators";

type EditProfileFields = {};

const EditProfileFields: React.FC<EditProfileFields> = () => {
  return (
    <div>
      <FieldTextInput
        name="displayName"
        type="text"
        label="Display name"
        placeholder="Enter display name..."
        validate={required("Display name is required.")}
      />
      <FieldTextInput
        name="username"
        type="text"
        label="User name"
        placeholder="Enter user name..."
        validate={required("User name is required.")}
      />
    </div>
  );
};

export default EditProfileFields;
