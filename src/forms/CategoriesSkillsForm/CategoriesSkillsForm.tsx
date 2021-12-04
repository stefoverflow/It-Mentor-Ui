import React from "react";
import { observer } from "mobx-react-lite";
import { Form as FinalForm } from "react-final-form";
import { Button, Form } from "semantic-ui-react";
import CategoriesSkillsFields, {
  CategoriesSkillsFieldsValidation,
} from "../EditCategoriesSkillsFields/EditCategoriesSkillsFields";

import "./CategoriesSkillsForm.scss";

type CategoriesSkillsFormProps = {};

const CategoriesSkillsForm: React.FC<CategoriesSkillsFormProps> = () => {
  return (
    <FinalForm
      onSubmit={(values: any) =>
        console.log("categories skills submit", values)
      }
      validate={CategoriesSkillsFieldsValidation}
      render={({ handleSubmit, valid, submitting, form }) => (
        <Form onSubmit={handleSubmit}>
          <CategoriesSkillsFields form={form} />
          <Button
            disabled={!valid}
            loading={submitting}
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
