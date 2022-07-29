import React from "react";
import { observer } from "mobx-react-lite";
// import { Link } from "react-router-dom";
// import {
//   Icon,
//   Item,
//   Label,
//   Progress,
//   Rating,
//   Segment,
// } from "semantic-ui-react";
// import { Mentor } from "../../models/mentor";

// import HomerImage from "../../assets/homersimpson.0.0.jpg";

import './MentorListItem.scss';
import IconLinkedin from "../IconLinkedin/IconLinedin";
import IconBasketball from "../IconBasketball/IconBasketball";
import IconBe from "../IconBe/IconBe";
import { Link } from "react-router-dom";
import SkillList from "../SkillList/SkillList";
import Image from "../Image/Image";

interface ExampleMentorsType {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  categories: string[];
  skills: string[];
  bio: string;
  radiU: string;
}

interface Props {
  mentor: ExampleMentorsType;
}

export default observer(function ConsultantListItem({ mentor }: Props) {
  const { id, image, firstName, lastName, categories, bio, skills, radiU } = mentor;

  return (
    <Link to={`/mentors/${id}`}>
      <div className="mentor" key={id}>
        <div className="mentor__image-container">
          <Image className="mentor__image-container__image" src={image} />
        </div>
        <div className="mentor__title">
          {firstName} {lastName}
        </div>
        <div className="mentor__category">
          {categories[0]}
        </div>
        <div className="mentor__work-in">
          {`radi u: ${radiU}`}
        </div>
        <SkillList skills={skills} isLimited />
        <div className="mentor__bio">
          {bio.length > 120 ? bio.slice(0, 117) : bio}...
        </div>
        <div className="mentor__details">
          DETALJNIJE
          <div className="mentor__details__line"/>
        </div>
      </div>
    </Link>
  );
});
