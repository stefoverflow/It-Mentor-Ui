import React from 'react';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import { Button, Dimmer, Loader } from 'semantic-ui-react';
import FieldSelectInput from '../../components/FieldSelectInput/FieldSelectInput';
import FieldTextInput from '../../components/FieldTextInput/FieldTextInput';

import './ClientContactPage.scss';
import { composeValidators, emailFormatValid, required } from '../../util/validators';
import agent from '../../api/agent';
import { Redirect, useHistory } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

interface ClientContactPageType {};

const ClientContactPage: React.FC<ClientContactPageType> = () => {
    const history = useHistory();
    
    const renderSubmitButton = (valid: boolean, submitting: boolean) => (
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
                    'Zakaži konsultaciju'
                }
            </button>
        </div>
    )

    const submit = async (values: any) => {
        try {
            await agent.Mentors.registerClient(values);
            history.push('/mentors');
        } catch(e) {
            // error handling
        }
    }
    return <div className="client-contact">
        <div>
        <FinalForm
          onSubmit={submit}
          render={({ handleSubmit, valid, values, submitting }) => (
            <form onSubmit={handleSubmit} className="client-contact__row">
                <div className="client-contact__row__column">
                    <FieldTextInput
                        label="Unesi svoje podatke."
                        placeholder="Ime i prezime"
                        name="FirstAndLastName"
                        validate={required('treba stil i tekst')}
                    />
                    <FieldTextInput
                        placeholder="Broj telefona"
                        name="PhoneNumber"
                        validate={required('treba stil i tekst')}
                    />
                    <FieldTextInput
                        placeholder="Email"
                        name="Email"
                        validate={composeValidators(required('treba stil i tekst'), emailFormatValid('email los tekst neki'))}
                    />
                    <div className="client-contact__row__column__submit-desktop">
                        {renderSubmitButton(valid, submitting)}
                    </div>
                </div>
                <div className="client-contact__row__column">
                    <FieldSelectInput
                        label="Ukupni budžet koji bih izdvojio zamentorstvo:"
                        name="TotalBudget"
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
                        label="Poznavanje Engleskog jezika:"
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
                                key: 'Manje od 750e',
                                text: 'Manje od 750e',
                            },
                            {
                                key: 'Izmedju 750e i 1500e',
                                text: 'Izmedju 750e i 1500e',
                            },
                            {
                                key: 'Preko 1500e',
                                text: 'Preko 1500e',
                            }
                        ]}
                    />
                </div>
                <div className="client-contact__row__column__submit-mobile">
                    {renderSubmitButton(valid, submitting)}
                </div>
              </form>
            )
          }
        />
        <Menu />
        </div>
    </div>   
};

export default ClientContactPage;