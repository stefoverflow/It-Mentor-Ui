import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Dimmer,
  Loader,
  Pagination,
} from "semantic-ui-react";
import UserCard from "../../components/UserCard/UserCard";
import { User } from "../../models/user";
import usePagination from "../../hooks/usePagination";
import useQueryParams from "../../hooks/useQueryParams";
import { useStore } from "../../stores/store";

import { PAGE_LIMIT } from "../../constants";

import "./AdminPanelPage.scss";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import PromoteModal from "../../components/PromoteModal/PromoteModal";

type AdminPanelPageProps = {};

const AdminPanelPage: React.FC<AdminPanelPageProps> = (props) => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [deleteInProgress, setDeleteInProgress] = useState<boolean>(false);
  const [deleteError, setDeleteError] = useState<string>("");
  const [selectedUserToDelete, setSelectedUserToDelete] =
    useState<User | null>();
  const [selectedUserToPromote, setSelectedUserToPromote] = useState<User | null>();
  const { userStore } = useStore();
  const { params, setQueryParam } = useQueryParams<{ PageNumber: string }>();
  const { currentPage, totalPages, setTotalPages, setCurrentPage } =
    usePagination({
      initialPage: params.PageNumber ? Number.parseInt(params.PageNumber) : 1,
    });

  useEffect(() => {
    setQueryParam("PageNumber", currentPage.toString(), true);
  }, [setQueryParam, currentPage]);

  const onPageChange = useCallback(
    (e: any, pageInfo: any) => {
      setCurrentPage(pageInfo.activePage);
    },
    [setCurrentPage]
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setInProgress(true);
        setError("");
        const response = await userStore.getUsersPaginated(
          currentPage,
          PAGE_LIMIT
        );
        const { value, totalPages } = response.data;
        setUsers(value);
        setTotalPages(totalPages);
        console.log("users", response.data);
      } catch (e) {
        setError("Error occured while fetching users.");
      } finally {
        setInProgress(false);
      }
    };
    fetchUsers();
  }, [currentPage, setTotalPages, userStore]);

  //TODO: don't have email of user in the users list
  //need email so user can be deleted
  const deleteUser = async (user: User | null | undefined) => {
    try {
      setDeleteInProgress(true);
      setDeleteError("");
      setUsers(users.filter((u) => u.email !== (user ? user.email : null)));
    } catch (error) {
      setDeleteError("Error occured while deleting user.");
    } finally {
      setDeleteInProgress(false);
      setSelectedUserToDelete(null);
    }
  };

  const onPromoteUser = async (user: User | null | undefined, rate: number) => {
    console.log({user, rate});
  }

  return (
    <div>
      <Container className="admin-panel-page">
        <Header as="h1" textAlign="center">
          Users
        </Header>
        {inProgress ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <div className="admin-panel-page__cards">
            {users.map((u) => (
              <UserCard
                key={u.id}
                id={u.id}
                displayName={u.displayName}
                image={u.image}
              >
                <div>
                  <Button onClick={() => setSelectedUserToDelete(u)} color="red">
                    <Icon name="remove user" />
                    Delete
                  </Button>
                  {u.role === 'Potential Mentor' &&
                    <Button onClick={() => setSelectedUserToPromote(u)} color="green">
                      <Icon name="angle double up" />
                      Promote
                    </Button>
                  }
                </div>
              </UserCard>
            ))}
          </div>
        )}
        <ConfirmModal
          deleteMode={true}
          open={!!selectedUserToDelete}
          loading={deleteInProgress}
          onSubmit={() => deleteUser(selectedUserToDelete)}
          onCancel={() => setSelectedUserToDelete(null)}
          headerText="Delete user"
          descriptionText="Are you sure you want to delete user?"
        />
        <PromoteModal
          open={!!selectedUserToPromote}
          onSubmit={(rate: number) => onPromoteUser(selectedUserToPromote, rate)}
          onCancel={() => setSelectedUserToPromote(null)}
          isMentor={true}//selectedUserToPromote?.role === 'Mentor'}
        />
        {error && <div className="admin-panel-page__error">{error}</div>}
        {deleteError && (
          <div className="admin-panel-page__error">{deleteError}</div>
        )}
        <div className="admin-panel-page__pagination">
          {!inProgress && totalPages && totalPages !== 1 ? (
            <Pagination
              firstItem={currentPage === 1 ? null : undefined}
              lastItem={currentPage === totalPages ? null : undefined}
              activePage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              nextItem={currentPage === totalPages ? null : undefined}
              prevItem={currentPage === 1 ? null : undefined}
            />
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default AdminPanelPage;
