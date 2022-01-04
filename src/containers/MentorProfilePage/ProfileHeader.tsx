import React from "react";
import { Button, Grid, Icon, Item, Segment } from "semantic-ui-react";
import HomerImage from "../../assets/homersimpson.0.0.jpg";
import { Mentor } from "../../models/mentor";

type ProfileHeaderProps = {
  mentor: Mentor;
  chooseMentor: (mentorId: string, numberOfSessions: string) => void,
  chooseMentorInProgress: boolean, 
  chooseMentorError: string, 
  chooseMentorSent: boolean,
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ mentor, chooseMentor, chooseMentorInProgress, chooseMentorError, chooseMentorSent }) => {
  const { displayName, bio /*, categories*/, id } = mentor;

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
                    <Item.Group>
                      {id && 
                        <Item>
                          <Item.Header>
                            <Button primary 
                              loading={chooseMentorInProgress} 
                              disabled={chooseMentorSent}
                              onClick={() => chooseMentor(id, '20')}
                              >
                              Uposli mentora
                            </Button>
                          </Item.Header>
                          {/* <Item.Description>
                            {chooseMentorError && <div className="mentor-profile-page__error">{chooseMentorError}</div>}
                          </Item.Description> */}
                        </Item>
                      }
                    </Item.Group>
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
