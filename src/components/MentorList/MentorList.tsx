import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Item,
  Menu,
  MenuItemProps,
  Dimmer,
  Loader,
  Pagination,
  PaginationProps,
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import MentorListItem from "../MentorListItem/MentorListItem";
import { PAGE_LIMIT } from "../../constants";

export default observer(function ConsultantList() {
  const { mentorStore } = useStore();
  const { mentors, fetchMentorsInProgress, pagination, loadConsultants } =
    mentorStore;
  const { totalPages, pageNumber } = pagination;

  // const [activeItem, setActiveItem] = useState<string | undefined>("topRated");

  const fetchMentors = (page: number) => {
    loadConsultants(page, PAGE_LIMIT);
  };

  useEffect(() => {
    fetchMentors(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleItemClick = (
  //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  //   data: MenuItemProps
  // ) => {
  //   setActiveItem(data.name);
  //   data.name === "topRated" ? sortByTopRated() : sortByMostReviews();
  // };

  // const sortByMostReviews = () => {
  //   consultantStore.currentConsultants.sort((a, b) =>
  //     a.numberOfReviews < b.numberOfReviews ? 1 : -1
  //   );
  // };

  // const sortByTopRated = () => {
  //   consultantStore.currentConsultants.sort((a, b) =>
  //     a.averageStarReview < b.averageStarReview ? 1 : -1
  //   );
  // };

  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    const { activePage } = data;
    fetchMentors(activePage as number);
  };

  return (
    <Container fluid textAlign="center">
      {/* <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name="topRated"
          active={activeItem === "topRated"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="mostReviews"
          active={activeItem === "mostReviews"}
          onClick={handleItemClick}
        />
      </Menu>*/}

      {fetchMentorsInProgress ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <Item.Group divided>
          {mentors.map((mentor) => (
            <MentorListItem consultant={mentor} />
          ))}
        </Item.Group>
      )}

      <Pagination
        activePage={pageNumber}
        onPageChange={handlePageChange}
        firstItem={null}
        lastItem={null}
        secondary
        totalPages={totalPages}
      />
    </Container>
  );
});
