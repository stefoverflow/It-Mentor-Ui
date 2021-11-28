import React from "react";
import { Button, Grid, Item, Progress, Segment } from "semantic-ui-react";
import HomerImage from "../../assets/homersimpson.0.0.jpg";
import { Mentor } from "../../models/mentor";

type ProfileHeaderProps = {
  mentor: Mentor;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ mentor }) => {
  const { displayName, bio, categories } = mentor;

  return (
    <div>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={HomerImage} size="small" />
            <Item.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width="6">
                    <Item.Group>
                      <Item>
                        <Item.Header>{displayName}</Item.Header>
                      </Item>
                    </Item.Group>
                    <Item.Description>{bio}</Item.Description>
                    <Progress
                      percent={50}
                      style={{ width: "17em", marginBottom: "4em" }}
                      success
                    >
                      {categories[0]} Level: {4}
                    </Progress>
                  </Grid.Column>
                  <Grid.Column verticalAlign="middle" width="4">
                    <Item.Content
                      style={{
                        fontSize: "xx-large",
                        fontStyle: "bold",
                      }}
                    >
                      125 Followers
                    </Item.Content>
                  </Grid.Column>
                  <Grid.Column verticalAlign="middle" width="6">
                    <Item.Content
                      style={{ fontSize: "xx-large", fontStyle: "bold" }}
                    >
                      14 Following
                    </Item.Content>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Button.Group widths="2">
                <Button floated="right" positive>
                  Hire
                </Button>
                <Button floated="right" primary>
                  Follow
                </Button>
              </Button.Group>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </div>
  );
};

export default ProfileHeader;
