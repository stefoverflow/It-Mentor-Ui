import { Review } from "./review";

export interface Mentor {
  id: string;
  displayName: string;
  image: string;
  averageStarReview: number;
  totalStarRating: number;
  numberOfReviews: number;
  bio: string;
  reviews: Review[];
  categories: string[];
  skills: string[];
}
