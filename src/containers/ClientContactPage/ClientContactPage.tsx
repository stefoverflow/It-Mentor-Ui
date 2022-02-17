import React from 'react';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import { Button, Dimmer, Loader } from 'semantic-ui-react';
import FieldSelectInput from '../../components/FieldSelectInput/FieldSelectInput';
import FieldTextInput from '../../components/FieldTextInput/FieldTextInput';

import './ClientContactPage.scss';
import { required } from '../../util/validators';

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
                        name="FirstName"
                        validate={required('treba stil i tekst')}
                    />
                    <FieldTextInput
                        placeholder="Prezime"
                        name="LastName"
                        validate={required('treba stil i tekst')}
                    />
                    <FieldTextInput
                        placeholder="Email"
                        name="Email"
                        validate={required('treba stil i tekst')}
                    />
                    <div className="client-contact__row__column__description">
                        <div className="client-contact__row__column__description__text">
                            Neki tekst tipa finalizujte kreiranje svog profila 
                            verifikacionim pozivom bla bla 
                        </div>
                        <button className={classNames("client-contact__row__column__description__button", [{'client-contact__row__column__description__button-disabled': !valid}])} type="submit">
                            {
                                submitting ?
                                <Loader active inverted size="big"/>
                                :
                                'Stefke Hotline'
                            }
                        </button>
                    </div>
                </div>
                <div className="client-contact__row__column">
                    <FieldSelectInput
                        label="Ukupni budžet koji bih izdvojio zamentorstvo:"
                        name="TotalBudget"
                        validate={required('treba stil i tekst')}
                        options={[
                            {
                                key: 'Manje od 500e',
                                text: 'Manje od 500e',
                            },
                            {
                                key: 'Manje od 750e',
                                text: 'Manje od 750e',
                            },
                            {
                                key: 'Manje od 1000e',
                                text: 'Manje od 1000e',
                            },
                            {
                                key: 'Preko 1000e',
                                text: 'Preko 1000e',
                            }
                        ]}
                    />
                    <FieldSelectInput
                        label="Hteo bih da se obučim za:"
                        name="FieldOfInterest"
                        validate={required('treba stil i tekst')}
                        options={[
                            {
                                key: 'Web programiranje',
                                text: 'Web programiranje',
                            },
                            {
                                key: 'data-science',
                                text: 'Data science',
                            },
                            {
                                key: 'Mobile development',
                                text: 'Mobile development'
                            },
                            {
                                key: 'QA testiranje',
                                text: 'QA testiranje',
                            },
                            {
                                key: 'Blockchain Development',
                                text: 'Blockchain Development',
                            },
                            {
                                key: 'Drugo',
                                text: 'Drugo',
                            }
                        ]}
                    />
                    <FieldSelectInput
                        label="Poznavanje Engleskog jezika"
                        name="EnglishLevel"
                        validate={required('treba stil i tekst')}
                        options={[
                            {
                                key: 'Početni nivo',
                                text: 'Početni nivo',
                            },
                            {
                                key: 'Srednji nivo',
                                text: 'Srednji nivo',
                            },
                            {
                                key: 'Napredni nivo',
                                text: 'Napredni nivo',
                            }
                        ]}
                    />
                    <FieldSelectInput
                        label="Mesečna plata koju očekuješ u narednih godinu dana?"
                        name="ExpectedSalary"
                        validate={required('treba stil i tekst')}
                        options={[
                            {
                                key: 'Manje od 1000e',
                                text: 'Manje od 1000e'
                            },
                            {
                                key: 'Između 1000e i 3000e',
                                text: 'Između 3000e i 5000e',
                            },
                            {
                                key: 'Više od 5000e',
                                text: 'Više od 5000e',
                            }
                        ]}
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