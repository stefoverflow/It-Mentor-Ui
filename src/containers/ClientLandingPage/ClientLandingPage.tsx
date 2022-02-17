import React from 'react';
import { Icon } from 'semantic-ui-react';

import ClientVideoPlacehoderImage from '../../assets/client-video-placeholder.png';
import ClientHappyImage from '../../assets/client-happy.png';
import ClientSmartImage from '../../assets/client-smart.png';
import ClientStydyImage from '../../assets/client-study.png';
import ClientCodingImage from '../../assets/client-coding.png';
import ClientCryImage from '../../assets/client-cry.png';
import ClientProofImage from '../../assets/client-proof.png';
import ClientMainContentVideoPlaceholderImage from '../../assets/main-content-video-placeholder.png';
import ClientMainContentElonMuskImage from '../../assets/elon-musk-dont-give-a.png';

import './ClientLandingPage.scss';
import PlayButton from '../../components/PlayButton/PlayButton';
import { Link } from 'react-router-dom';

interface ClientLandingPageType {};

const ClientLandingPage: React.FC<ClientLandingPageType> = () => {

    return <div>
        <div className="landing-client__image-container">
            <img className="landing-client__image-container__image" src={ClientVideoPlacehoderImage} />
            <div className="landing-client__image-container__gradient" />
            <div className="landing-client__image-container__content">
                <div className="landing-client__image-container__content__title">
                    Korak do četvorocifrene plate, spreman ?
                </div>
                <div className="landing-client__image-container__content__description">
                    Umesto da potrošiš najmanje 4000e samo na školarinu, minimum 4 godina svog života 
                    i bezbroj živaca, može i ovako : 
                </div>
            </div>
            <PlayButton />
        </div>
        <div className="landing-client__main-section">
            <div className="landing-client__main-section__happy-section">
                <img className="landing-client__main-section__happy-section__image" src={ClientHappyImage} />
                <div className="landing-client__main-section__happy-section__description">
                „Ako bi me neko pitao 
                da li sad treba da upišeš fakultet, neki kurs 
                ili da gledaš nešto preko interneta sam, ja bih rekao evo ti četvrto, 
                nađi mentora, neko s’ kim ćeš da radiš i to ti je to, najbolja stvar.”
                </div>
            </div>
            <div className="landing-client__main-section__video-container">
                <img className="landing-client__main-section__video-container__video" src={ClientMainContentVideoPlaceholderImage} />
                <PlayButton />
            </div>
            <div className="landing-client__main-section__dissatisfied-title">
                Nezadovoljan si trenutnim 
                novčanim stanjem 
                a znaš da vrediš više?
            </div>
            <div className="landing-client__main-section__dissatisfied-description">
                Preuzmi inicijativu i ukloni brigu o parama, proputuj svet, poveži se sa ljudima i pokreni sopstveni biznis uz pomoć novca koji ćeš zaraditi u IT sektoru.
            </div>
            <div className="landing-client__main-section__elon-musk-image-container">
                <img className="landing-client__main-section__elon-musk-image-container__image" src={ClientMainContentElonMuskImage} />
            </div>
            <div className="landing-client__main-section__invest-section">
                <div className="landing-client__main-section__invest-section__text">
                    <div className="landing-client__main-section__invest-section__text__title">
                        Investiraj u znanje 
                        a ne u parče papira !
                    </div>
                    <div className="landing-client__main-section__invest-section__text__description">
                        Super je fakultet, lepo je imati diplomu 
                        ali diploma ti ne garantuje zaradu. 
                        Praktičnije i odmah primenjlive veštine možeš 
                        steći i za 6 meseci, onako kako se danas radi, 
                        sa najmodernijim tehnologijama.
                        Učenje zastarelih tehnologija od ljudi koji su 
                        teoretičari je kao da danas narezuješ sve na disk. 
                        Nemoj da budeš CD.
                    </div>
                </div>
                <div className="landing-client__main-section__invest-section__image-container">
                    <img className="landing-client__main-section__invest-section__image-container__image" src={ClientSmartImage} />
                    <div className="landing-client__main-section__invest-section__image-container__gradient" />
                </div>
            </div>
            <div className="landing-client__main-section__invest-section">
                <div className="landing-client__main-section__invest-section__image-container">
                    <img className="landing-client__main-section__invest-section__image-container__image" src={ClientStydyImage} />
                    <div className="landing-client__main-section__invest-section__image-container__gradient" />
                </div>
                <div className="landing-client__main-section__invest-section__text">
                    <div className="landing-client__main-section__invest-section__text__title">
                        Možeš sam do prvog 
                        posla neformalnim 
                        učenjem 
                    </div>
                    <div className="landing-client__main-section__invest-section__text__description">
                        Sada verovatno razmišljaš o samostalnom učenju? I taj proces podrazumeva puno vremena, ali taj pristup možemo da ubrzamo, evo kako:
                    </div>
                </div>
            </div>
            <div className="landing-client__main-section__part-text">
                Samo deo onoga što mentorstvo podrazumeva:
            </div>
            <div className="landing-client__main-section__qa-section">
                <div className="landing-client__main-section__qa-section__qa">
                    <div>
                        <div>
                            Odgovori na pitanja
                        </div>
                        <div>
                            - Sve što ti ne bude jasno možeš da pitaš mentora.
                        </div>
                    </div>
                    <div>
                        <div>
                            Dobićeš sve informacije koje su ti potrebne za rad kod kuće.
                        </div>
                    </div>
                    <div>
                        <div>
                            Praktičan rad kroz projekat
                        </div>
                        <div>
                            – iskoristićeš ga kasnije u svom cv-ju kao referencu.
                        </div>
                    </div>
                    <div>
                        <div>
                            Praćenje domaćih zadataka 
                        </div>
                        <div>
                            – Ako se zbuniš, pogrešiš, naiđeš na prepreku, mentor će biti tu da pomogne. 
                        </div>
                    </div>
                </div>
                <div className="landing-client__main-section__qa-section__image-container">
                    <img className="landing-client__main-section__qa-section__image-container__image" src={ClientCodingImage} />
                </div>
            </div>
            <div className="landing-client__main-section__begining">
                <div className="landing-client__main-section__begining__text">
                    <div className="landing-client__main-section__begining__text__title">
                        Počeo sam sa istim problemom kao ti
                    </div>
                    <div className="landing-client__main-section__begining__text__description">
                        Uzeo sam diplomu FON-a, mislio sam da sam uzeo i znanje, ali ovo je bio moj rezultat na četvrtoj godini fakulteta…
                    </div>
                </div>
            </div>
            <div className="landing-client__main-section__proof">
                <div className="landing-client__main-section__proof__text">
                    <div className="landing-client__main-section__proof__text__title">
                        100 konkursa, 100 odbijenih poziva
                    </div>
                    <div className="landing-client__main-section__proof__text__description">
                        Tek kada sam prebacio fokus sa diplome na sticanje praktičnih veština, tada sam dobio rezultate. Možeš ići mojim putem ili izbeći moje greške i krenuti ka susret uspehu. Ovo je ponuda koju sam skoro dobio nakon 4 meseci radnog iskustva:
                    </div>
                    <div className="landing-client__main-section__proof__text__image-container">
                        <img src={ClientProofImage} className="landing-client__main-section__proof__text__image-container__image"/>
                    </div>
                </div>
                <div className="landing-client__main-section__proof__image-container">
                    <div className="landing-client__main-section__proof__image-container__gradient" />
                    <img src={ClientCryImage} className="landing-client__main-section__proof__image-container__image" />
                </div>
            </div>
        </div>
        <div className="landing-client__menu-button">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12H6V10H18V12ZM18 7H0V5H18V7ZM18 2H6V0H18V2Z" fill="white"/>
            </svg>
        </div>
        <Link to="/client-contact" className="landing-client__consult">
            Zakaži Konsultaciju
        </Link>
    </div>
};

export default ClientLandingPage;