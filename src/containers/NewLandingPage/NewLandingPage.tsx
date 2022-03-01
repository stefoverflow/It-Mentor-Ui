import React from "react";
import { Link } from "react-router-dom";
import GraphicWorkImage from '../../assets/graphic-work.png';
import MenuButton from "../../components/MenuButton/MenuButton";

import './NewLandingPage.scss';

interface NewLandingPageType {
};

const NewLandingPage: React.FC<NewLandingPageType> = () => {
    const LandingVideo = require('../../assets/video.mp4');

    return <div className="landing">
        <video autoPlay muted loop className="landing__video">
            <source src={LandingVideo} type="video/mp4"/>
        </video>

        <div className="landing__gradient" />

        <div className="landing__content">
            <div className="landing__content__title">
                Do prvog posla sa ličnim IT mentorom.
            </div>
            <div className="landing__content__description">
                Pomažemo početnicima, ljudima koji žele da promene karijeru, onima koji su već zavrsili neki kurs ili fakultet a nemaju rezultate da dođu do prvog visoko plaćenog posla u IT sektoru za manje od 6 meseci.
            </div>
            <div className="landing__content__client-container">
                <div>Do prvog posla</div>
                <Link to="/client-landing" className="landing__content__client-container__start-button">
                    Start
                </Link>
                <div className="landing__content__client-container__image-container">
                    <img className="landing__content__client-container__image-container__image" src={GraphicWorkImage} />
                </div>
                <div className="landing__content__client-container__got-account">
                    <div className="landing__content__client-container__got-account__text">Već imate nalog?</div>
                    <Link to='/login' className="landing__content__client-container__got-account__login-link">
                        Ulogujte se
                    </Link>
                </div>
            </div>
            <Link to='/register' className="landing__become-mentor">
                Postani mentor
            </Link>
        </div>

    </div>
};

export default NewLandingPage;