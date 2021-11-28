import React, { useState } from "react";
import {
  Button,
  Grid,
  Input,
  InputOnChangeData,
  Item,
  Segment,
  TextArea,
  TextAreaProps,
} from "semantic-ui-react";
import { useStore } from "../../stores/store";
import PostItem from "../../components/PostItem/PostItem";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import ValidationErrors from "../../components/ValidationErrors/ValidationErrors";
import { Mentor } from "../../models/mentor";

type ProfileFeedType = {
  mentor: Mentor;
};

const ProfileFeed: React.FC<ProfileFeedType> = ({ mentor }) => {
  const { reviewStore } = useStore();
  const { postStore } = useStore();

  const [postTitle, setPostTitle] = useState<string>("");
  const [postDescription, setPostDescription] = useState<
    string | number | undefined
  >("");

  const handlePostTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setPostTitle(data.value);
  };

  const handlePostDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    data: TextAreaProps
  ) => {
    setPostDescription(data.value);
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="10">
          <Segment>
            <Item.Group>
              <Item>
                <Input
                  onChange={handlePostTitleChange}
                  placeholder="Enter post title"
                />
              </Item>
              <TextArea
                onChange={handlePostDescriptionChange}
                style={{ width: "45em", height: "7em" }}
                placeholder="Enter post content"
              />
              <Button
                onClick={() => {
                  postStore.setPost(postTitle, postDescription);
                  postStore.submitAPost(mentor, postStore.post);
                }}
                primary
              >
                Submit
              </Button>
            </Item.Group>
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
