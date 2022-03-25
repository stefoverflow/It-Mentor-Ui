import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GraphicWorkImage from '../../assets/graphic-work.svg';
import LandingImage from '../../assets/home-page-cover.png';
import LandingMobileImage from '../../assets/home-page-cover-mobile.png';
// import Menu from "../../components/Menu/Menu";
import { MAX_MOBILE_SCREEN_WIDTH } from "../../constants";

import './HomePage.scss';
import useMobile from "../../hooks/useMobile";
import Logo from '../../components/Logo/Logo';

interface NewLandingPageType {
};

const NewLandingPage: React.FC<NewLandingPageType> = () => {
    const { isMobile } = useMobile();

    return <div className="landing">
        <div className="landing__header">
            <Link to='/register' className="landing__header__become-mentor">
                Postani mentor
            </Link>
            <div className="landing__header__logo">
                <Logo/>
            </div>
        </div>
        <div className="landing__img">
            <img src={isMobile ? LandingMobileImage : LandingImage}/>
        </div>
        {/* <video autoPlay muted loop className="landing__video">
            <source src={LandingVideo} type="video/mp4"/>
        </video> */}

        <div className="landing__content">
            <div className="landing__content__title">
                Do prvog posla {isMobile? <br/>:null}sa ličnim IT mentorom.
            </div>
            <div className="landing__content__description">
                Pomažemo početnicima, ljudima koji žele {isMobile? <br/>:null}da promene karijeru, onima koji su već {isMobile? <br/>:null}završili neki kurs ili fakultet a nemaju {isMobile? <br/>:null}rezultate da dođu do prvog visoko {isMobile? <br/>:null}plaćenog posla u IT sektoru {isMobile? <br/>:null}za manje od 6 meseci.
            </div>
            <div className="landing__content__client-container">
                <div>Do prvog posla</div>
                <Link to="/client-landing" className="landing__content__client-container__image-container__start-button">
                    Start
                </Link>
                <div className="landing__content__client-container__image-container">
                    <img className="landing__content__client-container__image-container__image" src={GraphicWorkImage} />
                </div>
                <div className="landing__content__client-container__got-account">
                    <div className="landing__content__client-container__image-container__got-account__text">Već imate nalog?</div>
                    <Link to='/login' className="landing__content__client-container__image-container__got-account__login-link">
                        Ulogujte se
                    </Link>
                </div>
            </div>
            <Link to='/register' className="landing__content__become-mentor">
                Postani mentor
            </Link>
            {/* <Menu /> */}
        </div>

    </div>
};

export default NewLandingPage;