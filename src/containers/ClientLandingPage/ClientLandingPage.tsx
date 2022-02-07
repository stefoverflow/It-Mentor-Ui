import React from 'react';
import { Icon } from 'semantic-ui-react';

import ClientVideoPlacehoderImage from '../../assets/client-video-placeholder.png';
import ClientHappyImage from '../../assets/client-happy.png';
import ClientSmartImage from '../../assets/client-smart.png';
import ClientStydyImage from '../../assets/client-study.png';
import ClientMainContentVideoPlaceholderImage from '../../assets/main-content-video-placeholder.png';
import ClientMainContentElonMuskImage from '../../assets/elon-musk-dont-give-a.png';

import './ClientLandingPage.scss';
import PlayButton from '../../components/PlayButton/PlayButton';

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
        </div>
    </div>
};

export default ClientLandingPage;