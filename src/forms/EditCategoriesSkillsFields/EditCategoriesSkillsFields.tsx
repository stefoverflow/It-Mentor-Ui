import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ValidationErrors } from "final-form";
import { Loader } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import { required } from "../../util/validators";
import FieldCheckbox from "../../components/FieldCheckbox/FieldCheckbox";
import FieldRadioButton from "../../components/FieldRadioButton/FieldRadioButton";

type CategoriesSkillsFieldsProps = {
  form: any;
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
}) => {
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
