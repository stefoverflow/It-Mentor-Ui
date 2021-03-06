import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";

import ClientVideoPlacehoderImage from "../../assets/client-video-placeholder.png";
import ClientVideoPlaceholderMobileImage from "../../assets/client-video-placeholder-mobile.png";
import ClientHappyImage from "../../assets/client-happy.png";
import ClientSmartImage from "../../assets/client-smart.png";
import ClientSmartMobileImage from "../../assets/client-smart-mobile.png";
import ClientStydyImage from "../../assets/client-study.png";
import ClientStudyMobileImage from "../../assets/client-study-mobile.png";
import ClientCodingImage from "../../assets/client-coding.png";
import ClientCryImage from "../../assets/client-cry.png";
import ClientCryMobileImage from "../../assets/client-cry-mobile.png";
import ClientProofImage from "../../assets/client-proof.png";
import ClientMainContentVideoPlaceholderImage from "../../assets/main-content-video-placeholder.png";
import ClientMainContentVideoPlaceholderMobileImage from "../../assets/main-content-video-placeholder-mobile.png";
import ClientMainContentElonMuskImage from "../../assets/elon-musk-dont-give-a.png";
import OfficeImage from "../../assets/office.png";
import OfficeImageMobile from "../../assets/office-mobile.png";
import ArrowRightImage from "../../assets/arrow-right.png";

import "./ClientLandingPage.scss";
import PlayButton from "../../components/PlayButton/PlayButton";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import ClientContactButton from "../../components/ClientContactButton/ClientContactButton";
import IconArrowRight from "../../components/IconArrowRight/IconArrowRight";
import Footer from "../../components/Footer/Footer";
import useMobile from "../../hooks/useMobile";
import Image from "../../components/Image/Image";
import Logo from "../../components/Logo/Logo";
import { delay } from "lodash";

interface ClientLandingPageType {}

