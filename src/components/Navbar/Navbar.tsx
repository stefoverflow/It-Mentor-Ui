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
  Search,
  SearchProps,
} from "semantic-ui-react";
import { MAX_MOBILE_SCREEN_WIDTH } from "../../constants";
import { useStore } from "../../stores/store";
import { debounce } from "lodash";

import "./Navbar.scss";
import { Skill } from "../../models/skill";

interface SearchResultType {
  displayName: string;
  id: string;
  skills: Skill[];
}

export default observer(function Navbar() {
  const {
    mentorStore,
    userStore: { logout, currentUser },
  } = useStore();
  const isLoggedIn = useMemo(() => currentUser ? true : false, [currentUser]);
  const isAdmin = useMemo(
    () => (currentUser ? currentUser.role === "Admin" : false),
    [currentUser]
    );
    const isMentor = useMemo(() => (currentUser ? currentUser.role === 'Mentor' : false), []);
    const [searchText, setSearchText] = useState<string>('');

  const {
    searchMentorsInProgress,
    // searchMentorsError,
    searchedMentors,
    searchMentors,
  } = mentorStore;

  const [width, setWidth] = useState(window.innerWidth);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > MAX_MOBILE_SCREEN_WIDTH) setSidebarVisible(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchChange = debounce(
    (_event: React.MouseEvent<HTMLElement, MouseEvent>, data: SearchProps) => {
      searchMentors(data.value!);
      setSearchText(data.value!);
    },
    500
  );

  const tabs = (
    <React.Fragment>
      <MenuItem as={NavLink} to="/" exact position="left">
        Home
      </MenuItem>
      <MenuItem
        as={Search}
        position="left"
        loading={searchMentorsInProgress}
        onSearchChange={handleSearchChange}
        results={searchedMentors}
        resultRenderer={(m: SearchResultType) => (
          <div className="navbar__search-result" onClick={() => history.push(`/mentors/${m.id}`)}> 
            <div>
              {m.displayName} -
            </div>
            <div className="navbar__search-result">
              {m.skills.map(({ name }: Skill) => {
                const match = name.includes(searchText);
                const rest = name.replace(searchText, '');
              return (
                 <div className="navbar__search-result__skill">
                   <b>
                     {match && searchText}
                   </b>
                   {rest}
                </div>)
              })}
            </div>
          </div>
        )}
        noResultsMessage="Nismo pronasli mentore."
      />
      {isAdmin && (
        <MenuItem as={NavLink} to="/manage">
          Admin panel
        </MenuItem>
      )}
      {isLoggedIn ? (
        <Menu.Menu position="right">
          <MenuItem as={NavLink} to="/mentors" exact>
            Mentors
          </MenuItem>
          {isMentor && (
            <>
              <MenuItem as={NavLink} to="/clients" exact>
                Clients
              </MenuItem>
              <MenuItem as={NavLink} to="/profile" exact>
                Profile
              </MenuItem>
            </>
          )}
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
