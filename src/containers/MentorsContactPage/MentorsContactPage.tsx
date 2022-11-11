import useMobile from "../../hooks/useMobile";
import MentorsContactCover from "../../assets/mentors-contact-cover.png";
import MentorContactCoverMobile from "../../assets/mentors-contact-cover-mobile.png";
import "./MentorsContactPage.scss";
import Logo from "../../components/Logo/Logo";
import MentorsContactGraphic from "../../assets/mentors-contact-graphic.svg";
import { Link } from "react-router-dom";

const MentorsContactPage = () => {
  const { isMobile } = useMobile();

  return (
    <div className="mentors-contact">
      {!isMobile ? (
        <div className="landing__header__logo">
          <Logo />
        </div>
      ) : null}
      <div className="mentors-contact-cover">
        <img src={isMobile ? MentorContactCoverMobile : MentorsContactCover} />
      </div>
      <div className="mentors-contact__content">
        {isMobile ? <Logo /> : null}
        <div>Pošalji svoj cv na sledeći mail:</div>
        <div className="mentors-contact__email">stefantosic.dev@gmail.com</div>
        <div className="mentors-contact__image-container">
          <img
            className="mentors-contact__image-container__image"
            src={MentorsContactGraphic}
          />
        </div>
        <div>
          <Link to="/" className="mentors-contact__content_back">Natrag na početnu</Link>
        </div>
      </div>
    </div>
  );
};

export default MentorsContactPage;
