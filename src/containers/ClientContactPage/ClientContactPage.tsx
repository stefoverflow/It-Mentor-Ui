import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Form } from 'semantic-ui-react';
import FieldTextInput from '../../components/FieldTextInput/FieldTextInput';

import './ClientContactPage.scss';

interface ClientContactPageType {};

const ClientContactPage: React.FC<ClientContactPageType> = () => {
    return <div className="client-contact">
        <div>
        <FinalForm
          onSubmit={(values: any) => console.log('submit', values)}
          render={({ handleSubmit, valid, values, submitting }) => (
            <form onSubmit={handleSubmit} className="client-contact__row">
                <div className="client-contact__row__column">
                    <FieldTextInput
                            label="Unesi svoju e-mail adresu."
                        placeholder="Ime"
                        name="name"
                    />
                    <FieldTextInput
                        placeholder="Prezime"
                        name="subname"
                    />
                    <FieldTextInput
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <div className="client-contact__row__column">
                    <FieldTextInput
                            label="Ukupni budžet koji bih izdvojio zamentorstvo:"
                        placeholder="Manje od 1000e"
                        name="budget"
                    />
                    <FieldTextInput
                        label="Hteo bih da se obučim za:"
                        placeholder="Web programiranje"
                        name="category"
                    />
                    <FieldTextInput
                        label="Poznavanje Engleskog jezika"
                        placeholder="Početni nivo"
                        name="language"
                    />
                    <FieldTextInput
                        label="Mesečna plata koju očekuješ u narednih godinu dana?"
                        placeholder="Manje od 750e"
                        name="salary"
                    />
                </div>
              </form>
            )
          }
        />
        <div className="landing-client__menu-button">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12H6V10H18V12ZM18 7H0V5H18V7ZM18 2H6V0H18V2Z" fill="white"/>
            </svg>
        </div>
        </div>
    </div>   
};

export default ClientContactPage;