const ClientLandingPage: React.FC<ClientLandingPageType> = () => {
  const { isMobile } = useMobile();

  useEffect(() => {
    delay(() => {
    debugger
      let logo = document.querySelector('landing-client__logo');

      const toggleLogoColor = function (entries: any) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          logo?.classList.add("__color");
        } else {
          logo?.classList.remove("__color");
        }
      };
      const logoObserver = new IntersectionObserver(toggleLogoColor, {
        root: null,
        threshold: 0,
      });

      logoObserver.observe(logo!);
    }, 1000);
  }, []);

  return (
    <div className="landing-client">
      <div className="landing-client__image-container">
        <img
          className="landing-client__image-container__image"
          src={
            isMobile
              ? ClientVideoPlaceholderMobileImage
              : ClientVideoPlacehoderImage
          }
        />
        <div className="landing-client__image-container__gradient" />
        <div className="landing-client__image-container__content">
          <div className="landing-client__image-container__content__title">
            Korak do ??etvorocifrene plate, spreman ?
          </div>
          <div className="landing-client__image-container__content__description">
            Umesto da potro??i?? najmanje 4000e samo na{!isMobile ? <br /> : null}{" "}
            ??kolarinu, minimum 4 godina svog ??ivota {!isMobile ? <br /> : null}i
            bezbroj ??ivaca, mo??e i ovako :
          </div>
          <ClientContactButton />
        </div>
        {/* <PlayButton /> */}
      </div>
      <div className="landing-client__main-section">
        <div className="landing-client__main-section__happy-section">
          <Image
            className="landing-client__main-section__happy-section__image"
            src={ClientHappyImage}
          />
          <div className="landing-client__main-section__happy-section__description">
            ???Ako bi me neko pitao da li sad treba da upi??e?? fakultet, neki kurs
            ili da gleda?? ne??to preko interneta sam, ja bih rekao evo ti
            ??etvrto, na??i mentora, neko s??? kim ??e?? da radi?? i to ti je to,
            najbolja stvar.???
          </div>
        </div>
        <div className="landing-client__main-section__video-container">
          <img
            className="landing-client__main-section__video-container__video"
            src={
              isMobile
                ? ClientMainContentVideoPlaceholderMobileImage
                : ClientMainContentVideoPlaceholderImage
            }
          />
          <PlayButton />
        </div>
        <div className="landing-client__main-section__dissatisfied-title">
          Nezadovoljan si trenutnim nov??anim stanjem a zna?? da vredi?? vi??e?
        </div>
        <div className="landing-client__main-section__dissatisfied-description">
          Preuzmi inicijativu i ukloni brigu o parama, proputuj svet, pove??i se
          sa ljudima i pokreni sopstveni biznis uz pomo?? novca koji ??e?? zaraditi
          u IT sektoru.
        </div>
        <div className="landing-client__main-section__elon-musk-image-container">
          <img
            className="landing-client__main-section__elon-musk-image-container__image"
            src={ClientMainContentElonMuskImage}
          />
        </div>
        <div className="landing-client__main-section__invest-section">
          <div className="landing-client__main-section__invest-section__text">
            <div className="landing-client__main-section__invest-section__text__title">
              Investiraj u znanje a ne u par??e papira !
            </div>
            <div className="landing-client__main-section__invest-section__text__description">
              Super je fakultet, lepo je imati diplomu ali diploma ti ne
              garantuje zaradu. Prakti??nije i odmah primenjlive ve??tine mo??e??
              ste??i i za 6 meseci, onako kako se danas radi, sa najmodernijim
              tehnologijama. U??enje zastarelih tehnologija od ljudi koji su
              teoreti??ari je kao da danas narezuje?? sve na disk. Nemoj da bude??
              CD.
            </div>
          </div>
          <div className="landing-client__main-section__invest-section__image-container">
            <Image
              className="landing-client__main-section__invest-section__image-container__image"
              src={isMobile ? ClientSmartMobileImage : ClientSmartImage}
            />
            {/* <div className="landing-client__main-section__invest-section__image-container__gradient" /> */}
          </div>
        </div>
        <div className="landing-client__main-section__invest-section">
          <div className="landing-client__main-section__invest-section__image-container">
            <Image
              className="landing-client__main-section__invest-section__image-container__image"
              src={isMobile ? ClientStudyMobileImage : ClientStydyImage}
            />
            {/* <div className="landing-client__main-section__invest-section__image-container__gradient" /> */}
          </div>
          <div className="landing-client__main-section__invest-section__text">
            <div className="landing-client__main-section__invest-section__text__title">
              Mo??e?? sam do prvog posla neformalnim u??enjem
            </div>
            <div className="landing-client__main-section__invest-section__text__description">
              Sada verovatno razmi??lja?? o samostalnom u??enju? I taj proces
              podrazumeva puno vremena, ali taj pristup mo??emo da ubrzamo, evo
              kako:
            </div>
          </div>
        </div>
        <div className="landing-client__main-section__part-text">
          Samo deo onoga ??to mentorstvo podrazumeva:
        </div>
        <div className="landing-client__main-section__qa-section">
          <div className="landing-client__main-section__qa-section__qa">
            <div>
              <div>Odgovori na pitanja</div>
              <div>- Sve ??to ti ne bude jasno mo??e?? da pita?? mentora.</div>
            </div>
            <div>
              <div>
                Dobi??e?? sve informacije koje su ti potrebne za rad kod ku??e.
              </div>
            </div>
            <div>
              <div>Prakti??an rad kroz projekat</div>
              <div>??? iskoristi??e?? ga kasnije u svom cv-ju kao referencu.</div>
            </div>
            <div>
              <div>Pra??enje doma??ih zadataka</div>
              <div>
                ??? Ako se zbuni??, pogre??i??, nai??e?? na prepreku, mentor ??e biti tu
                da pomogne.
              </div>
            </div>
          </div>
          <div className="landing-client__main-section__qa-section__image-container">
            <img
              className="landing-client__main-section__qa-section__image-container__image"
              src={ClientCodingImage}
            />
          </div>
        </div>
        <div className="landing-client__main-section__begining">
          <div className="landing-client__main-section__begining__text">
            <div className="landing-client__main-section__begining__text__title">
              Po??eo sam sa istim problemom kao ti
            </div>
            <div className="landing-client__main-section__begining__text__description">
              Uzeo sam diplomu FON-a, mislio sam da sam uzeo i znanje, ali ovo
              je bio moj rezultat na ??etvrtoj godini fakulteta???
            </div>
          </div>
        </div>
        <div className="landing-client__main-section__proof">
          <div className="landing-client__main-section__proof__text">
            <div className="landing-client__main-section__proof__text__title">
              100 konkursa, 100 odbijenih poziva
            </div>
            <div className="landing-client__main-section__proof__text__description">
              Tek kada sam prebacio fokus sa diplome na sticanje prakti??nih
              ve??tina, tada sam dobio rezultate. Mo??e?? i??i mojim putem ili
              izbe??i moje gre??ke i krenuti ka susret uspehu. Ovo je ponuda koju
              sam skoro dobio nakon 4 meseci radnog iskustva:
            </div>
            <div className="landing-client__main-section__proof__text__image-container">
              <img
                src={ClientProofImage}
                className="landing-client__main-section__proof__text__image-container__image"
              />
            </div>
          </div>
          <div className="landing-client__main-section__proof__image-container">
            {/* <div className="landing-client__main-section__proof__image-container__gradient" /> */}
            <Image
              src={isMobile ? ClientCryMobileImage : ClientCryImage}
              className="landing-client__main-section__proof__image-container__image"
            />
          </div>
        </div>
      </div>
      <div className="landing-client__main-section__mentors">
        <div className="landing-client__main-section__mentors__image-container">
          <Image
            className="landing-client__main-section__mentors__image-container__image"
            src={isMobile ? OfficeImageMobile : OfficeImage}
          />
        </div>
        <Link
          to="/mentors"
          className="landing-client__main-section__mentors__card"
        >
          <div className="landing-client__main-section__mentors__card__mentor">
            MENTORI
          </div>
          <div className="landing-client__main-section__mentors__card__title">
            Pogledajte detaljnije na?? mentorski tim. Vama na usluzi.
          </div>
          <img
            src={ArrowRightImage}
            className="landing-client__main-section__mentors__card__icon"
          />
        </Link>
      </div>
      <Footer />
      <Menu />
      <div className="landing-client__logo">
        <Logo />
      </div>
    </div>
  );
};

export default ClientLandingPage;
