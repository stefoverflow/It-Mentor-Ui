import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "../../stores/store";
import ProfileFeed from "./ProfileFeed";
import ProfileHeader from "./ProfileHeader";
import { Loader } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { User } from "../../models/user";
import { ROLES } from "../../constants";

import "./MentorProfilePage.scss";
import { exampleMentors } from "../../components/MentorList/MentorList";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ClientContactButton from "../../components/ClientContactButton/ClientContactButton";

import './MentorProfilePage.scss'
import IconStar from "../../components/IconStar/IconStar";
import PackageCard from "../../components/PackageCard/PackageCard";

type MentorProfileProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const MentorProfilePage: React.FC<MentorProfileProps> = (props) => {
  // const { mentorStore } = useStore();
  // const currentUser: User = JSON.parse(localStorage.getItem("user") || "{}");
  // const { role } = currentUser;
  // const isClient = useMemo(() => role === ROLES.CLIENT, [role]);
  // const { loadConsultant, fetchMentorInProgress, fetchMentorError, mentor, chooseMentor, chooseMentorInProgress, chooseMentorError, chooseMentorSent } =
  //   mentorStore;
  const [checkedCard, setCheckedCard] = useState<number>(2);
  const mentorId: string = props.match.params.id;
  const mentor = exampleMentors[Number.parseInt(mentorId)];
  const { id, image, displayName, categories, bio } = mentor;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const fetchMentor = () => {
  //   loadConsultant(mentorId);
  // };

  useEffect(() => {
    // fetchMentor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mentor-profile">
      <div className="mentor-profile__header">
        <div className="mentor-profile__header__image">
          <img src={image} className="mentor-profile__header__image"/>
        </div>
        <div className="mentor-profile__header__text">
          <div className="mentor-profile__header__text__title">
            {displayName}
          </div>
          <div className="mentor-profile__header__text__category">
            {categories}
          </div>
          <div className="mentor-profile__header__text__review">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <div className="mentor-profile__header__text__bio">
            {/* {bio} */}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
          </div>
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
          <PackageCard title="Naslov paketa" checked={checkedCard === 0} list={['Mentorstvo do 6 meseci', '40 sesija', '1 sat po sesiji']} onClick={() => setCheckedCard(0)}/>
          <PackageCard title="Naslov paketa" checked={checkedCard === 1} list={['Mentorstvo do 6 meseci', '40 sesija', '1 sat po sesiji']} onClick={() => setCheckedCard(1)}/>
          <PackageCard title="Naslov paketa" checked={checkedCard === 2} list={['Mentorstvo do 6 meseci', '40 sesija', '1 sat po sesiji']} onClick={() => setCheckedCard(2)}/>
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
