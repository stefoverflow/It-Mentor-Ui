import React from "react";
import { observer } from "mobx-react-lite";
import { Form as FinalForm } from "react-final-form";
import { Button, Form } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import { history } from "../../";
import CategoriesSkillsFields, {
  CategoriesSkillsFieldsValidation,
} from "../EditCategoriesSkillsFields/EditCategoriesSkillsFields";
import { User } from "../../models/user";

import "./CategoriesSkillsForm.scss";

type CategoriesSkillsFormProps = {};

const CategoriesSkillsForm: React.FC<CategoriesSkillsFormProps> = () => {
  const currentUser: User = JSON.parse(localStorage.getItem("user") || "{}");
  const { id } = currentUser;
  const { mentorStore } = useStore();
  const {
    chooseCategory,
    chooseCategoryInProgress,
    chooseCategoryError,
    chooseCategorySent,
    chooseSkills,
    chooseSkillsInProgress,
    chooseSkillsError,
    chooseSkillsSent,
  } = mentorStore;

  if (chooseCategorySent && chooseSkillsSent) {
    history.push("/profile");
  }

  return (
    <FinalForm
      onSubmit={(values: any) => {
        const { categories, skills } = values;

        if (id) {
          chooseCategory(id, categories);
          chooseSkills(categories, skills);
        }
      }}
      validate={CategoriesSkillsFieldsValidation}
      render={({ handleSubmit, valid, submitting, form, values }) => (
        <Form onSubmit={handleSubmit}>
          <CategoriesSkillsFields form={form} values={values} />
          {chooseCategoryError && (
            <div className="categories-skills-form__error">
              {chooseCategoryError}
            </div>
          )}
          {chooseSkillsError && (
            <div className="categories-skills-form__error">
              {chooseSkillsError}
            </div>
          )}
          <Button
            disabled={!valid}
            loading={
              submitting || chooseCategoryInProgress || chooseSkillsInProgress
            }
            primary
            content="Save categories and skills"
            type="submit"
            fluid
          />
        </Form>
      )}
    />
  );
};

export default observer(CategoriesSkillsForm);
