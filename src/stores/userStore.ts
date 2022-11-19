import { makeAutoObservable, runInAction } from "mobx";
import { history } from "..";
import agent from "../api/agent";
import { User, UserFormValues } from "../models/user";
import { store } from "./store";

export default class UserStore {
  currentUser: User | null = JSON.parse(localStorage.getItem("user") || "{}");

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.currentUser;
  }

  getUsersPaginated = async (PageNumber: number, PageSize: number) => {
    return await agent.Admin.usersPaginated(PageNumber, PageSize);
  };

  deleteUser = async (email: string | undefined) => {
    return await agent.Admin.deleteUser(email);
  };

  login = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.login(creds);
      store.commonStore.setToken(user.token);
      store.commonStore.setUser(user);
      runInAction(() => (this.currentUser = user));
      return user;
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    store.commonStore.setToken(null);
    window.localStorage.removeItem("jwt");
    window.localStorage.removeItem("user");
    this.currentUser = null;
    history.push("/");
  };

  registerMentor = async (creds: any) => {
    try {
      debugger
      const user = await agent.Account.registerMentor(creds);
      store.commonStore.setToken(user.token);
      store.commonStore.setUser(user);
      runInAction(() => (this.currentUser = user));
    } catch (error) {
      throw error;
    }
  };
}
