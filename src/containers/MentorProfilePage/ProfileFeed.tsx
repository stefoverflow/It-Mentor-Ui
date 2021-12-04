import React, { useEffect, useState } from "react";
import { Grid, Header, Loader, Segment } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import PostItem from "../../components/PostItem/PostItem";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import ValidationErrors from "../../components/ValidationErrors/ValidationErrors";
import { Mentor } from "../../models/mentor";
import ReviewForm from "../../forms/ReviewForm/ReviewForm";
import agent from "../../api/agent";

type ProfileFeedType = {
  mentor: Mentor;
  isClient: boolean;
};

const ProfileFeed: React.FC<ProfileFeedType> = ({ mentor, isClient }) => {
  const { reviewStore } = useStore();
  const { postStore } = useStore();
  const [canPostReviewInProgress, setCanPostReviewInProgress] =
    useState<boolean>(false);
  const [canPostReview, setCanPostReview] = useState<boolean>(false);
  const [canPostReviewError, setCanPostReviewError] = useState<string>("");

  useEffect(() => {
    const canPost = async (id: string) => {
      try {
        setCanPostReviewError("");
        setCanPostReviewInProgress(true);
        const response = await agent.Mentors.canPostReview(id);
        const { value } = response;
        setCanPostReview(value);
      } catch (error) {
        setCanPostReviewError(
          "An error occured while checking for review post."
        );
      } finally {
        setCanPostReviewInProgress(false);
      }
    };
    if (isClient && mentor.id) {
      canPost(mentor.id);
    }
  }, [isClient, mentor.id]);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="10">
          {canPostReviewInProgress ? (
            <Loader active />
          ) : canPostReviewError ? (
            <div>{canPostReviewError}</div>
          ) : (
            canPostReview && (
              <Segment>
                <Header as="h2">Leave review for mentor</Header>
                <ReviewForm mentorId={mentor.id} />
              </Segment>
            )
          )}
          {postStore.errors && <ValidationErrors errors={postStore.errors} />}

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
