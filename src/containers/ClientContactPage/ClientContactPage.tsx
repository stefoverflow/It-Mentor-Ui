import React from "react";
import { Form as FinalForm } from "react-final-form";
import { Loader } from "semantic-ui-react";
import FieldSelectInput from "../../components/FieldSelectInput/FieldSelectInput";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";

import "./ClientContactPage.scss";
import {
  composeValidators,
  emailFormatValid,
  required,
} from "../../util/validators";
import agent from "../../api/agent";
import { useHistory } from "react-router-dom";
import Menu from "../../components/Menu/Menu";

interface ClientContactPageType {}

const ClientContactPage: React.FC<ClientContactPageType> = () => {
  const history = useHistory();

  const renderSubmitButton = (valid: boolean, submitting: boolean) => (
    <div className="client-contact__row__column__description">
      <div className="client-contact__row__column__description__text">
        Pošalji svoje podatke, kontaktiraćemo te ubrzo.
      </div>
      <button
        className="client-contact__row__column__description__button"
        type="submit"
      >
        {submitting ? <Loader active inverted size="big" /> : "Pošalji"}
      </button>
    </div>
  );

  const registerClient = async (values: any) => {
    try {
      await agent.Mentors.registerClient(values); 
      history.push("/mentors");
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <div className="client-contact">
      {/* <FinalForm
        onSubmit={(values) => {
          console.log(values);
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field 
                name="name"
                render={({input})=>(
                    <input {...input} type="text" />
                )}>
            </Field>
            <button type="submit">Pošalji</button>
          </form>
        )}
      ></FinalForm> */}
      <FinalForm
        onSubmit={(values) => registerClient(values)}
        render={({ handleSubmit, valid, submitting }) => (
          <form onSubmit={handleSubmit} className="client-contact__row">
            <div className="client-contact__row__column">
              <FieldTextInput
                label="Unesi svoje podatke."
                placeholder="Ime i prezime"
                name="FirstAndLastName"
                validate={required("Obavezno polje")}
              />
              <FieldTextInput
                placeholder="Broj telefona"
                name="PhoneNumber"
                validate={required("Obavezno polje")}
              />
              <FieldTextInput
                placeholder="Email"
                name="Email"
                validate={composeValidators(
                  required("Obavezno polje"),
                  emailFormatValid("Neispravan email")
                )}
              />
              <div className="client-contact__row__column__submit-desktop">
                {renderSubmitButton(valid, submitting)}
              </div>
            </div>
            <div className="client-contact__row__column">
              <FieldSelectInput
                label="Ukupni budžet koji bih izdvojio zamentorstvo:"
                name="TotalBudget"
                validate={required("Obavezno polje")}
                options={[
                  {
                    key: "Manje od 1000e",
                    text: "Manje od 1000e",
                  },
                  {
                    key: "Između 1000e i 2000e",
                    text: "Između 1000e i 2000e",
                  },
                  {
                    key: "Više od 2000e",
                    text: "Više od 2000e",
                  },
                ]}
              />
              <FieldSelectInput
                label="Hteo bih da se obučim za:"
                name="FieldOfInterest"
                validate={required("Obavezno polje")}
                options={[
                  {
                    key: "Web programiranje",
                    text: "Web programiranje",
                  },
                  {
                    key: "data-science",
                    text: "Data science",
                  },
                  {
                    key: "Mobile development",
                    text: "Mobile development",
                  },
                  {
                    key: "QA testiranje",
                    text: "QA testiranje",
                  },
                  {
                    key: "Blockchain Development",
                    text: "Blockchain Development",
                  },
                  {
                    key: "Drugo",
                    text: "Drugo",
                  },
                ]}
              />
              <FieldSelectInput
                label="Poznavanje Engleskog jezika:"
                name="EnglishLevel"
                validate={required("Obavezno polje")}
                options={[
                  {
                    key: "Početni nivo",
                    text: "Početni nivo",
                  },
                  {
                    key: "Srednji nivo",
                    text: "Srednji nivo",
                  },
                  {
                    key: "Napredni nivo",
                    text: "Napredni nivo",
                  },
                ]}
              />
              <FieldSelectInput
                label="Mesečna plata koju očekuješ u narednih godinu dana?"
                name="ExpectedSalary"
                validate={required("Obavezno polje")}
                options={[
                  {
                    key: "Manje od 750e",
                    text: "Manje od 750e",
                  },
                  {
                    key: "Izmedju 750e i 1500e",
                    text: "Izmedju 750e i 1500e",
                  },
                  {
                    key: "Preko 1500e",
                    text: "Preko 1500e",
                  },
                ]}
              />
            </div>
          </form>
        )}
      />
      <Menu />
    </div>
  );
};

export default ClientContactPage;
