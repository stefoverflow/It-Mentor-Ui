import React from "react";
import { observer } from "mobx-react-lite";
import { ValidationErrors } from "final-form";
import { Loader } from "semantic-ui-react";
import { required } from "../../util/validators";
import FieldCheckbox from "../../components/FieldCheckbox/FieldCheckbox";
import FieldRadioButton from "../../components/FieldRadioButton/FieldRadioButton";
import { Skill } from "../../models/skill";
import { Category } from "../../models/category";

type CategoriesSkillsFieldsProps = {
  form: any;
  values: any;
  fetchCategoriesInProgress: boolean;
  fetchCategoriesError: string;
  categories: Category[];
  fetchSkillsInProgress: boolean;
  fetchSkillsError: string;
  skills: Skill[];
  handleCategoryChange: any;
  selectedCategory: string;
  disableCategorySelection?: boolean;
};

export const CategoriesSkillsFieldsValidation = (values: any) => {
  const errors: ValidationErrors = [];
  const { skills } = values;

  if (!skills) {
    errors.categories = "Izaberite kategoriju.";
  }

  return errors;
};

const CategoriesSkillsFields: React.FC<CategoriesSkillsFieldsProps> = ({
  form,
  values,
  fetchCategoriesInProgress,
  fetchCategoriesError,
  categories,
  fetchSkillsInProgress,
  fetchSkillsError,
  skills,
  handleCategoryChange,
  selectedCategory,
  disableCategorySelection = false,
}) => {
  return (
    <div>
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
              disabled={disableCategorySelection}
              onChange={() => {
                form.change("categories", c.id);
                form.change("skills", null);
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
    </div>
  );
};

export default observer(CategoriesSkillsFields);
