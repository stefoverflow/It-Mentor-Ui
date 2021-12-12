import React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import {
  Icon,
  Item,
  Label,
  Progress,
  Rating,
  Segment,
} from "semantic-ui-react";
import { Mentor } from "../../models/mentor";

import HomerImage from "../../assets/homersimpson.0.0.jpg";

interface Props {
  mentor: Mentor;
}

export default observer(function ConsultantListItem({ mentor }: Props) {
  const calculateLevel = (totalStarRating: number) => {
    if (totalStarRating < 5)
      return [Math.floor((totalStarRating / 5) * 100), 1];
    let starRating: number = totalStarRating;
    let level: number = 1;
    let lowerLimit: number = 1;
    let upperLimit: number = 5;
    let percentage: number = 0;

    while (Math.floor(totalStarRating / 5) !== 0) {
      level++;
      lowerLimit *= 5;
      upperLimit *= 5;
      totalStarRating = Math.floor(totalStarRating / 5);
    }

    percentage = ((starRating - lowerLimit) * 100) / (upperLimit - lowerLimit);

    return [percentage, level];
  };

  const [percentage, level] = calculateLevel(mentor.totalStarRating);

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={HomerImage} alt="photo" />
            <Item.Content>
              <Item.Header as={Link} to={`/mentors/${mentor.id}`}>
                {mentor.displayName}
              </Item.Header>
              <Item.Description>{mentor.bio}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Item>
        <Rating
          icon="star"
          defaultRating={mentor.averageStarReview}
          maxRating={5}
          disabled
          size="huge"
        />
      </Item>
      <Item.Extra>
        <Label
          basic
          content={mentor.reviews.length !== 0 ? mentor.reviews[0].comment : 0}
        />
      </Item.Extra>
      <Segment>
        <span>
          <Icon name="checkmark" />{" "}
          {mentor.reviews.length !== 0 ? mentor.reviews.length : 0} reviews
        </span>
      </Segment>
      <Segment.Group horizontal>
        <Segment>123 Followers 45 Following</Segment>
        <Segment>
          <Progress percent={percentage} style={{ width: "17em" }} success>
            {mentor?.categories[0]?.name} Level: {level}
          </Progress>
        </Segment>
        <Segment>
          <Link to={`/mentors/${mentor.id}`}>View</Link>
        </Segment>
      </Segment.Group>
    </Segment.Group>
  );
});
