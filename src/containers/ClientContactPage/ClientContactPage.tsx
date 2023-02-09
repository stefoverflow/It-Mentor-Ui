import React, { useState } from "react";
import { Form as FinalForm } from "react-final-form";
import { Icon, Loader } from "semantic-ui-react";
import FieldSelectInput from "../../components/FieldSelectInput/FieldSelectInput";
import FieldTextInput from "../../components/FieldTextInput/FieldTextInput";

import "./ClientContactPage.scss";
import {
  composeValidators,
  emailFormatValid,
  required,
} from "../../util/validators";
import agent from "../../api/agent";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import useMobile from "../../hooks/useMobile";

interface ClientContactPageType {}

const ClientContactPage: React.FC<ClientContactPageType> = () => {
  const { isMobile } = useMobile();

  return (
    <div className="mentors-contact">
      {!isMobile ? (
        <div className="landing__header__logo">
          <Logo />
        </div>
      ) : null}
      <div className="mentors-contact__content">
        {isMobile ? <Logo /> : null}
        <div className="clients-contact__info">Pozovi da zakažeš konsultaciju na +381-60-6250-232 ili pošalji mail na stefantosic.dev@gmail.com</div>
        <br />
        <div>
          <Link to="/" className="mentors-contact__content_back">Natrag na početnu</Link>
        </div>
      </div>
    </div>
  );

  // const history = useHistory();
  // const[submitText, setSubmitText] = useState('Pošalji svoje podatke, kontaktiraćemo te ubrzo.');

  // const renderSubmitButton = (valid: boolean, submitting: boolean, submitSucceeded:boolean) => (
  //   <div className="client-contact__row__column__description">
  //     <div className="client-contact__row__column__description__text">
  //       {submitText}
  //     </div>
  //     <button
  //       className="client-contact__row__column__description__button"
  //       type="submit"
  //     >
  //       <Loading 
  //       submitting={submitting} 
  //       submitSucceeded={submitSucceeded} 
  //       buttonText={"Pošalji"}          
  //       />
  //     </button>
  //   </div>
  // );

  // const registerClient = async (values: any) => {
  //   try {
  //     debugger
  //     await agent.Mentors.registerClient(values); 
  //     // history.push("/mentors");
  //   } catch (e: any) {
  //     console.log(e);
  //   }
  // };
  // return (
  //   <div className="client-contact">
  //     <FinalForm
  //       onSubmit={(values) => registerClient(values)}
  //       render={({ handleSubmit, valid, submitting, submitSucceeded }) => (
  //         <form onSubmit={handleSubmit} className="client-contact__row">
  //           <div className="client-contact__row__column">
  //             <FieldTextInput
  //               label="Unesi svoje podatke."
  //               placeholder="Ime i prezime"
  //               name="FirstAndLastName"
  //               validate={required("Obavezno polje")}
  //             />
  //             <FieldTextInput
  //               placeholder="Broj telefona"
  //               name="PhoneNumber"
  //               validate={required("Obavezno polje")}
  //             />
  //             <FieldTextInput
  //               placeholder="Email"
  //               name="Email"
  //               validate={composeValidators(
  //                 required("Obavezno polje"),
  //                 emailFormatValid("Neispravan email")
  //               )}
  //             />
  //             <div className="client-contact__row__column__submit-desktop">
  //               {renderSubmitButton(valid, submitting, submitSucceeded)}
  //             </div>
  //           </div>
  //           <div className="client-contact__row__column">
  //             <FieldSelectInput
  //               label="Ukupni budžet koji bih izdvojio zamentorstvo:"
  //               name="TotalBudget"
  //               options={[
  //                 {
  //                   key: "Manje od 750e",
  //                   text: "Manje od 750e",
  //                 },
  //                 {
  //                   key: "Između 750e i 1500e",
  //                   text: "Između 750e i 1500e",
  //                 },
  //                 {
  //                   key: "Više od 1500e",
  //                   text: "Više od 1500e",
  //                 },
  //               ]}
  //             />
  //             <FieldSelectInput
  //               label="Hteo bih da se obučim za:"
  //               name="FieldOfInterest"
  //               options={[
  //                 {
  //                   key: "Web programiranje",
  //                   text: "Web programiranje",
  //                 },
  //                 {
  //                   key: "data-science",
  //                   text: "Data science",
  //                 },
  //                 {
  //                   key: "Mobile development",
  //                   text: "Mobile development",
  //                 },
  //                 {
  //                   key: "QA testiranje",
  //                   text: "QA testiranje",
  //                 },
  //                 {
  //                   key: "Blockchain Development",
  //                   text: "Blockchain Development",
  //                 },
  //                 {
  //                   key: "Drugo",
  //                   text: "Drugo",
  //                 },
  //               ]}
  //             />
  //             <FieldSelectInput
  //               label="Poznavanje Engleskog jezika:"
  //               name="EnglishLevel"
  //               options={[
  //                 {
  //                   key: "Početni nivo",
  //                   text: "Početni nivo",
  //                 },
  //                 {
  //                   key: "Srednji nivo",
  //                   text: "Srednji nivo",
  //                 },
  //                 {
  //                   key: "Napredni nivo",
  //                   text: "Napredni nivo",
  //                 },
  //               ]}
  //             />
  //             <FieldSelectInput
  //               label="Mesečna plata koju očekuješ u narednih godinu dana?"
  //               name="ExpectedSalary"
  //               options={[
  //                 {
  //                   key: "Manje od 750e",
  //                   text: "Manje od 750e",
  //                 },
  //                 {
  //                   key: "Izmedju 750e i 1500e",
  //                   text: "Izmedju 750e i 1500e",
  //                 },
  //                 {
  //                   key: "Preko 1500e",
  //                   text: "Preko 1500e",
  //                 },
  //               ]}
  //             />
  //           </div>
  //         </form>
  //       )}
  //     />
  //     <Menu />
  //   </div>
  // );
};

export default ClientContactPage;
