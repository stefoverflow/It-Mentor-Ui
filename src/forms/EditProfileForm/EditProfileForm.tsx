import React, { useState } from "react";
import { Container, Form, Button, Icon, Header } from "semantic-ui-react";
import { Form as FinalForm } from "react-final-form";
import { User } from "../../models/user";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";
import { required } from "../../util/validators";
import "./EditProfileForm.scss";

type EditProfileFormProps = {
  user: User;
};

type SubmitProps = {};

const EditProfileForm: React.FC<EditProfileFormProps> = ({ user }) => {
  const { displayName, username } = user;
  const [editMode, setEditMode] = useState(false);
  return (
    <Container>
      <div className="edit-profile-form__edit-icon">
        <span>Edit profile</span>
        <Icon name="edit" onClick={() => setEditMode(!editMode)} />
      </div>
      {editMode ? (
        <FinalForm
          initialValues={{ displayName, username }}
          onSubmit={(values: SubmitProps) =>
            console.log("edit-profile-submit ->", values)
          }
          render={({ handleSubmit, valid, submitting }) => (
            <Form onSubmit={handleSubmit}>
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
              <Button
                disabled={!valid}
                loading={submitting}
                primary
                content="Edit profile"
                type="submit"
                fluid
              />
            </Form>
          )}
        />
      ) : (
        <Container>
          <Container>
            <Header as="h4" content="Display name" />
            <div className="edit-profile-form__field">{displayName}</div>
          </Container>
          <Container>
            <Header as="h4" content="User name" />
            <div className="edit-profile-form__field">{username}</div>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default EditProfileForm;
