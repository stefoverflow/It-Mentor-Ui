import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Form as FinalForm } from "react-final-form";
import { Button, Loader, Form } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import FieldRadioButton from "../../components/FieldRadioButton/FieldRadioButton";
import FieldCheckbox from "../../components/FieldCheckbox/FieldCheckbox";

import "./CategoriesSkillsForm.scss";
import { required } from "../../util/validators";
import { ValidationErrors } from "final-form";

type CategoriesSkillsFormProps = {};

const CategoriesSkillsForm: React.FC<CategoriesSkillsFormProps> = () => {
  const { mentorStore } = useStore();
  const {
    //categories
    fetchCategories,
    fetchCategoriesInProgress,
    fetchCategoriesError,
    categories,
    //skills
    fetchSkills,
    fetchSkillsInProgress,
    fetchSkillsError,
    skills,
  } = mentorStore;
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
    fetchSkills(id);
  };

  return (
    <FinalForm
      onSubmit={(values: any) =>
        console.log("categories skills submit", values)
      }
      validate={(values: any) => {
        const errors: ValidationErrors = [];
        const { skills } = values;

        if (!skills) {
          errors.categories = "Izaberite kategoriju.";
        }

        return errors;
      }}
      render={({ handleSubmit, valid, submitting, form }) => (
        <Form onSubmit={handleSubmit}>
          {fetchCategoriesInProgress ? (
            <Loader active />
          ) : fetchCategoriesError ? (
            <div className="categories-skills-form__error">
              {fetchCategoriesError}
            </div>
          ) : (
            <div className="categories-skills-form__column">
              {categories.map((c) => (
                <FieldRadioButton
                  key={c.id}
                  label={c.name}
                  name="categories"
                  value={c.id}
                  onChange={() => {
                    form.reset({ categories: c.id });
                    handleCategoryChange(c.id);
                  }}
                  validate={required("Category is required.")}
                />
              ))}
            </div>
          )}
          {selectedCategory ? (
            fetchSkillsInProgress ? (
              <Loader active />
            ) : fetchSkillsError ? (
              <div className="categories-skills-form__error">
                {fetchSkillsError}
              </div>
            ) : (
              <div className="categories-skills-form__column">
                {skills.map((s) => (
                  <FieldCheckbox
                    key={s.id}
                    name="skills"
                    label={s.name}
                    value={s.id}
                    validate={required("Skill is required.")}
                  />
                ))}
              </div>
            )
          ) : null}
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
