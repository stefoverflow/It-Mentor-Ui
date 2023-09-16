import axios, { AxiosError, AxiosResponse } from "axios";
import { Category } from "../models/category";
import { Mentor } from "../models/mentor";
import { Message } from "../models/message";
import { Post } from "../models/post";
import { UserFormValues } from "../models/user";
import { toast } from "react-toastify";
import { history } from "..";
import { Skill } from "../models/skill";
import { ClientRegisterDto } from "../models/clientRegisterDto";
import { MentorRegisterDto } from "../models/mentor-register-dto";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  async (response) => {
    return response;
    // Ako vrati bilo sta sem 200 ide u error
  },
  (error: AxiosError) => {
    // return { data: { value: {}}};
    const { data, status } = error.response || {};
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      case 401:
        toast.error("unauthorized");
        break;
      case 404:
        history.push("/not-found");
        break;
      case 500:
        toast.error(`server error: ${data.message}`);
        console.log(data);
        break;
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(async (request) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }
  return request;
});

const responseBody = (response: AxiosResponse) => response.data.value;

const requests = {
  get: (url: string, body: {}) => axios.get(url, body).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string, body: {}) => axios.delete(url, body).then(responseBody),
  patch: (url: string, body: {}) => axios.patch(url, body).then(responseBody),
};

const Mentors = {
  registerClient: (values: ClientRegisterDto) => requests.post(`/account/register/client`, values),
  getMentorsPaginated: (PageNumber: number, PageSize: number) =>
    requests.get(`/mentors?PageNumber=${PageNumber}&PageSize=${PageSize}`, {}),
  searchMentorsBySkill: (skillName: string) =>
    requests.post("/mentors", { name: skillName }),
  chooseMentor: (mentorId: string, numberOfSessions: string) => requests.post('/mentorship', {mentorId, numberOfSessions}),
  getClients: () => requests.get('/mentorship', {}),
  getMentor: (id: string) : Promise<Mentor> => requests.get(`/mentors/${id}`, {}),
  editMentor: (id: string, displayName: string, bio: string, skills: Skill[]) =>
    requests.patch(`/mentors`, { id, displayName, bio, skills }),
  uploadPhoto: (file: Blob) => {
    let formData = new FormData();
    formData.append("File", file);
    return axios.post("photos", formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
  },
  uploadCV: (file: any) => {
    // let formData = new FormData();
    // formData.append("File", file);
    return axios.post(
      "jobApplication",
      {
        category: "Web Development",
        country: "Serbia",
        email: "stefankrstic96@yahoo.com",
        firstName: "Stefan",
        lastName: "Krstic",
        phoneNumber: "0643344556",
        cv: file,
      },
      {
        // headers: { "Content-Encoding": "multipart/form-data" },
      }
    );
  },
  canPostReview: (mentorId: string) =>
    requests.post(`/reviews`, { id: mentorId }),
  postAReview: (
    mentorId: string,
    reviewStarRating: number,
    reviewComment: string
  ) =>
    requests.post("/mentors/" + mentorId + "/reviews", {
      starRating: reviewStarRating,
      comment: reviewComment,
    }),
  getListOfReviews: (currentConsultant: Mentor | undefined) =>
    requests.get("/consultants/" + currentConsultant?.id + "/reviews", {}),
  listForSelectedCategory: (selectedCategory: Category | undefined | null) =>
    requests.get("/categories/" + selectedCategory?.id + "/consultants", {}),
  getListOfPosts: (consultant: Mentor | undefined) =>
    requests.get("/consultants/" + consultant?.id + "/posts", {}),
  submitAPost: (consultant: Mentor | undefined, post: Post | undefined) =>
    requests.post("/consultants/" + consultant?.id + "/posts", {
      id: post?.id,
      title: post?.title,
      description: post?.description,
    }),
  search: (consultantName: string | undefined) =>
    requests
      .post("/consultants", { description: consultantName })
      .then((response) => response.value),
};

const Categories = {
  list: () => requests.get("/categories", {}),
  add: (id: string | undefined, name: string) =>
    requests.post("/categories", { id, name }),
  choose: (mentorId: string, categoryId: string) =>
    requests.post("/categories/choose", { mentorId, categoryId }),
};

const Messages = {
  send: (
    selectedConsultant: Mentor | undefined,
    message: Message | undefined
  ) =>
    requests.post("/message/" + selectedConsultant?.id, {
      id: message?.id,
      content: message?.content,
    }),
};

const Account = {
  current: () => requests.get("/account", {}),
  login: (user: UserFormValues) => requests.post("/account/login", user),
  registerMentor: (user: MentorRegisterDto) => requests.post("/account/register/mentor", user),
};

const Admin = {
  usersPaginated: (PageNumber: number, PageSize: number) =>
    axios.get(`/users?PageNumber=${PageNumber}&PageSize=${PageSize}`),
  deleteUser: (email: string | undefined) => requests.del("/admin", { email }),
};

const Skills = {
  list: (categoryId: string | undefined) =>
    requests.get(`/skills/${categoryId}`, {}),
  choose: (categoryId: string, skills: Skill[]) =>
    axios.post(`/skills`, skills),
};

const agent = {
  Mentors,
  Categories,
  Messages,
  Account,
  Admin,
  Skills,
};

export default agent;
