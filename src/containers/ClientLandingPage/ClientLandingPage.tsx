import React from 'react';
import { Icon } from 'semantic-ui-react';

import ClientVideoPlacehoderImage from '../../assets/client-video-placeholder.png';

import './ClientLandingPage.scss';

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
            <button className="landing-client__image-container__play-button">
                <Icon inverted name="play" color='grey' />
            </button>
        </div>
    </div>
};

export default ClientLandingPage;