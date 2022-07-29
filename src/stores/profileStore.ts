import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Mentor } from "../models/mentor";
import { User } from "../models/user";

export default class ProfileStore {
  profile: Mentor | null = null;
  loadingProfile: boolean = false;
  loadingProfileError: string = "";
  uploadingPhoto: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isCurrentUser() {
    const currentUser: User = JSON.parse(localStorage.getItem("user") || "{}");
    if (currentUser && this.profile) {
      return currentUser.id === this.profile.id;
    }
    return false;
  }

  loadProfile = async (id: string) => {
    this.loadingProfile = true;
    this.loadingProfileError = "";

    try {
      const profile = await agent.Mentors.getMentor(id);
      runInAction(() => {
        this.profile = profile;
        this.loadingProfile = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loadingProfileError =
          "Doslo je do greske prilikom ucitavanja profila.";
        this.loadingProfile = false;
      });
    }
  };

  uploadPhoto = async (file: Blob) => {
    this.uploadingPhoto = true;
    try {
      const response = await agent.Mentors.uploadPhoto(file);
      console.log("uploadPhoto", response);
      const photo = response.data;
      runInAction(() => {
        if (this.profile) {
          this.profile.image = photo;
        }
      });
    } catch (error) {
    } finally {
      runInAction(() => (this.uploadingPhoto = false));
    }
  };
}
