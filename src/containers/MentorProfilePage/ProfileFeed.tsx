import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import PostItem from "../../components/PostItem/PostItem";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import ValidationErrors from "../../components/ValidationErrors/ValidationErrors";
import { Mentor } from "../../models/mentor";
import ReviewForm from "../../forms/ReviewForm/ReviewForm";

type ProfileFeedType = {
  mentor: Mentor;
};

const ProfileFeed: React.FC<ProfileFeedType> = ({ mentor }) => {
  const { reviewStore } = useStore();
  const { postStore } = useStore();

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="10">
          <Segment>
            <Header as="h2">Leave review for mentor</Header>
            <ReviewForm mentorId={mentor.id} />
            {postStore.errors && <ValidationErrors errors={postStore.errors} />}
          </Segment>

          {postStore.posts.map((post) => (
            <PostItem post={post} />
          ))}
        </Grid.Column>
        <Grid.Column width="6">
          {reviewStore.reviewsForSelectedConsultant.map((review) => (
            <ReviewItem review={review} />
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ProfileFeed;
