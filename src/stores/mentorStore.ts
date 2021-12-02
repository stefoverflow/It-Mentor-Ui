import { runInAction, makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Mentor } from "../models/mentor";
import { Review } from "../models/review";
import { v4 as uuid } from "uuid";
import { ConsultantSearchDto } from "../models/consultantSearchDto";
import { Category } from "../models/category";
import { Skill } from "../models/skill";

export default class MentorStore {
  // mentors
  fetchMentorsInProgress: boolean = false;
  fetchMentorsError: string = "";
  mentors: Mentor[] = [];
  // mentor
  fetchMentorInProgress: boolean = false;
  fetchMentorError: string = "";
  mentor: Mentor = {
    id: "",
    displayName: "",
    image: "",
    averageStarReview: 0,
    totalStarRating: 0,
    numberOfReviews: 0,
    bio: "",
    reviews: [],
    categories: [],
  };
  // categories
  fetchCategoriesInProgress: boolean = false;
  fetchCategoriesError: string = "";
  categories: Category[] = [];
  // skills
  fetchSkillsInProgress: boolean = false;
  fetchSkillsError: string = "";
  skills: Skill[] = [];
  //////////
  selectedConsultant: Mentor | undefined = undefined;
  review: Review | undefined = undefined;
  // currentConsultants: Consultant[] = [];
  filteredConsultants: ConsultantSearchDto[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  // filterConsultants = async (consultantName: string | undefined) => {
  //   const consultants: ConsultantSearchDto[] = await agent.Consultants.search(
  //     consultantName
  //   );

  //   this.filteredConsultants = consultants;
  // };

  loadConsultants = async (
    PageNumber: number,
    PageSize: number,
    setTotalPages: (totalPages: number) => void
  ) => {
    runInAction(() => {
      this.fetchMentorsInProgress = true;
      this.fetchMentorsError = "";
    });
    try {
      const response = await agent.Mentors.getMentorsPaginated(
        PageNumber,
        PageSize
      );

      const { totalPages, value } = response;
      setTotalPages(totalPages);
      runInAction(() => {
        this.mentors = value;
      });
    } catch (error) {
      runInAction(
        () =>
          (this.fetchMentorsError = "An error occurred while fetching mentors.")
      );
    } finally {
      runInAction(() => (this.fetchMentorsInProgress = false));
    }
  };

  loadConsultant = async (id: string) => {
    runInAction(() => {
      this.fetchMentorInProgress = true;
      this.fetchMentorError = "";
    });
    try {
      const response = await agent.Mentors.getMentor(id);
      const { value } = response;

      runInAction(() => (this.mentor = value));
    } catch (error) {
      runInAction(
        () =>
          (this.fetchMentorError = "An error occurred while fetching mentor.")
      );
    } finally {
      runInAction(() => (this.fetchMentorInProgress = false));
    }
  };

  postReview = async (
    mentorId: string,
    reviewStarRating: number,
    reviewComment: string
  ) => {
    try {
      const response = await agent.Mentors.postAReview(
        mentorId,
        reviewStarRating,
        reviewComment
      );
      console.log("postReview", response);
    } catch (error) {
      console.log("postReview - error", error);
    }
  };

  fetchCategories = async () => {
    runInAction(() => {
      this.fetchCategoriesInProgress = true;
      this.fetchCategoriesError = "";
    });
    try {
      const response = await agent.Categories.list();
      const { value } = response;
      runInAction(() => {
        this.categories = value;
      });
    } catch (error) {
      runInAction(() => {
        this.fetchCategoriesError = "Nismo uspeli da pronađemo kategorije.";
      });
    } finally {
      runInAction(() => {
        this.fetchCategoriesInProgress = false;
      });
    }
  };

  fetchSkills = async (categoryId: string) => {
    runInAction(() => {
      this.fetchSkillsInProgress = true;
      this.fetchSkillsError = "";
    });
    try {
      const response = await agent.Skills.list(categoryId);
      const { value } = response;
      runInAction(() => {
        this.skills = value;
      });
    } catch (error) {
      runInAction(() => {
        this.fetchSkillsError =
          "Nismo uspeli da pronađemo veštine za prosleđenu kategoriju.";
      });
    } finally {
      runInAction(() => (this.fetchSkillsInProgress = false));
    }
  };

  // updateConsultants = (consultant: Consultant) => {
  //   this.consultants.unshift(consultant);
  // };

  updateReviewsForSelectedConsultant = (
    starRating: string | number | undefined,
    comment: string | number | undefined
  ) => {
    // this.setReview(starRating, comment);
    // for (let i = 0; i < this.currentConsultants.length; i++) {
    //   if (this.currentConsultants[i].id === this.selectedConsultant?.id) {
    //     this.addReviewToConsultant(this.currentConsultants[i], this.review!);
    //     let memoConsultant = this.currentConsultants[i];
    //     this.currentConsultants.splice(i, 1, memoConsultant);
    //   }
    // }
  };

  addReviewToConsultant = (consultant: Mentor, review: Review) => {
    consultant.reviews.push(review);
  };

  // loadConsultantsForSelectedCategory = async (
  //   activeCategory: string | undefined
  // ) => {
  //   try {
  //     this.currentConsultants = this.consultants.filter(
  //       (consultant) => consultant.categories[0] === activeCategory
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  selectConsultant = (id: string) => {
    // this.selectedConsultant = this.consultants.find((c) => c.id === id);
  };

  postReviewForSelectedConsultant = async () => {
    // await agent.Consultants.postAReview(this.selectedConsultant, this.review);
  };

  setReview = (
    starReview: number | string | undefined,
    commentReview: string | number | undefined
  ) => {
    this.review = {
      id: uuid(),
      starRating: starReview,
      comment: commentReview,
    };
  };
}
