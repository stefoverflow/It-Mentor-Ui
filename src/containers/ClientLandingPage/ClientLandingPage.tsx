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
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   delay(() => {
  //     debugger;
  //     let logo = document.querySelector("landing-client__logo");

  //     const toggleLogoColor = function (entries: any) {
  //       const [entry] = entries;

  //       if (!entry.isIntersecting) {
  //         logo?.classList.add("__color");
  //       } else {
  //         logo?.classList.remove("__color");
  //       }
  //     };
  //     const logoObserver = new IntersectionObserver(toggleLogoColor, {
  //       root: null,
  //       threshold: 0,
  //     });

  //     logoObserver.observe(logo!);
  //   }, 1000);
  // }, []);

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
            Korak do četvorocifrene plate, spreman?
          </div>
          <div className="landing-client__image-container__content__description">
            Umesto da potrošiš minimum 4 godine svog života, <br />
            gomile novca i živaca, bolje je ovako:
          </div>
          <ClientContactButton />
        </div>
      </div>
      <div className="landing-client__main-section">
        {/* <div className="landing-client__main-section__happy-section">
          <Image
            className="landing-client__main-section__happy-section__image"
            src={ClientHappyImage}
          />
          <div className="landing-client__main-section__happy-section__description">
            „Ako bi me neko pitao da li sad treba da upišeš fakultet, neki kurs
            ili da gledaš nešto preko interneta sam, ja bih rekao evo ti
            četvrto, nađi mentora, neko s’ kim ćeš da radiš i to ti je to,
            najbolja stvar.”
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
        </div> */}
        <div className="landing-client__main-section__begining">
          <div className="landing-client__main-section__begining__text">
            <div className="landing-client__main-section__begining__text__title">
              Počeo sam sa istim problemom kao ti
            </div>
            <div className="landing-client__main-section__begining__text__description">
              Uzeo sam diplomu FON-a, mislio sam da uz to ide i znanje, ali ovo
              je bio moj ishod na četvrtoj godini fakulteta…
            </div>
          </div>
        </div>
        <div className="landing-client__main-section__proof">
          <div className="landing-client__main-section__proof__text">
            <div className="landing-client__main-section__proof__text__title">
              100 konkursa, 100 odbijenih poziva
            </div>
            <div className="landing-client__main-section__proof__text__description">
              Tek kada sam prebacio fokus sa formalnog obrazovanja na sticanje praktičnih
              veština, tada sam dobio rezultate. Možeš ići mojim putem ili
              izbeći greške koje sam načinio i krenuti ka uspehu. Ovo je
              ponuda koju sam dobio nakon 4 meseci radnog iskustva:
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
        <div className="landing-client__main-section__invest-section">
          <div className="landing-client__main-section__invest-section__image-container">
            <Image
              className="landing-client__main-section__invest-section__image-container__image"
              src={isMobile ? ClientSmartMobileImage : ClientSmartImage}
            />
          </div>
          <div className="landing-client__main-section__invest-section__text">
            <div className="landing-client__main-section__invest-section__text__title">
              Da, i ti to možeš!
            </div>
            <div className="landing-client__main-section__invest-section__text__description">
              Nije ti neophodno prethodno poznavanje, zajedno ćemo ići tempom koji
              tebi odgovara.
            </div>
          </div>
        </div>
        <div className="landing-client__main-section__invest-section">
          <div className="landing-client__main-section__invest-section__text">
            <div className="landing-client__main-section__invest-section__text__title">
              Investiraj u znanje, <br />
              ne u parče papira!
            </div>
            <div className="landing-client__main-section__elon-musk-image-container">
              <img
                className="landing-client__main-section__elon-musk-image-container__image"
                src={ClientMainContentElonMuskImage}
              />
            </div>
            <div className="landing-client__main-section__invest-section__text__description">
              Super je fakultet, lepo je imati diplomu ali ti ona ne garantuje
              zaradu. Praktične i odmah primenjlive veštine možeš steći i za 6
              meseci koristeći najmodernije tehnologije.
              Učenje zastarelih metoda od ljudi koji su teoretičari je kao da i
              dalje narezuješ sve na disk. Nemoj da budeš CD.
            </div>
          </div>
        </div>
        <div className="landing-client__main-section__invest-section">
          <div className="landing-client__main-section__invest-section__image-container">
            <Image
              className="landing-client__main-section__invest-section__image-container__image"
              src={isMobile ? ClientStudyMobileImage : ClientStydyImage}
            />
          </div>
          <div className="landing-client__main-section__invest-section__text">
            <div className="landing-client__main-section__invest-section__text__title">
              Možeš sam do prvog posla neformalnim učenjem
            </div>
            <div className="landing-client__main-section__invest-section__text__description">
              Verovatno si razmišljao o samostalnoj edukaciji? I taj proces
              podrazumeva puno vremena, isti pristup nastojimo da ubrzamo. Evo
              kako:
            </div>
          </div>
        </div>
        <div className="landing-client__main-section__part-text">
          Sarađuj sa ekspertom iz IT industrije bez ikakvog teoretisanja
        </div>
        <div className="landing-client__main-section__qa-section">
          <div className="landing-client__main-section__qa-section__qa">
            <div>- Umesto bubanja steći ćeš praksu.</div>
            <div>- Nasuprot papira dobićeš znanje.</div>
            <div>
              - Zastarele modele učenja zameni personalizovanim razvojnim putem,
              {!isMobile && <br />}a lutanje stalnom podrškom na svakom
              {!isMobile && <br />} koraku tvog usavršavanja.
            </div>
            <div>
              – Aktivno razvijaj projekat sa mentorom{!isMobile && <br />}{" "}
              umesto da slušaš dosadna predavanja.
            </div>
          </div>
          <div className="landing-client__main-section__qa-section__image-container">
            <img
              className="landing-client__main-section__qa-section__image-container__image"
              src={ClientCodingImage}
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
            Pogledaj detaljnije naš tim i odaberi svog 'ličnog trenera'
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
