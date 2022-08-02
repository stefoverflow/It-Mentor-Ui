import Logo from "../Logo/Logo";
import ProfilePhoto from "../../assets/profile-photo.png";
import ZoomButton from "../../assets/zoom-button.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import "./ProfileHeader.scss";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <Logo />
      <div className="profile-header__client">
        <img src={ProfilePhoto} />
        <p>Ime Prezime</p>
      </div>
      <img src={ZoomButton} className="profile-header__zoom"/>
      <BurgerMenu />
    </div>
  );
};

export default ProfileHeader;
