import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Mentor } from "../models/mentor";
import { Post } from "../models/post";
import { v4 as uuid } from "uuid";

export default class PostStore {
  posts: Post[] = [];
  post: Post | undefined = undefined;
  errors: string[] | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getListOfPostsForSelectedConsultant = async (
    consultant: Mentor | undefined
  ) => {
    var posts: Post[] = await agent.Mentors.getListOfPosts(consultant);

    posts.forEach((post) => {
      this.posts.push(post);
    });

    console.log(posts);
  };

  setPost = (
    postTitle: string,
    postDescription: string | number | undefined
  ) => {
    this.post = { id: uuid(), title: postTitle, description: postDescription };
    this.posts.push(this.post);
  };

  submitAPost = async (
    consultant: Mentor | undefined,
    post: Post | undefined
  ) => {
    await agent.Mentors.submitAPost(consultant, post).catch(
      (errors) => (this.errors = errors)
    );
    console.log(post);
  };
}
