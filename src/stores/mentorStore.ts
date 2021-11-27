import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Consultant } from "../models/consultant";
import { Review } from "../models/review";
import { Pagination } from "../models/pagination";
import { v4 as uuid } from "uuid";
import { ConsultantSearchDto } from "../models/consultantSearchDto";

export default class ConsultantStore {
  fetchMentorsInProgress: boolean = false;
  mentors: Consultant[] = [];
  pagination: Pagination = {
    pageNumber: 0,
    totalPages: 0,
  };
  selectedConsultant: Consultant | undefined = undefined;
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

  loadConsultants = async (PageNumber: number, PageSize: number) => {
    this.fetchMentorsInProgress = true;
    try {
      const response = await agent.Consultants.getMentorsPaginated(
        PageNumber,
        PageSize
      );

      const { totalPages, value } = response;
      console.log("response", response);
      this.pagination.totalPages = totalPages;
      this.pagination.pageNumber = PageNumber;
      this.mentors = value;
      // consultants.forEach((consultant) => {
      //   this.updateConsultants(consultant);
      // });
    } catch (error) {
      console.log(error);
    } finally {
      this.fetchMentorsInProgress = false;
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

  addReviewToConsultant = (consultant: Consultant, review: Review) => {
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
