import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import "./MentorProfilePage.scss";
import { exampleMentors } from "../../components/MentorList/MentorList";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ClientContactButton from "../../components/ClientContactButton/ClientContactButton";

import "./MentorProfilePage.scss";
import PackageCard from "../../components/PackageCard/PackageCard";
import SkillList from "../../components/SkillList/SkillList";
import Image from "../../components/Image/Image";
import Logo from "../../components/Logo/Logo";
import { useStore } from "../../stores/store";
import { Mentor } from "../../models/mentor";

type MentorProfileProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const MentorProfilePage: React.FC<MentorProfileProps> = (props) => {
  const [checkedCard, setCheckedCard] = useState<number>(2);
  const mentorId: string = props.match.params.id;
  const mentor = exampleMentors[Number.parseInt(mentorId)];
  const { id, image, firstName, lastName, categories, bio, skills, radiU } =
    mentor;
  const {profileStore : {loadProfile, profile}} = useStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadProfile('1c5c68ca-a024-4f6a-b527-3f5a4f910855');
    console.log(profile);
  }, [profile]);

  return (
    <div className="mentor-profile">
      <div className="mentor-profile__logo">
        <Logo />
      </div>
      <div className="mentor-profile__header">
        <div className="mentor-profile__header__image">
          <Image src={image} className="mentor-profile__header__image" />
        </div>
        <div className="mentor-profile__header__text">
          <div className="mentor-profile__header__text__title">
            {firstName} {lastName}
          </div>
          <div className="mentor-profile__header__text__category">
            {categories}
          </div>
          <div className="mentor-profile__header__text__category">
            {`radi u: ${radiU}`}
          </div>
          {/* <div className="mentor-profile__header__text__review">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div> */}
          <SkillList skills={skills} />
          <div className="mentor-profile__header__text__bio">{bio}</div>
        </div>
      </div>
      <div className="mentor-profile__package-container">
        <div className="mentor-profile__package-container__title">
          Odaberi paket koji ti odgovara!
        </div>
        <div className="mentor-profile__package-container__sub-title">
          Ukoliko ti ne odgovara nijedan od paketa, kontaktiraj nas
        </div>
        <div className="mentor-profile__package-container__cards">
          <PackageCard
            title="Naslov paketa"
            checked={checkedCard === 0}
            list={["Mentorstvo do 6 meseci", "40 sesija", "1 sat po sesiji"]}
            onClick={() => setCheckedCard(0)}
          />
          <PackageCard
            title="Naslov paketa"
            checked={checkedCard === 1}
            list={["Mentorstvo do 6 meseci", "40 sesija", "1 sat po sesiji"]}
            onClick={() => setCheckedCard(1)}
          />
          <PackageCard
            title="Naslov paketa"
            checked={checkedCard === 2}
            list={["Mentorstvo do 6 meseci", "40 sesija", "1 sat po sesiji"]}
            onClick={() => setCheckedCard(2)}
          />
        </div>
      </div>
      <Menu />
      <ClientContactButton />

      <Footer />
      {/* {fetchMentorInProgress ? (
        <Loader active inline />
      ) : fetchMentorError ? (
        <div className="mentor-profile-page__error">{fetchMentorError}</div>
      ) : (
        <>
          <ProfileHeader mentor={mentor} chooseMentor={chooseMentor} chooseMentorInProgress={chooseMentorInProgress} chooseMentorError={chooseMentorError} chooseMentorSent={chooseMentorSent}/>
          <ProfileFeed mentor={mentor} isClient={isClient} />
        </>
      )} */}
    </div>
  );
};

export default observer(MentorProfilePage);
