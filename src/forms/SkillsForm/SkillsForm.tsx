import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Form as FinalForm } from "react-final-form";
import { Header, Form, Container, Button, Dimmer, Loader } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import "./SkillsForm.scss";

export default observer(function SkillsForm() {
  const {
    skillStore: {
      getSkillsForSelectedCategory,
      skillsForSelectedCategory,
      getSkillsLoading,
    },
  } = useStore();

  useEffect(() => {
    debugger;
    getSkillsForSelectedCategory("73ab1482-8aeb-4d97-ae7e-faf8784edb72");
  }, [skillsForSelectedCategory]);

  return getSkillsLoading ? (
    <Dimmer active inverted>
      <Loader inverted>Učitavanje veština...</Loader>
    </Dimmer>
  ) : (
    <Container textAlign="center" className="skills-form">
      <div className="skills-form__form">
        <FinalForm
          onSubmit={() => console.log("")}
          render={({ handleSubmit, valid, values, submitting }) => (
            <form onSubmit={() => console.log("ssd")}>
              <Header as="h1">
                Odaberi veštine koje poseduješ
              </Header>
              {skillsForSelectedCategory?.map((skill) => (
                <Button toggle>{skill.name}</Button>
              ))}
            </form>
          )}
        />
      </div>
    </Container>
  );
});
