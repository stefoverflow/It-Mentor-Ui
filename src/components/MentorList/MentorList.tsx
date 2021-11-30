import React, { useEffect } from "react";
import {
  Container,
  Item,
  Loader,
  Pagination,
  PaginationProps,
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import MentorListItem from "../MentorListItem/MentorListItem";
import { PAGE_LIMIT } from "../../constants";
import usePagination from "../../hooks/usePagination";
import useQueryParams from "../../hooks/useQueryParams";

import "./MentorList.scss";

export default observer(function ConsultantList() {
  const { mentorStore } = useStore();
  const {
    mentors,
    fetchMentorsInProgress,
    fetchMentorsError,
    loadConsultants,
  } = mentorStore;
  const { params, setQueryParam } =
    useQueryParams<{ pageNumber: string; pageSize: string }>();
  const { pageNumber, pageSize } = params;
  const { currentPage, totalPages, setTotalPages, setCurrentPage } =
    usePagination({
      initialPage: pageNumber ? Number.parseInt(pageNumber) : 1,
    });

  useEffect(() => {
    setQueryParam("pageNumber", currentPage.toString(), true);
    setQueryParam(
      "pageSize",
      pageSize ? pageSize.toString() : PAGE_LIMIT.toString(),
      true
    );
  }, [setQueryParam, currentPage, pageSize]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    const { activePage } = data;
    setCurrentPage(activePage as number);
  };

  useEffect(() => {
    if (pageNumber && pageSize) {
      loadConsultants(
        Number.parseInt(pageNumber),
        Number.parseInt(pageSize),
        setTotalPages
      );
    }
  }, [loadConsultants, pageNumber, pageSize, setTotalPages]);

  // const [activeItem, setActiveItem] = useState<string | undefined>("topRated");

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

      <Container className="mentor-list__container">
        {fetchMentorsInProgress ? (
          <Loader active inline />
        ) : fetchMentorsError ? (
          <div className="mentor-list__container__error">
            {fetchMentorsError}
          </div>
        ) : (
          <Item.Group divided>
            {mentors.map((mentor) => (
              <MentorListItem key={mentor.id} mentor={mentor} />
            ))}
          </Item.Group>
        )}
      </Container>

      {!fetchMentorsError && (
        <Pagination
          activePage={pageNumber}
          onPageChange={handlePageChange}
          firstItem={null}
          lastItem={null}
          secondary
          totalPages={totalPages}
        />
      )}
    </Container>
  );
});
