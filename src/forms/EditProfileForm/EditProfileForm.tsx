import React, { useState, useMemo, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  Container,
  Form,
  Button,
  Icon,
  Header,
  Loader,
} from "semantic-ui-react";
import { Form as FinalForm } from "react-final-form";
import { User } from "../../models/user";
import "./EditProfileForm.scss";
import EditProfileFields from "../EditProfileFields/EditProfileFields";
import EditCategoriesSkillsFields, {
  CategoriesSkillsFieldsValidation,
} from "../EditCategoriesSkillsFields/EditCategoriesSkillsFields";
import { ROLES } from "../../constants";
import { useStore } from "../../stores/store";

type EditProfileFormProps = {
  user: User;
};

type SubmitProps = {};

const EditProfileForm: React.FC<EditProfileFormProps> = ({ user }) => {
  const { id = "", displayName, username, role } = user;
  const { mentorStore } = useStore();
  const { loadConsultant, mentor, fetchMentorInProgress, fetchMentorError } =
    mentorStore;
  const { categories, skills } = mentor;
  const [editMode, setEditMode] = useState(false);
  const isMentor = useMemo(() => role === ROLES.MENTOR, [role]);

  const initialCategoryMaybe =
    categories && categories.length > 0 ? { categories: categories[0].id } : {};
  const initialSkillsMaybe = skills && skills.length > 0 ? { skills } : {};

  useEffect(() => {
    if (isMentor) {
      loadConsultant(id);
    }
  }, [id, isMentor, loadConsultant]);
  return (
    <Container>
      <div className="edit-profile-form__edit-icon">
        <span>Edit profile</span>
        <Icon name="edit" onClick={() => setEditMode(!editMode)} />
      </div>
      {editMode ? (
        <FinalForm
          initialValues={{
            displayName,
            username,
            ...initialCategoryMaybe,
            ...initialSkillsMaybe,
          }}
          onSubmit={(values: SubmitProps) =>
            console.log("edit-profile-submit ->", values)
          }
          validate={CategoriesSkillsFieldsValidation}
          render={({ handleSubmit, valid, submitting, form, values }) => (
            <Form onSubmit={handleSubmit}>
              <EditProfileFields />
              {isMentor && (
                <EditCategoriesSkillsFields form={form} values={values} />
              )}
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
          {isMentor ? (
            fetchMentorInProgress ? (
              <Loader active />
            ) : fetchMentorError ? (
              <div>{fetchMentorError}</div>
            ) : (
              <Container>
                <Container>
                  <Header as="h4" content="Categories:" />
                  {mentor.categories.map((c) => (
                    <div key={c.id} className="edit-profile-form__field">
                      {c.name}
                    </div>
                  ))}
                </Container>
                <Container>
                  <Header as="h4" content="Skills:" />
                  {mentor.skills.map((s) => (
                    <div key={s.id} className="edit-profile-form__field">
                      {s.name}
                    </div>
                  ))}
                </Container>
              </Container>
            )
          ) : null}
        </Container>
      )}
    </Container>
  );
};

export default observer(EditProfileForm);
