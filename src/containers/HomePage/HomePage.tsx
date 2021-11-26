import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../stores/store";

import "./HomePage.scss";

export default observer(function HomePage() {
  const { userStore } = useStore();

  return (
    <Segment
      inverted
      textAlign="center"
      vertical
      className="home-page__container"
    >
      <Header as="h1" inverted>
        IT mentor
      </Header>
      {userStore.isLoggedIn ? (
        <Button as={Link} to="/consultants" size="huge" inverted>
          Find a consultant!
        </Button>
      ) : (
        <div>
          <Button as={Link} to="/login" size="medium" inverted>
            Login
          </Button>
          <Button as={Link} to="/register" size="medium" inverted>
            Register
          </Button>
        </div>
      )}
    </Segment>
  );
});
