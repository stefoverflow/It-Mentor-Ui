import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GraphicWorkImage from "../../assets/graphic-work.svg";
import LandingImage from "../../assets/home-page-cover.png";
import LandingMobileImage from "../../assets/home-page-cover-mobile.png";
// import Menu from "../../components/Menu/Menu";
import { MAX_MOBILE_SCREEN_WIDTH } from "../../constants";

import "./HomePage.scss";
import useMobile from "../../hooks/useMobile";
import Logo from "../../components/Logo/Logo";
import { useStore } from "../../stores/store";

interface NewLandingPageType {}

const HomePage: React.FC<NewLandingPageType> = () => {
  const { isMobile } = useMobile();

  return (
    <div className="landing">
      <div className="landing__header">
        {!isMobile ? (
          <div className="landing__header__logo">
            <Logo />
          </div>
        ) : null}
        <Link to="/mentors-contact" className="landing__header__become-mentor">
          Postani mentor
        </Link>
        <div className="landing__header__logo"></div>
      </div>
      <div className="landing__img">
        <img src={isMobile ? LandingMobileImage : LandingImage} />
      </div>
      {/* <video autoPlay muted loop className="landing__video">
            <source src={LandingVideo} type="video/mp4"/>
        </video> */}

      <div className="landing__content">
        {isMobile ? <Logo /> : null}
        <div className="landing__content__title">
          Do zaposlenja {isMobile ? <br /> : null}sa ličnim IT mentorom
        </div>
        <div className="landing__content__description">
          Pomažemo ti da dođeš do prvog visoko plaćenog posla u sektoru {!isMobile && <br />}
          informacionih {isMobile && <br />}tehnologija za manje od 6 meseci
        </div>
        <div className="landing__content__client-container">
          <div>Kreni ka cilju</div>
          <Link
            to="/client-landing"
            className="landing__content__client-container__image-container__start-button"
          >
            Start
          </Link>
          <div className="landing__content__client-container__image-container">
            <img
              className="landing__content__client-container__image-container__image"
              src={GraphicWorkImage}
            />
          </div>
          <div className="landing__content__client-container__got-account">
            <div className="landing__content__client-container__image-container__got-account__text">
              Već imaš nalog?
            </div>
              <Link
                to="/login"
                className="landing__content__client-container__image-container__got-account__login-link"
              >
                Uloguj se
              </Link>
          </div>
        </div>
        {isMobile ? (
          <Link
            to="/mentors-contact"
            className="landing__content__become-mentor"
          >
            Postani mentor
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
