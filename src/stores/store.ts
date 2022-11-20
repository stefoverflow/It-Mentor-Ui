import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import CommentStore from "./commentStore";
import CommonStore from "./commonStore";
import MentorStore from "./mentorStore";
import ProfileStore from "./profileStore";
import PostStore from "./postStore";
import ReviewStore from "./reviewStore";
import SkillStore from "./skillStore";
import UserStore from "./userStore";

interface Store {
  mentorStore: MentorStore;
  userStore: UserStore;
  reviewStore: ReviewStore;
  commonStore: CommonStore;
  postStore: PostStore;
  profileStore: ProfileStore;
  categoryStore: CategoryStore;
  commentStore: CommentStore;
  skillStore: SkillStore;
}

export const store: Store = {
  mentorStore: new MentorStore(),
  userStore: new UserStore(),
  reviewStore: new ReviewStore(),
  commonStore: new CommonStore(),
  postStore: new PostStore(),
  profileStore: new ProfileStore(),
  categoryStore: new CategoryStore(),
  commentStore: new CommentStore(),
  skillStore: new SkillStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
