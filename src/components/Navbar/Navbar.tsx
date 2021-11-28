import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../";
import {
  Menu,
  MenuItem,
  Sidebar,
  Icon,
  Segment,
  // SearchProps,
} from "semantic-ui-react";
// import agent from "../../api/agent";
import { MAX_MOBILE_SCREEN_WIDTH } from "../../constants";
import { isEmptyObject } from "../../util/data";
// import { Category } from "../../models/category";
import { useStore } from "../../stores/store";

import "./Navbar.scss";

export default observer(function Navbar() {
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  const isLoggedIn = useMemo(() => !isEmptyObject(currentUser), [currentUser]);
  const isAdmin = useMemo(
    () => (currentUser ? currentUser.role === "admin" : false),
    [currentUser]
  );

  // const { consultantStore } = useStore();
  const {
    userStore: { /*user,*/ logout },
  } = useStore();

  // const [categories, setCategories] = useState<Category[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [searchedName, setSearchedName] = useState<string | undefined>("");

  const [width, setWidth] = useState(window.innerWidth);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // useEffect(() => {
  //   agent.Categories.list().then((response) => {
  //     setCategories(response);
  //   });
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > MAX_MOBILE_SCREEN_WIDTH) setSidebarVisible(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleSearchChange = (
  //   event: React.MouseEvent<HTMLElement, MouseEvent>,
  //   data: SearchProps
  // ) => {
  //   setIsLoading(true);
  //   setSearchedName(data.value);

  //   consultantStore.filterConsultants(data.value);
  // };

  const tabs = (
    <React.Fragment>
      <MenuItem as={NavLink} to="/" exact position="left">
        Home
      </MenuItem>
      {isLoggedIn ? (
        <Menu.Menu position="right">
          <MenuItem as={NavLink} to="/mentors" exact>
            Mentors
          </MenuItem>
          <MenuItem as={NavLink} to={`/mentors/${currentUser.id}`} exact>
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              logout();
              history.replace("/");
            }}
          >
            Logout
          </MenuItem>
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right">
          <MenuItem header as={NavLink} to="/login" exact>
            Login
          </MenuItem>
          <MenuItem header as={NavLink} to="/register" exact>
            Register
          </MenuItem>
        </Menu.Menu>
      )}
      {isAdmin && (
        <MenuItem as={NavLink} to="/manage">
          Admin panel
        </MenuItem>
      )}
    </React.Fragment>
  );

  return (
    <div>
      {width > MAX_MOBILE_SCREEN_WIDTH ? (
        <Menu
          className="navbar"
          style={{ marginTop: "0px", marginBottom: "0px" }}
          inverted
        >
          {tabs}
        </Menu>
      ) : (
        <Segment className="navbar" inverted size="tiny">
          <Icon
            size="big"
            name="sidebar"
            onClick={() => setSidebarVisible(true)}
          />
          <Sidebar
            inverted
            as={Menu}
            width="thin"
            vertical
            visible={sidebarVisible}
            onHide={() => setSidebarVisible(false)}
          >
            {tabs}
          </Sidebar>
        </Segment>
      )}
    </div>
  );
});
