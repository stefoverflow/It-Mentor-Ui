import React from "react";
import { Grid, Item, Segment } from "semantic-ui-react";
import HomerImage from "../../assets/homersimpson.0.0.jpg";
import { Mentor } from "../../models/mentor";

type ProfileHeaderProps = {
  mentor: Mentor;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ mentor }) => {
  const { displayName, bio /*, categories*/ } = mentor;

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
                        <Item.Header>
                          <b>{displayName}</b>
                        </Item.Header>
                      </Item>
                    </Item.Group>
                    <Item.Description>{bio}</Item.Description>
                    {/* <Progress
                      percent={50}
                      style={{ width: "17em", marginBottom: "4em" }}
                      success
                    >
                      {categories[0]} Level: {4}
                    </Progress> */}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </div>
  );
};

export default ProfileHeader;
