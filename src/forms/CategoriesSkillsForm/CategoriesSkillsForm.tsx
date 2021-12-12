import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Form as FinalForm } from "react-final-form";
import { Button, Form } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import { history } from "../../";
import CategoriesSkillsFields, {
  CategoriesSkillsFieldsValidation,
} from "../EditCategoriesSkillsFields/EditCategoriesSkillsFields";
import { User } from "../../models/user";
import { Skill } from "../../models/skill";

import "./CategoriesSkillsForm.scss";

type CategoriesSkillsFormProps = {};

const CategoriesSkillsForm: React.FC<CategoriesSkillsFormProps> = () => {
  const currentUser: User = JSON.parse(localStorage.getItem("user") || "{}");
  const { id } = currentUser;
  const { mentorStore } = useStore();
  const {
    fetchCategories,
    fetchCategoriesInProgress,
    fetchCategoriesError,
    categories,
    chooseCategory,
    chooseCategoryInProgress,
    chooseCategoryError,
    chooseCategorySent,
    fetchSkills,
    fetchSkillsInProgress,
    fetchSkillsError,
    skills: fechedSkills,
    chooseSkills,
    chooseSkillsInProgress,
    chooseSkillsError,
    chooseSkillsSent,
  } = mentorStore;
  // const { categories: initialCategory } = values;
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchSkills(selectedCategory);
  }, [fetchSkills, selectedCategory]);

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
  };

  if (chooseCategorySent && chooseSkillsSent) {
    history.push("/profile");
  }

  return (
    <FinalForm
      onSubmit={(values: any) => {
        const { categories, skills } = values;

        // skills treba bude [ {id, name }, { id, name }...]
        console.log("skills", skills);
        const selectedSkills = fechedSkills.filter((s) =>
          skills.find((ss: string) => ss === s.id)
        );
        console.log("selectedSkills", selectedSkills);

        if (id) {
          chooseCategory(id, categories);
          chooseSkills(categories, selectedSkills);
        }
      }}
      validate={CategoriesSkillsFieldsValidation}
      render={({ handleSubmit, valid, submitting, form, values }) => (
        <Form onSubmit={handleSubmit}>
          <CategoriesSkillsFields
            fetchCategoriesInProgress={fetchCategoriesInProgress}
            fetchCategoriesError={fetchCategoriesError}
            categories={categories}
            fetchSkillsInProgress={fetchSkillsInProgress}
            fetchSkillsError={fetchSkillsError}
            skills={fechedSkills}
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
            form={form}
            values={values}
          />
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
